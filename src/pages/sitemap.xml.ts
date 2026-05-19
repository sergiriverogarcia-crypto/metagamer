import { getCollection } from "astro:content";
import { SITE, categories } from "@/data/site";
import { articleSlug } from "@/utils/articles";

export async function GET() {
  const articles = await getCollection("articles");
  const urls = [
    "",
    "sobre-nosotros/",
    "contacto/",
    "privacidad/",
    "cookies/",
    "terminos/",
    ...categories.map((category) => `categoria/${category.slug}/`),
    ...articles.map((article) => `articulos/${articleSlug(article)}/`)
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${new URL(url, SITE.url).toString()}</loc>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml" }
  });
}
