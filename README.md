# ivoansorena.com.ar

Portfolio de Ivo Ansorena Pereira. Astro 7 + TypeScript, sitio estático, sin framework de UI.

## Correr el proyecto

Necesita **Node 22.23.4 o superior** (está en `.nvmrc`).

```bash
nvm use           # o: nvm install
npm install
npm run dev       # http://localhost:4321
npm run build     # astro check + build de producción, sale en dist/
npm run preview   # sirve dist/ para revisar el build
```

## Agregar las capturas

Las capturas van en `src/assets/proyectos/` **con el nombre exacto** de la tabla
de abajo y extensión `.png`. Mientras un archivo no esté, el sitio muestra un
espacio reservado con el nombre que espera. No hay que tocar código: alcanza con
copiar el PNG y recargar.

| Archivo | Qué muestra |
| --- | --- |
| `contable-clientes` | Listado de clientes con estados |
| `contable-libro-iva` | Libro IVA con resumen y gráficos |
| `contable-monotributistas` | Categoría y facturación de 12 meses |
| `contable-cobranzas` | Cobranzas del día y deuda por antigüedad |
| `contable-equipo` | Equipo y permisos por módulo |
| `contable-panel-cliente` | Panel del cliente (escritorio) |
| `contable-mobile-panel` | Panel del cliente (celular) |
| `contable-mobile-impuestos` | Impuestos del cliente (celular) |
| `forja-admin-gimnasios` | Panel de administración de la plataforma |
| `forja-resumen-gimnasio` | Resumen del gimnasio con su marca |
| `forja-editor-rutina` | Editor de rutinas del profe |
| `forja-mobile-semana` | App del alumno: su semana (celular) |
| `forja-mobile-dia` | App del alumno: registro de pesos (celular) |
| `forja-progreso-sentadilla` | Gráfico de progreso y récord |
| `forja-alumnos` | Listado de alumnos del profe |
| `forja-actividad` | Actividad reciente de los alumnos |
| `forja-progreso-ejercicios` | Récords por ejercicio |
| `forja-progreso-cuerpo` | Evolución del peso y medidas |
| `forja-cuotas` | Estado de cuotas |
| `forja-pagos` | Historial de pagos de un alumno |

Recomendado: las de escritorio a 2x (por ejemplo 2560×1600) y las de celular en
proporción 390×844. Astro genera solo los tamaños responsive y los AVIF/WebP.

El texto alternativo de cada captura está en `src/i18n/es.ts`, junto a su clave.

## Dónde está cada cosa

```
src/
  config.ts              URLs, mail, redes, ruta del CV y anclas
  i18n/es.ts             TODO el texto del sitio
  i18n/index.ts          helper de traducciones
  data/proyectos.ts      resuelve las capturas desde src/assets/proyectos/
  styles/tokens.css      colores, escala tipográfica, espaciados, radios
  styles/global.css      reset, utilidades y @font-face
  layouts/Base.astro     <head>, encabezado, pie y animación de aparición
  pages/index.astro      la única página
  pages/og.png.ts        genera /og.png (1200×630) en el build
  components/
    ui/                  Button, Pill, StatCard, SectionHead, Icon
    media/               Shot, Placeholder, PhoneFrame, Lightbox
    sections/            Hero, ProjectIndex, CaseStudy, Feature,
                         OtherProjects, About, Contact
```

## Sumar inglés

1. Copiar `src/i18n/es.ts` a `src/i18n/en.ts` y traducir.
2. Registrarlo en `languages` y `dictionaries` de `src/i18n/index.ts`.
3. Agregar `'en'` a `i18n.locales` en `astro.config.mjs`.
4. Crear `src/pages/en/index.astro` con el mismo contenido que `index.astro`.

El idioma por defecto (`es`) no lleva prefijo: queda en `/`, el inglés en `/en/`.

## Notas

- `src/assets/fonts/Outfit-Variable.ttf` lo usa solo `og.png.ts` en el build;
  no se sirve al navegador. Las fuentes del sitio están en `public/fonts/`.
- El repo vive en `/mnt/c` (WSL), por eso `astro.config.mjs` activa el watcher
  por sondeo: sin eso el recargado en caliente no detecta los cambios.
