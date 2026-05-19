import type { CollectionEntry } from "astro:content";

export type Article = CollectionEntry<"articles">;

export function sortByUpdated(articles: Article[]) {
  return [...articles].sort(
    (a, b) => b.data.updated.getTime() - a.data.updated.getTime()
  );
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("es", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(date);
}

export function articleSlug(article: Article) {
  return article.id.replace(/\.md$/, "");
}
