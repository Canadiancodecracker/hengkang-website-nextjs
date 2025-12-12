import { z } from "zod";

export const SeoSchema = z.object({
  seoTitle: z.string().optional(),
  seoDescription: z.string().max(170).optional(),
  ogImage: z.string().optional()
});

export const HomeSchema = SeoSchema.extend({
  heroHeadline: z.string().min(1),
  heroSubheadline: z.string().min(1),
  heroSlides: z.array(z.object({
    headline: z.string().min(1),
    subheadline: z.string().min(1),
    image: z.string().min(1),
    ctaLabel: z.string().min(1),
    ctaHref: z.string().min(1)
  })).min(1),
  pillars: z.array(z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    icon: z.enum(["quality", "innovation", "sustainability"]).optional()
  })).min(1),
  kpis: z.array(z.object({
    label: z.string().min(1),
    value: z.string().min(1)
  })).min(1).max(6),
  featuredCategories: z.array(z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    href: z.string().min(1)
  })).min(1).max(4),
  storyCtaTitle: z.string().min(1),
  storyCtaDescription: z.string().min(1),
});

export const PageSchema = SeoSchema.extend({
  title: z.string().min(1),
  heroHeadline: z.string().optional(),
  heroDescription: z.string().optional(),
  summary: z.string().max(240).optional(),
  body: z.string().optional()
});

export const ProductSchema = SeoSchema.extend({
  name: z.string().min(1),
  nameZh: z.string().optional(),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  category: z.enum(["pharmaceutical", "nutrition", "animal-nutrition", "materials", "surfactant", "api", "food-additive", "feed-additive"]),
  cas: z.string().optional(),
  formula: z.string().optional(),
  molecularWeight: z.string().optional(),
  shortDescription: z.string().min(1).max(300),
  image: z.string().optional(),
  tags: z.array(z.string()).optional(),
  highlights: z.array(z.string().min(1)).optional(),
  applications: z.array(z.string().min(1)).optional(),
  specs: z.array(z.object({
    item: z.string().min(1),
    value: z.string().min(1)
  })).optional(),
  packaging: z.array(z.object({
    type: z.string().min(1),
    net: z.string().min(1)
  })).optional(),
  documents: z.array(z.object({
    label: z.string().min(1),
    file: z.string().min(1),
    type: z.enum(["TDS", "SDS", "COA", "Certificate", "Other"])
  })).optional(),
  body: z.string().optional()
});

export const PostSchema = SeoSchema.extend({
  title: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  date: z.string().min(10),
  category: z.enum(["press", "industry", "event", "company"]),
  excerpt: z.string().min(1).max(300),
  body: z.string().optional(),
  coverImage: z.string().optional()
});

export const JobSchema = SeoSchema.extend({
  title: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  location: z.string().min(1),
  department: z.string().min(1),
  type: z.enum(["full-time", "part-time", "internship", "contract"]),
  excerpt: z.string().min(1).max(300),
  body: z.string().optional(),
  applyEmail: z.string().email()
});
