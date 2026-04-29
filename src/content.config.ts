import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts live under src/content/blog/<lang>/<slug>.md.
// The first path segment of `id` is the locale, the rest is the slug.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

// Static "legal" pages (privacy, support, thanks) — one MD file per locale per page.
// Path: src/content/legal/<lang>/<page>.md.  All translatable strings live in
// frontmatter so translation agents work on structured YAML, not free prose.
// Page templates pick the right shape based on slug. HTML fragments inside
// strings (e.g. mailto links) are rendered with `set:html`.
const legal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),

    // privacy.md
    lastUpdated: z.string().optional(),
    sections: z
      .array(
        z.object({
          heading: z.string(),
          body: z.string(),
        }),
      )
      .optional(),

    // support.md
    intro: z.string().optional(),
    cards: z
      .array(
        z.object({
          icon: z.enum(['email', 'info']),
          title: z.string(),
          body: z.string(),
          buttonText: z.string().optional(),
          buttonHref: z.string().optional(),
        }),
      )
      .optional(),
    faqTitle: z.string().optional(),
    faqItems: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        }),
      )
      .optional(),

    // thanks.md
    heading: z.string().optional(),
    subheading: z.string().optional(),
    note: z.string().optional(),
    backLink: z.string().optional(),
  }),
});

export const collections = { blog, legal };
