# ivoansorena.com.ar

Personal portfolio of Ivo Ansorena Pereira, Full Stack Developer.
Live at **[ivoansorena.vercel.app](https://ivoansorena.vercel.app)**.

A single static page that presents two production systems through case studies
and screenshots, plus other projects, background and contact.

## Stack

- [Astro](https://astro.build) 7 + TypeScript (strict), fully static, no UI framework
- Plain CSS with design tokens, self-hosted variable fonts (Outfit, Inter)
- `astro:assets` for responsive AVIF/WebP screenshots
- Open Graph image generated at build time with `@resvg/resvg-js`
- Deployed on Vercel

## Features

- Accessible lightbox built on `<dialog>` (keyboard navigation, closes with Esc)
- CSS-only phone frame for mobile screenshots
- Project index with hover/focus previews on desktop and a simple list on mobile
- All copy in a single translation file, with Astro i18n ready for an English version
- SEO: canonical URL, Open Graph/Twitter cards, JSON-LD, sitemap and robots
- Respects `prefers-reduced-motion`, includes a skip link and AA contrast

## Getting started

Requires **Node 22.23.4+** (see `.nvmrc`) and **pnpm** (version pinned in
`packageManager`).

```bash
nvm use
pnpm install
cp .env.example .env   # then set PUBLIC_SITE_URL
pnpm dev               # http://localhost:4321
pnpm build             # astro check + production build into dist/
pnpm preview           # serve dist/ locally
```

`PUBLIC_SITE_URL` is the URL of the deployed site. It drives the canonical URL,
Open Graph tags, JSON-LD, sitemap and robots, and the build fails without it. On
Vercel, set it in the project's environment variables.

## Project structure

```
src/
  env.ts                 validates environment variables at startup
  config.ts              site URL, email, social links, CV path, anchors
  i18n/es.ts             all site copy, including image alt text
  i18n/index.ts          translation helper
  data/proyectos.ts      resolves screenshots from src/assets/proyectos/
  styles/tokens.css      colors, type scale, spacing, radii
  styles/global.css      reset, utilities and @font-face
  layouts/Base.astro     <head>, header, footer and reveal animation
  pages/index.astro      the only page
  pages/og.png.ts        builds /og.png (1200×630)
  pages/robots.txt.ts    builds /robots.txt
  components/
    Header.astro, Footer.astro, Seo.astro
    ui/                  Button, Pill, StatCard, SectionHead, Icon
    media/               Shot, Placeholder, PhoneFrame, Lightbox
    sections/            Hero, ProjectIndex, CaseStudy, Feature,
                         OtherProjects, About, Contact
```

Screenshots live in `src/assets/proyectos/` and are picked up by file name. A
missing file renders a placeholder showing the expected name.

## Adding English

1. Copy `src/i18n/es.ts` to `src/i18n/en.ts` and translate it.
2. Register it in `languages` and `dictionaries` in `src/i18n/index.ts`.
3. Add `'en'` to `i18n.locales` in `astro.config.mjs`.
4. Create `src/pages/en/index.astro` mirroring `index.astro`.

Spanish stays at `/` and English is served under `/en/`.
