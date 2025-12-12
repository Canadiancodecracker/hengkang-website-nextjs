import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import {z} from "zod";
import {Locale} from "@/i18n/locales";
import {HomeSchema, PageSchema, ProductSchema, PostSchema, JobSchema} from "./schemas";

const CONTENT_ROOT = path.join(process.cwd(), "content");

function readFile(p: string) {
  return fs.readFileSync(p, "utf8");
}

function listDir(p: string) {
  if (!fs.existsSync(p)) return [];
  return fs.readdirSync(p).filter((f) => !f.startsWith("."));
}

function parseMd<T extends z.ZodTypeAny>(filepath: string, schema: T) {
  const raw = readFile(filepath);
  const {data, content} = matter(raw);
  const parsed = schema.safeParse({...data, body: content});
  if (!parsed.success) {
    const err = parsed.error.flatten();
    throw new Error(`Invalid content: ${filepath}\n${JSON.stringify(err.fieldErrors, null, 2)}`);
  }
  return parsed.data as z.infer<T> & {body: string};
}

export function getHome(locale: Locale) {
  const filepath = path.join(CONTENT_ROOT, locale, "pages", "home.md");
  return parseMd(filepath, HomeSchema);
}

export function getPage(locale: Locale, slug: string) {
  const filepath = path.join(CONTENT_ROOT, locale, "pages", `${slug}.md`);
  return parseMd(filepath, PageSchema);
}

export function getProducts(locale: Locale) {
  const dir = path.join(CONTENT_ROOT, locale, "products");
  return listDir(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => parseMd(path.join(dir, f), ProductSchema))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getProduct(locale: Locale, slug: string) {
  const filepath = path.join(CONTENT_ROOT, locale, "products", `${slug}.md`);
  return parseMd(filepath, ProductSchema);
}

export function getPosts(locale: Locale) {
  const dir = path.join(CONTENT_ROOT, locale, "news");
  return listDir(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => parseMd(path.join(dir, f), PostSchema))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(locale: Locale, slug: string) {
  const filepath = path.join(CONTENT_ROOT, locale, "news", `${slug}.md`);
  return parseMd(filepath, PostSchema);
}

export function getJobs(locale: Locale) {
  const dir = path.join(CONTENT_ROOT, locale, "jobs");
  return listDir(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => parseMd(path.join(dir, f), JobSchema))
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getJob(locale: Locale, slug: string) {
  const filepath = path.join(CONTENT_ROOT, locale, "jobs", `${slug}.md`);
  return parseMd(filepath, JobSchema);
}
