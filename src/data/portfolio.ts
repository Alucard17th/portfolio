export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "x" | "email";
};

export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type HeroData = {
  headline: string;
  subheadline: string;
  locationLine: string;
  ctas: {
    primary: { label: string; href: `#${string}` };
    secondary: { label: string; href: `#${string}` };
    downloadCv: { label: string; href: string };
  };
  stats: Array<{ label: string; value: string }>; 
};

export type SkillCategory = {
  category:
    | "Frontend"
    | "Backend"
    | "Database"
    | "DevOps"
    | "Tools";
  items: Array<{
    name: string;
    icon: "code" | "server" | "database" | "cloud" | "wrench";
    level: number; 
    highlights: string[];
  }>;
};

export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: {
    alt: string;
    src: string;
  };
  results: string[];
  tech: string[];
  links: {
    github?: string;
    live?: string;
    caseStudy?: string;
  };
  featured: boolean;
};

export type ExperienceItem = {
  title: string;
  org: string;
  period: string;
  location: string;
  achievements: string[];
};

export type AboutData = {
  heading: string;
  paragraphs: string[];
  principles: Array<{ title: string; description: string }>;
};

export type ContactData = {
  heading: string;
  blurb: string;
  email: string;
  phone?: string;
  website?: string;
  socials: SocialLink[];
};

export type RemoteWorkData = {
  heading: string;
  blurb: string;
  timezone: string;
  availability: string;
  englishLevel: string;
  tools: string[];
  workStyle: string[];
};

export type FooterData = {
  copyrightName: string;
  socials: SocialLink[];
};

export type SeoData = {
  title: string;
  description: string;
  canonicalUrl: string;
};

export type PortfolioData = {
  seo: SeoData;
  nav: NavItem[];
  hero: HeroData;
  skills: SkillCategory[];
  projects: {
    heading: string;
    subheading: string;
    items: Project[];
  };
  experience: {
    heading: string;
    items: ExperienceItem[];
  };
  remote: RemoteWorkData;
  about: AboutData;
  contact: ContactData;
  footer: FooterData;
};

