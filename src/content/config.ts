// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

export const ThemeCategories = new Map([
  ["recent", "Recently Added"],
  ["blog", "Blog"],
  ["landing-page", "Landing Page"],
  ["portfolio", "Portfolio"],
  ["ecommerce", "E-commerce"],
  ["docs", "Docs"],
  ["minimal", "Minimal"],
  ["saas", "SaaS"],
  ["education", "Education"],
  ["business", "Business"],
  ["marketing", "Marketing"],
  ["other", "Other"],
] as const);

export const ThemeTools = new Map([
  ["astro", "Astro"],
  ["medusa", "Medusa"],
  ["mdx", "MDX"],
  ["react", "React"],
  ["sass", "SASS"],
  ["tailwind", "Tailwind"],
  ["typescript", "TypeScript"],
] as const);

// 2. Define a `type` and `schema` for each collection

const themeCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string().min(3),
      description: z.string().min(5),
      fullDescription: z.string().optional(),
      cover: image().refine((img) => img.width >= 1080, {
        message: "Cover image must be at least 1080 pixels wide!",
      }),
      images: z.array(image()).default([]),
      author: z.object({
        url: z.string(),
        name: z.string(),
        avatar: z.string(),
      }),
      categories: z.array(
        z.enum(Array.from(ThemeCategories.keys()) as [string, ...string[]]),
      ),
      repoUrl: z.string().url().optional(),
      demoUrl: z.string().url().optional(),
      buyUrl: z.string().url().optional(),
      tools: z
        .array(z.enum(Array.from(ThemeTools.keys()) as [string, ...string[]]))
        .default([]),
      related: z.array(z.string()).max(3).default([]),
      publishDate: z.date({ coerce: true }).optional(),
      badge: z.string().optional(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  themes: themeCollection,
};
