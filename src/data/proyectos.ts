import type { ImageMetadata } from 'astro';

/**
 * Las capturas se resuelven solas desde `src/assets/proyectos/`.
 * Mientras un archivo no exista, `<Shot>` dibuja el espacio reservado con
 * el nombre esperado. Copiar el PNG alcanza: no hay que tocar código.
 */
const modules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/proyectos/*.{png,jpg,jpeg,webp,avif}',
  { eager: true },
);

const byKey = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(modules)) {
  const file = path.split('/').pop();
  if (!file) continue;
  byKey.set(file.replace(/\.[^.]+$/, ''), mod.default);
}

export function getShot(key: string): ImageMetadata | undefined {
  return byKey.get(key);
}

export function hasShot(key: string): boolean {
  return byKey.has(key);
}

/** Nombres de archivo esperados, en el orden del brief (sección 6). */
export const EXPECTED_SHOTS = [
  'contable-clientes',
  'contable-libro-iva',
  'contable-monotributistas',
  'contable-cobranzas',
  'contable-equipo',
  'contable-panel-cliente',
  'contable-mobile-panel',
  'contable-mobile-impuestos',
  'forja-admin-gimnasios',
  'forja-resumen-gimnasio',
  'forja-editor-rutina',
  'forja-mobile-semana',
  'forja-mobile-dia',
  'forja-progreso-sentadilla',
  'forja-alumnos',
  'forja-actividad',
  'forja-progreso-ejercicios',
  'forja-progreso-cuerpo',
  'forja-cuotas',
  'forja-pagos',
] as const;

/** Capturas del brief que todavía no están en `src/assets/proyectos/`. */
export function missingShots(): string[] {
  return EXPECTED_SHOTS.filter((key) => !byKey.has(key));
}

/** Miniatura que usa el índice de proyectos; `undefined` = ficha tipográfica. */
export const INDEX_THUMBS: Record<string, string | undefined> = {
  contable: 'contable-clientes',
  forja: 'forja-resumen-gimnasio',
  stock: undefined,
  landing: undefined,
  turnos: undefined,
};

/**
 * Zona de la captura que muestran las miniaturas, en fracciones del original.
 * El recuadro mantiene la proporción de la imagen, así que alcanza con el ancho.
 */
export interface ShotCrop {
  readonly left: number;
  readonly top: number;
  readonly width: number;
}

// Las pantallas de escritorio de Forja tienen el contenido en una columna
// central: este encuadre saca los márgenes vacíos y el menú.
const FORJA_CONTENT: ShotCrop = { left: 0.15, top: 0.12, width: 0.7 };

/** Sin encuadre, la miniatura muestra la captura entera. */
export const SHOT_CROPS: Record<string, ShotCrop | undefined> = {
  'forja-resumen-gimnasio': FORJA_CONTENT,
  'forja-alumnos': FORJA_CONTENT,
  'forja-actividad': FORJA_CONTENT,
  'forja-progreso-ejercicios': FORJA_CONTENT,
  'forja-progreso-cuerpo': FORJA_CONTENT,
  'forja-cuotas': FORJA_CONTENT,
  'forja-pagos': { left: 0.3, top: 0.3, width: 0.4 },
};
