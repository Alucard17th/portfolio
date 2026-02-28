import * as React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Copy, Github, Linkedin, Mail, Send, X } from "lucide-react";

import type { ContactData, SocialLink } from "@/data/portfolio";
import { copyToClipboard } from "@/lib/clipboard";

import { SectionShell } from "@/components/sections/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const iconForSocial: Record<SocialLink["icon"], React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  x: X,
  email: Mail,
};

export function ContactSection({ data }: { data: ContactData }) {
  const [copied, setCopied] = React.useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onTouched",
  });

  const onCopy = React.useCallback(async () => {
    await copyToClipboard(data.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }, [data.email]);

  const onSubmit = form.handleSubmit(async (values) => {
    const subject = encodeURIComponent("Portfolio contact");
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`
    );
    window.location.href = `mailto:${data.email}?subject=${subject}&body=${body}`;
  });

  return (
    <SectionShell
      id="contact"
      eyebrow="Let’s talk"
      title={data.heading}
      description={data.blurb}
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <Reveal>
          <Card className="bg-card/70 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-base">Send a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-3.5" onSubmit={onSubmit} noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" autoComplete="name" {...form.register("name")} />
                    {form.formState.errors.name ? (
                      <p className="text-xs text-destructive">
                        {form.formState.errors.name.message}
                      </p>
                    ) : null}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      autoComplete="email"
                      {...form.register("email")}
                    />
                    {form.formState.errors.email ? (
                      <p className="text-xs text-destructive">
                        {form.formState.errors.email.message}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" {...form.register("message")} />
                  {form.formState.errors.message ? (
                    <p className="text-xs text-destructive">
                      {form.formState.errors.message.message}
                    </p>
                  ) : null}
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <Button type="submit" className="gap-2">
                    <Send className="h-4 w-4" />
                    Send
                  </Button>

                  <Button type="button" variant="outline" onClick={onCopy}>
                    {copied ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                    Copy email
                  </Button>

                  <span className="text-sm text-muted-foreground">{data.email}</span>
                </div>
              </form>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal delay={0.08}>
          <Card className="bg-card/70 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-base">Find me online</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2 rounded-lg border border-border bg-background/40 p-4 text-sm">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-muted-foreground">Email</span>
                  <a className="font-medium hover:underline" href={`mailto:${data.email}`}>
                    {data.email}
                  </a>
                </div>
                {data.phone ? (
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-muted-foreground">Phone</span>
                    <a className="font-medium hover:underline" href={`tel:${data.phone}`}>
                      {data.phone}
                    </a>
                  </div>
                ) : null}
                {data.website ? (
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-muted-foreground">Website</span>
                    <a
                      className="font-medium hover:underline"
                      href={data.website}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {data.website}
                    </a>
                  </div>
                ) : null}
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {(data.socials ?? []).map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={s.href.startsWith("mailto:") ? undefined : "noreferrer"}
                    className="group flex items-center justify-between rounded-lg border border-border bg-background/40 px-4 py-3 text-sm transition hover:bg-accent"
                  >
                    <span className="flex items-center gap-2">
                      {React.createElement(iconForSocial[s.icon], {
                        className: "h-4 w-4 text-muted-foreground group-hover:text-foreground",
                      })}
                      {s.label}
                    </span>
                    <span className="text-xs text-muted-foreground">Open</span>
                  </a>
                ))}
              </div>

              <div className="mt-6 rounded-lg border border-border bg-background/40 p-4">
                <p className="text-sm font-medium">Response time</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Placeholder: Typically within 24 hours.
                </p>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </SectionShell>
  );
}
