import { es, type Translation } from './es';

export const defaultLang = 'es' as const;

/** Idiomas disponibles. Para sumar inglés: crear `en.ts` y registrarlo acá y en `astro.config.mjs`. */
export const languages = {
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

const dictionaries: Record<Lang, Translation> = { es };

export function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && value in dictionaries;
}

/** Devuelve el diccionario del idioma pedido, con fallback al idioma por defecto. */
export function useTranslations(lang?: string | undefined): Translation {
  return isLang(lang) ? dictionaries[lang] : dictionaries[defaultLang];
}

/** Prefijo de URL del idioma: vacío para el idioma por defecto (`/`), `/en` para el resto. */
export function localePath(lang: Lang, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean === '/' ? '' : clean}`;
}

export type { Translation };
