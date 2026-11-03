import { existsSync } from 'node:fs';
import { z } from 'astro/zod';

// Vercel injects the variables at build time; only local runs need the file.
if (existsSync('.env')) process.loadEnvFile('.env');

const schema = z.object({
  // Normalized to the origin so a trailing slash can't leak into canonical or sitemap URLs.
  PUBLIC_SITE_URL: z.url({ protocol: /^https?$/ }).transform((value) => new URL(value).origin),
});

const parsed = schema.safeParse(process.env);

if (!parsed.success) {
  throw new Error(
    `Invalid environment variables (locally, copy .env.example to .env):\n${z.prettifyError(parsed.error)}`,
  );
}

export const env = parsed.data;
