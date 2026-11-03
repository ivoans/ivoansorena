import type { APIRoute } from 'astro';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { Resvg } from '@resvg/resvg-js';

import { SITE } from '../config';
import { useTranslations } from '../i18n';

/**
 * Imagen Open Graph 1200×630 generada en el build, con la tipografía del sitio.
 * No depende de ningún servicio externo: los TTF están en el repo.
 */
// Static weights because resvg ignores a variable font's weight axis. Resolved from the project
// root because the page gets bundled elsewhere, so import.meta.url can't locate src/.
const fontPaths = ['Outfit-Light.ttf', 'Outfit-Regular.ttf', 'Outfit-Medium.ttf'].map((file) =>
  resolve('src/assets/fonts', file),
);

// resvg drops the text without an error when a font is missing, so fail the build instead.
const missingFont = fontPaths.find((fontPath) => !existsSync(fontPath));
if (missingFont) throw new Error(`Missing Open Graph font: ${missingFont}`);

const escape = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

export const GET: APIRoute = () => {
  const t = useTranslations();
  const [first, second] = t.meta.ogStats;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#ebe9e4"/>
  <rect x="28" y="28" width="1144" height="574" rx="36" fill="none" stroke="#0b3530" stroke-opacity="0.22"/>

  <text x="88" y="150" font-family="Outfit" font-size="30" font-weight="400" fill="#43625d">${escape(
    t.hero.role,
  )}</text>

  <text x="84" y="286" font-family="Outfit" font-size="104" font-weight="300" fill="#0b3530" letter-spacing="-2.2">${escape(
    t.hero.name,
  )}</text>

  <line x1="88" y1="352" x2="1112" y2="352" stroke="#0b3530" stroke-opacity="0.26"/>

  <text x="88" y="412" font-family="Outfit" font-size="32" font-weight="400" fill="#0b3530">${escape(
    t.hero.stack.join('  ·  '),
  )}</text>

  <text x="88" y="528" font-family="Outfit" font-size="60" font-weight="300" fill="#0b3530">${escape(
    first!.value,
  )}</text>
  <text x="88" y="570" font-family="Outfit" font-size="21" font-weight="400" fill="#43625d">${escape(
    first!.label,
  )}</text>

  <text x="396" y="528" font-family="Outfit" font-size="60" font-weight="300" fill="#0b3530">${escape(
    second!.value,
  )}</text>
  <text x="396" y="570" font-family="Outfit" font-size="21" font-weight="400" fill="#43625d">${escape(
    second!.label,
  )}</text>

  <rect x="884" y="492" width="228" height="56" rx="28" fill="#333333"/>
  <text x="998" y="528" font-family="Outfit" font-size="24" font-weight="500" fill="#b5dda8" text-anchor="middle">${escape(
    SITE.domain,
  )}</text>
</svg>`;

  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: 1200 },
    font: {
      fontFiles: fontPaths,
      defaultFontFamily: 'Outfit',
      loadSystemFonts: false,
    },
  });

  return new Response(new Uint8Array(resvg.render().asPng()), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
