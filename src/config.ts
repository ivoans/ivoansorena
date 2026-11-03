import { env } from './env';

/**
 * Datos del sitio que no son texto traducible: URLs, rutas y handles.
 * La prosa vive en `src/i18n/<lang>.ts`.
 */
export const SITE = {
  url: env.PUBLIC_SITE_URL,
  domain: new URL(env.PUBLIC_SITE_URL).host,
  author: 'Ivo Ansorena Pereira',
  email: 'ansoivo@gmail.com',
  linkedin: 'https://linkedin.com/in/ivo-ansorena-693a40322',
  github: 'https://github.com/ivoans',
  cv: '/cv/CV_Ivo_Ansorena_Pereira.pdf',
  ogImage: '/og.png',
} as const;

/** Anclas de la navegación interna. */
export const ANCHORS = {
  inicio: 'inicio',
  proyectos: 'proyectos',
  contable: 'gestion-contable',
  forja: 'forja',
  otros: 'otros-proyectos',
  stock: 'stock-y-ventas',
  landing: 'landing-contable',
  turnos: 'sistema-de-turnos',
  sobreMi: 'sobre-mi',
  contacto: 'contacto',
} as const;