export const portfolio: PortfolioData = {
  seo: {
    title: "Noureddine Eddallal | Full-Stack Developer",
    description:
      "Full-Stack Developer focused on performant web apps and scalable REST APIs. PHP/Laravel + modern JavaScript (React/Vue/Nuxt/Node).",
    canonicalUrl: "https://alucard17h.github.io/my_portfolio/",
  },
  nav: [
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Case Study", href: "#case-study" },
    { label: "Remote", href: "#remote" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    headline: "Noureddine Eddallal — Full-Stack Developer",
    subheadline:
      "PHP/Laravel • JavaScript (React/Vue/Nuxt/Node) • REST APIs • Open to Full-Remote",
    locationLine: "Open to: Full-Remote • Agadir, Morocco",
    ctas: {
      primary: { label: "View Projects", href: "#projects" },
      secondary: { label: "Contact Me", href: "#contact" },
      downloadCv: { label: "Download CV", href: "/cv.pdf" },
    },
    stats: [
      { label: "Years Experience", value: "10+" },
      { label: "Core Stack", value: "PHP • Laravel • JavaScript" },
      { label: "Frontend", value: "Vue • Nuxt • HTML/CSS" },
    ],
  },
  skills: [
    {
      category: "Frontend",
      items: [
        {
          name: "JavaScript + UI Development",
          icon: "code",
          level: 86,
          highlights: ["React", "Vue", "MUI / shadcn/ui"],
        },
        {
          name: "Vue.js + Nuxt.js",
          icon: "code",
          level: 78,
          highlights: ["SPA/SSR", "Clean UI", "Maintainability"],
        },
      ],
    },
    {
      category: "Backend",
      items: [
        {
          name: "PHP + Laravel",
          icon: "server",
          level: 88,
          highlights: ["REST APIs", "Performance", "Security"],
        },
        {
          name: "Node.js + Express.js",
          icon: "server",
          level: 76,
          highlights: ["REST APIs", "Integration", "Production delivery"],
        },
      ],
    },
    {
      category: "Database",
      items: [
        {
          name: "SQL + Data Modeling",
          icon: "database",
          level: 74,
          highlights: ["Data retrieval", "Performance", "Reliable storage"],
        },
      ],
    },
    {
      category: "DevOps",
      items: [
        {
          name: "Delivery + Collaboration",
          icon: "cloud",
          level: 76,
          highlights: ["Agile/Scrum", "Stakeholder communication", "Project execution"],
        },
      ],
    },
    {
      category: "Tools",
      items: [
        {
          name: "Web Fundamentals",
          icon: "wrench",
          level: 84,
          highlights: ["HTML", "CSS", "Bootstrap", "jQuery"],
        },
        {
          name: "WordPress",
          icon: "wrench",
          level: 80,
          highlights: ["Themes", "Plugins", "Client projects"],
        },
      ],
    },
  ],
  projects: {
    heading: "Featured Projects",
    subheading:
      "Recruiters scan fast. Each project below leads with impact, outcomes, and the tech behind it.",
    items: [
      {
        id: "analytics-saas",
        name: "Analytics SaaS Dashboard",
        tagline: "Turning raw data into weekly decisions",
        description:
          "A production-ready dashboard with role-based access, optimized charts, and an opinionated design system.",
        image: {
          alt: "Project screenshot placeholder",
          src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
        },
        results: [
          "Reduced page load time by 48% with code-splitting + caching",
          "Increased trial-to-paid conversion by 12% through UX improvements",
        ],
        tech: ["React", "TypeScript", "Tailwind", "Node", "Postgres"],
        links: {
          github: "https://github.com/yourname/yourrepo",
          live: "https://example.com",
        },
        featured: true,
      },
      {
        id: "ecommerce-performance",
        name: "E-commerce Performance Rebuild",
        tagline: "Fast storefront, higher revenue",
        description:
          "A performance-first rebuild focusing on Core Web Vitals, accessibility, and conversion-focused UI patterns.",
        image: {
          alt: "Project screenshot placeholder",
          src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1600&q=80",
        },
        results: [
          "Improved LCP from 4.2s to 2.1s",
          "Boosted mobile checkout completion by 9%",
        ],
        tech: ["React", "TypeScript", "Tailwind", "Stripe"],
        links: {
          github: "https://github.com/yourname/yourrepo",
          live: "https://example.com",
        },
        featured: true,
      },
      {
        id: "devtools",
        name: "Internal DevTools Platform",
        tagline: "Developer productivity at scale",
        description:
          "A secure internal portal with workflow automation, audit logs, and a clean admin experience.",
        image: {
          alt: "Project screenshot placeholder",
          src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80",
        },
        results: [
          "Saved ~6 hours/week across the team via automation",
          "Standardized UI components to reduce feature lead time",
        ],
        tech: ["React", "Node", "Postgres", "Docker"],
        links: {
          github: "https://github.com/yourname/yourrepo",
        },
        featured: false,
      },
    ],
  },
  remote: {
    heading: "How I work remotely",
    blurb:
      "I’m comfortable in remote-first environments with async-friendly workflows, clear communication, and reliable delivery.",
    timezone: "GMT+0 (Morocco)",
    availability: "Flexible hours",
    englishLevel: "Professional working proficiency",
    tools: [
      "GitHub",
      "GitLab",
      "Microsoft Teams",
      "Asana",
      "Google Drive",
      "Windsurf (AI IDE)",
    ],
    workStyle: [
      "Async-first communication",
      "Clear PRs and code reviews",
      "Documentation habits (setup, decisions, handoffs)",
      "Ownership mindset and predictable delivery",
    ],
  },
  experience: {
    heading: "Experience",
    items: [
      {
        title: "Project Manager & Full-Stack Developer",
        org: "Jobase",
        period: "2024",
        location: "",
        achievements: [
          "Led cross-functional teams to develop and launch telehealth solutions, improving healthcare accessibility",
          "Defined project scope, timelines, and deliverables, ensuring alignment with business objectives",
          "Managed stakeholder communication, gathering requirements and providing progress updates",
          "Implemented Agile and Scrum methodologies to optimize workflows and project execution",
          "Designed, developed, and maintained scalable backend systems, ensuring high performance and security",
        ],
      },
      {
        title: "Full-Stack Web Developer",
        org: "Soocrin",
        period: "2022 — 2024",
        location: "",
        achievements: [
          "Collaborated with a team of developers to deliver multiple projects",
          "Developed and maintained web applications using Laravel, JavaScript, Node.js, React, Vue.js, Nuxt.js, and Express.js",
          "Implemented and maintained REST APIs to improve data retrieval and user experience",
          "Worked in Agile environments with daily stand-ups and sprint planning",
        ],
      },
      {
        title: "Auto-entrepreneur",
        org: "Freelance",
        period: "2016 — 2021",
        location: "",
        achievements: [
          "Delivered websites using WordPress and Laravel tailored to client requirements",
          "Focused on building high-quality web solutions combining functionality and aesthetics",
        ],
      },
      {
        title: "Web Developer",
        org: "Polytechnique",
        period: "2015 — 2016",
        location: "",
        achievements: [
          "Completed design and development of multiple features to enhance user engagement",
          "Implemented authentication and authorization systems to improve data security",
          "Resolved bugs, performed system testing, and optimized performance of existing applications",
        ],
      },
    ],
  },
  about: {
    heading: "About",
    paragraphs: [
      "10-year experienced web developer with a strong focus on building and maintaining performant web applications and scalable REST APIs.",
      "Experienced across PHP/Laravel, WordPress, and modern JavaScript (React/Vue/Nuxt/Node). Comfortable in Agile teams and remote-first workflows.",
      "I embrace challenges and treat problems as gateways—ambitious, boundary-pushing, and focused on top-notch user experiences and long-term client satisfaction.",
    ],
    principles: [
      {
        title: "Education",
        description:
          "Master in Computer Science — ISIAM, Agadir (2010–2015). Baccalaureate S.V.T. — IIK, Agadir (2010).",
      },
      {
        title: "Competencies",
        description:
          "Remote-ready collaboration • Backend & API-first delivery • Quality-oriented mindset",
      },
      {
        title: "Technologies",
        description:
          "PHP • Laravel • JavaScript • Node.js • Express.js • React • Vue.js • Nuxt.js • REST APIs • WordPress • jQuery • HTML • CSS • Bootstrap • MUI • shadcn/ui",
      },
    ],
  },
  contact: {
    heading: "Contact",
    blurb:
      "If you’d like to collaborate or discuss an opportunity, reach out—I'm responsive and happy to talk.",
    email: "eddallal.noureddine@gmail.com",
    phone: "+212707673488",
    website: "https://alucard17h.github.io/my_portfolio/",
    socials: [
      { label: "GitHub", href: "https://github.com/Alucard17th", icon: "github" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/noureddine-eddallal-03aba3182/",
        icon: "linkedin",
      },
      { label: "Email", href: "mailto:eddallal.noureddine@gmail.com", icon: "email" },
    ],
  },
  footer: {
    copyrightName: "Noureddine Eddallal",
    socials: [
      { label: "GitHub", href: "https://github.com/Alucard17th", icon: "github" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/noureddine-eddallal-03aba3182/",
        icon: "linkedin",
      },
      { label: "Email", href: "mailto:eddallal.noureddine@gmail.com", icon: "email" },
    ],
  },
};
