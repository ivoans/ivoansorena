import type { APIRoute } from 'astro';

import { SITE } from '../config';

// Generated because the Sitemap line needs the absolute URL of the current deployment.
export const GET: APIRoute = () => {
  const sitemap = new URL('/sitemap-index.xml', SITE.url).href;

  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
