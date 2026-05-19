# MetaGamer

MVP SEO de videojuegos en espanol orientado a guias, trucos, rankings y configuracion para Espana/LatAm.

## Comandos

```bash
npm install
npm run dev
npm run build
```

## Publicar articulos en la nube

La web sigue siendo Astro estatica. En produccion, los articulos no se publican escribiendo desde el navegador local, sino guardando cambios en GitHub con Pages CMS.

Flujo recomendado:

1. Sube este proyecto a un repositorio de GitHub.
2. Conecta el repositorio en Pages CMS.
3. Pages CMS leera `.pages.yml` y mostrara la coleccion `Articulos`.
4. Crea, edita o elimina articulos desde el CMS.
5. Guarda los cambios. Pages CMS escribira Markdown en `src/content/articles` y portadas en `public/images`.
6. El hosting reconstruira la web automaticamente y el articulo aparecera en portada, categoria, detalle y sitemap.

La configuracion esta en `.pages.yml`:

- Media: `public/images`
- Ruta publica de imagenes: `/images`
- Articulos: `src/content/articles`
- Nombre de archivo: `{slug}.md`
- Categorias permitidas: `guias`, `trucos`, `rankings`, `configuracion`, `noticias-utiles`

### Portadas de articulos

Puedes escribir la portada de tres formas y la web la cargara igual:

- `hooter.png`
- `images/hooter.png`
- `/images/hooter.png`

La ruta final recomendada para Markdown es `/images/nombre-de-la-foto.png`. Si escribes solo el nombre del archivo, MetaGamer lo interpretara automaticamente como una imagen dentro de `public/images`.

## Cloudflare Pages

Configuracion recomendada al conectar el repositorio de GitHub en Cloudflare Pages:

- Framework preset: `Astro`
- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: dejar vacio

Cloudflare Pages reconstruira la web cada vez que subas cambios a GitHub. Esto es lo que permite que un articulo creado en Pages CMS aparezca publicado despues del redeploy.

## Admin local

`/admin/` sigue siendo un prototipo local para preparar borradores, revisar el dashboard y generar Markdown. No puede escribir archivos reales del proyecto desde el navegador porque la web es estatica.

Para publicar online usa Pages CMS. Para pruebas locales, descarga el Markdown del admin y colocalo manualmente en `src/content/articles`; si subes portada, guardala en `public/images` y usa una ruta como `/images/mi-portada.webp`.

## Contenido

Los articulos viven en `src/content/articles` y usan Astro Content Collections. Cada archivo Markdown incluye metadatos SEO, categoria, juego, plataformas, fechas, autor, tags, portada y tiempo de lectura.

Ejemplo minimo:

```md
---
title: "Guia completa para mejorar en un juego"
description: "Consejos claros, accionables y actualizados para jugar mejor sin perder tiempo."
slug: "guia-completa-mejorar-juego"
category: "guias"
game: "Fortnite"
platforms: ["PC", "PlayStation", "Xbox"]
date: 2026-05-19
updated: 2026-05-19
author: "Equipo MetaGamer"
cover: "/images/mi-portada.webp"
tags: ["guia", "principiantes", "rendimiento"]
readingTime: "6 min"
---

## Introduccion

Contenido original del articulo.
```

## AdSense

El proyecto incluye placeholders visuales mediante el componente `AdSlot`, pero no carga codigo real de AdSense. Cuando la cuenta este aprobada, sustituye el placeholder por el script oficial usando el publisher ID correspondiente.
