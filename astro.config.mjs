// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import { env } from './src/env.ts';

// https://astro.build/config
export default defineConfig({
  site: env.PUBLIC_SITE_URL,
  trailingSlash: 'never',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-AR' },
      },
    }),
  ],

  // La barra de herramientas de dev tapa contenido al medir en pantallas chicas.
  devToolbar: { enabled: false },

  build: {
    // Mete el CSS chico directo en el HTML y evita un request extra.
    inlineStylesheets: 'auto',
  },

  // El repo vive en /mnt/c (WSL): inotify no da eventos ahí, así que el
  // watcher de dev tiene que sondear para que funcione el recarga en caliente.
  vite: {
    server: {
      watch: { usePolling: true, interval: 350 },
    },
  },

  image: {
    // Las capturas ya vienen a 2x: no hace falta generar nada más grande.
    responsiveStyles: true,
  },
});
