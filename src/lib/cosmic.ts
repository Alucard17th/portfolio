import type { Project } from "@/data/portfolio";

type CosmicObject = {
  _id?: string;
  id?: string;
  slug?: string;
  title?: string;
  content?: string;
  metadata?: Record<string, unknown>;
};

function readString(value: unknown): string | undefined {
  return typeof value === "string" && value.trim().length > 0 ? value : undefined;
}

function readStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((v) => typeof v === "string") as string[];
}

function readBoolean(value: unknown): boolean {
  return Boolean(value);
}

function readImageUrl(value: unknown): string | undefined {
  if (!value) return undefined;
  if (typeof value === "string") return value;
  if (typeof value === "object") {
    const v = value as { url?: unknown; imgix_url?: unknown };
    if (typeof v.imgix_url === "string") return v.imgix_url;
    if (typeof v.url === "string") return v.url;
  }
  return undefined;
}

export async function getProjects(): Promise<CosmicObject[]> {
  const COSMIC_BUCKET = import.meta.env.VITE_COSMIC_BUCKET;
  const READ_KEY = import.meta.env.VITE_COSMIC_READ_KEY;

  if (!COSMIC_BUCKET || !READ_KEY) return [];

  const url = `https://api.cosmicjs.com/v3/buckets/${COSMIC_BUCKET}/objects?type=projects&read_key=${READ_KEY}`;
  const response = await fetch(url);
  if (!response.ok) return [];

  const data = (await response.json()) as { objects?: unknown };
  const objects = data.objects;
  return Array.isArray(objects) ? (objects as CosmicObject[]) : [];
}

export function cosmicObjectToProject(obj: CosmicObject): Project {
  const md = obj.metadata ?? {};

  const id =
    readString(obj.slug) ??
    readString(obj._id) ??
    readString(obj.id) ??
    (typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : String(Date.now()));

  const name = readString(obj.title) ?? "Untitled project";
  const tagline =
    readString(md.tagline) ??
    readString(md.subtitle) ??
    readString(md.summary) ??
    "";
  const description =
    readString(md.description) ??
    readString(obj.content) ??
    "";

  const imageSrc =
    readImageUrl(md.image) ??
    readImageUrl(md.cover) ??
    readImageUrl(md.thumbnail) ??
    "";

  const results =
    readStringArray(md.results).length > 0
      ? readStringArray(md.results)
      : readStringArray(md.impact);

  const tech =
    readStringArray(md.tech).length > 0
      ? readStringArray(md.tech)
      : readStringArray(md.stack).length > 0
        ? readStringArray(md.stack)
        : readStringArray((md as { technologies?: unknown }).technologies);

  const links = {
    github: readString(md.github) ?? readString(md.githubUrl),
    live:
      readString(md.live) ??
      readString(md.liveUrl) ??
      readString(md.demo) ??
      readString((md as { url?: unknown }).url),
    caseStudy: readString(md.caseStudy) ?? readString(md.caseStudyUrl),
  };

  const featured = readBoolean(md.featured);

  return {
    id,
    name,
    tagline,
    description,
    image: {
      alt: `${name} screenshot`,
      src: imageSrc,
    },
    results,
    tech,
    links,
    featured,
  };
}

export async function getPortfolioProjectsFromCosmic(): Promise<Project[]> {
  const objects = await getProjects();
  return objects.map(cosmicObjectToProject);
}
