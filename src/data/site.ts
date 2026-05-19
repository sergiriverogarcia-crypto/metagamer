export const SITE = {
  name: "MetaGamer",
  description:
    "Guias, trucos, rankings y ajustes utiles para jugar mejor en PC, PlayStation, Xbox, Switch y movil.",
  url: "https://metagamer-github.pages.dev",
  author: "Equipo MetaGamer"
};

export const categories = [
  {
    slug: "guias",
    name: "Guias",
    description: "Rutas claras para avanzar, empezar mejor y evitar perder horas."
  },
  {
    slug: "trucos",
    name: "Trucos",
    description: "Consejos practicos, atajos seguros y decisiones que mejoran la partida."
  },
  {
    slug: "rankings",
    name: "Rankings",
    description: "Listas razonadas para elegir armas, builds, juegos y modos."
  },
  {
    slug: "configuracion",
    name: "Configuracion",
    description: "Ajustes de rendimiento, control, graficos, audio y accesibilidad."
  },
  {
    slug: "noticias-utiles",
    name: "Noticias utiles",
    description: "Cambios, temporadas y novedades explicadas con impacto real para jugar."
  }
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
