import {locales} from "@/i18n/locales";

export function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.hengkangchina.com";
  const urls = [
    "",
    "/about",
    "/products",
    "/innovation",
    "/sustainability",
    "/news",
    "/careers",
    "/contact"
  ];

  const entries = locales.flatMap((l) => urls.map((u) => `${base}/${l}${u}`));
  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    entries.map((loc) => `<url><loc>${loc}</loc></url>`).join("") +
    `</urlset>`;

  return new Response(xml, {headers: {"Content-Type": "application/xml"}});
}
