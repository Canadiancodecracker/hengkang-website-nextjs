import {z} from "zod";

export const SeoSchema = z.object({
  seoTitle: z.string().min(1),
  seoDescription: z.string().min(1).max(170),
  ogImage: z.string().optional()
});

export const HomeSchema = SeoSchema.extend({
  heroHeadline: z.string().min(1),
  heroSubheadline: z.string().min(1),
  heroSlides: z.array(z.object({
    title: z.string().min(1),
    subtitle: z.string().min(1),
    image: z.string().min(1),
    ctaLabel: z.string().min(1),
    ctaHref: z.string().min(1)
  })).min(1),
  pillars: z.array(z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    icon: z.enum(["quality","innovation","sustainability"])
  })).length(3),
  kpis: z.array(z.object({
    label: z.string().min(1),
    value: z.string().min(1)
  })).min(3).max(6),
  featuredCategories: z.array(z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    href: z.string().min(1)
  })).min(2).max(4),
  storyCtaTitle: z.string().min(1),
  storyCtaDescription: z.string().min(1),
});

export const PageSchema = SeoSchema.extend({
  title: z.string().min(1),
  summary: z.string().min(1).max(240),
  body: z.string().min(1)
});

export const ProductSchema = SeoSchema.extend({
  name: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  category: z.enum(["api","food-additive","feed-additive"]),
  shortDescription: z.string().min(1).max(260),
  highlights: z.array(z.string().min(1)).min(2).max(6),
  applications: z.array(z.string().min(1)).min(1).max(8),
  specs: z.array(z.object({
    item: z.string().min(1),
    value: z.string().min(1)
  })).min(3),
  packaging: z.array(z.object({
    type: z.string().min(1),
    net: z.string().min(1)
  })).min(1),
  documents: z.array(z.object({
    label: z.string().min(1),
    file: z.string().min(1),
    type: z.enum(["TDS","SDS","COA","Certificate","Other"])
  })).optional()
});

export const PostSchema = SeoSchema.extend({
  title: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  date: z.string().min(10),
  category: z.enum(["press","industry","event"]),
  excerpt: z.string().min(1).max(260),
  body: z.string().min(1),
  coverImage: z.string().optional()
});

export const JobSchema = SeoSchema.extend({
  title: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  location: z.string().min(1),
  department: z.string().min(1),
  type: z.enum(["full-time","part-time","internship","contract"]),
  excerpt: z.string().min(1).max(260),
  body: z.string().min(1),
  applyEmail: z.string().email()
});
