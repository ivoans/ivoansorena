import { ANCHORS } from '../config';

/**
 * Único lugar con texto del sitio en español.
 * Para sumar inglés: copiar este archivo a `en.ts`, traducir y registrarlo en `index.ts`.
 */
export const es = {
  html: {
    lang: 'es-AR',
    locale: 'es_AR',
    skipToContent: 'Ir al contenido',
  },

  meta: {
    title: 'Ivo Ansorena Pereira — Desarrollador Full Stack',
    description:
      'Desarrollador Full Stack en Argentina. Node.js, TypeScript, React y PostgreSQL. Dos sistemas de gestión en producción con más de 380 usuarios activos.',
    ogImageAlt:
      'Ivo Ansorena Pereira, Desarrollador Full Stack. Node.js, TypeScript, React y PostgreSQL.',
    /* Versiones cortas para la imagen Open Graph, que tiene poco espacio. */
    ogStats: [
      { value: '2', label: 'sistemas en producción' },
      { value: '+380', label: 'usuarios activos' },
    ],
  },

  nav: {
    brand: 'Ivo Ansorena Pereira',
    links: [
      { label: 'Proyectos', href: `/#${ANCHORS.proyectos}` },
      { label: 'Sobre mí', href: `/#${ANCHORS.sobreMi}` },
      { label: 'Contacto', href: `/#${ANCHORS.contacto}` },
    ],
    cv: 'Descargar CV',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    menuLabel: 'Navegación principal',
  },

  hero: {
    eyebrow: 'Portfolio',
    name: 'Ivo Ansorena Pereira',
    role: 'Desarrollador Full Stack',
    lead: 'Construyo sistemas de gestión de punta a punta, desde la charla con el cliente hasta el despliegue y el mantenimiento. Hoy mantengo dos sistemas en producción que usan más de 380 personas.',
    stats: [
      { eyebrow: 'Sistemas', value: '2', caption: 'en producción, con usuarios reales' },
      { eyebrow: 'Usuarios', value: '+380', caption: 'activos entre los dos sistemas' },
      { eyebrow: 'Experiencia', value: '2 años', caption: 'en empresa y como independiente' },
    ],
    stackLabel: 'Stack principal',
    stack: ['Node.js', 'TypeScript', 'React', 'PostgreSQL'],
    ctaProjects: 'Ver proyectos',
    ctaCv: 'Descargar CV',
    location: 'Argentina',
    availability: 'Disponible para trabajo remoto, híbrido o presencial',
  },

  projectIndex: {
    eyebrow: 'Proyectos',
    title: 'En qué trabajé',
    intro:
      'Dos sistemas en producción y tres proyectos más. Los repositorios son privados, así que acá muestro cómo se ven por dentro.',
    hint: 'Elegí un proyecto para ver el caso completo',
    items: [
      { id: 'contable', name: 'Gestión Contable', meta: 'Cliente real · +200 usuarios', href: `#${ANCHORS.contable}` },
      { id: 'forja', name: 'Forja', meta: 'Producto propio · +180 usuarios', href: `#${ANCHORS.forja}` },
      { id: 'stock', name: 'Stock y Ventas', meta: 'Trabajo en equipo · 2025', href: `#${ANCHORS.stock}` },
      { id: 'landing', name: 'Landing Contable', meta: 'En producción', href: `#${ANCHORS.landing}` },
      { id: 'turnos', name: 'Sistema de Turnos', meta: 'Proyecto final · UTN', href: `#${ANCHORS.turnos}` },
    ],
  },

  caseStudies: {
    sectionEyebrow: 'Casos de estudio',
    contextLabel: 'Contexto',
    whatIDidLabel: 'Qué hice',
    featuresLabel: 'Funciones clave',
    behindLabel: 'Detrás de escena',
    galleryLabel: 'Más capturas',
    stackLabel: 'Stack',
  },

  contable: {
    id: ANCHORS.contable,
    name: 'Sistema de Gestión Contable',
    tags: ['Cliente real', 'En producción', '+200 usuarios activos'],
    summary:
      'Sistema a medida para un estudio contable: el equipo gestiona su cartera y cada cliente consulta online sus impuestos, pagos y libros IVA.',
    context:
      'Un estudio contable me contrató para desarrollar un sistema propio. El estudio necesitaba ordenar la gestión de sus clientes, sus honorarios y sus cobranzas, y darle a cada cliente un lugar donde ver su situación sin tener que preguntar.',
    whatIDid:
      'Desarrollé el sistema completo, solo: relevamiento con la dueña del estudio, diseño de la base de datos, backend, frontend, despliegue y mantenimiento. También administro toda la infraestructura (hosting, base de datos, dominio y correo).',
    features: [
      {
        title: 'Cartera de clientes',
        body: 'Estado de cada cliente (al día, vencidos, pendientes) y próximos vencimientos de un vistazo.',
        shots: [
          {
            key: 'contable-clientes',
            alt: 'Listado de clientes del estudio contable con el estado de cada uno y los próximos vencimientos.',
          },
        ],
        phoneShots: [],
      },
      {
        title: 'Libro IVA importado desde Holistor',
        body: 'Todos los meses el estudio exporta los Libros IVA Compras y Ventas desde Holistor y los importa al sistema: se calcula el débito, el crédito y el saldo a pagar, con gráficos, y el cliente lo ve desde su panel.',
        shots: [
          {
            key: 'contable-libro-iva',
            alt: 'Pantalla del Libro IVA con el resumen de débito, crédito y saldo a pagar, y gráficos del período.',
          },
        ],
        phoneShots: [],
      },
      {
        title: 'Monotributistas',
        body: 'Facturación de los últimos 12 meses, categoría actual y cuánto falta para pasar a la siguiente.',
        shots: [
          {
            key: 'contable-monotributistas',
            alt: 'Vista de monotributistas con la categoría actual, la facturación de los últimos 12 meses y el margen hasta la categoría siguiente.',
          },
        ],
        phoneShots: [],
      },
      {
        title: 'Cobranzas',
        body: 'Lo cobrado en el día por método y por responsable, y la deuda de cada cliente por antigüedad, con PDF y envío por WhatsApp.',
        shots: [
          {
            key: 'contable-cobranzas',
            alt: 'Panel de cobranzas con lo cobrado en el día por método y por responsable, y la deuda de cada cliente por antigüedad.',
          },
        ],
        phoneShots: [],
      },
      {
        title: 'Equipo y permisos',
        body: 'Cada integrante del estudio (área contable y área jurídica) tiene permisos de lectura o edición por módulo.',
        shots: [
          {
            key: 'contable-equipo',
            alt: 'Administración del equipo del estudio con los permisos de lectura o edición de cada integrante, módulo por módulo.',
          },
        ],
        phoneShots: [],
      },
      {
        title: 'Panel del cliente, también en el celular',
        body: 'El cliente ve su saldo, el flujo del mes, sus impuestos y honorarios, marca pagos y sube comprobantes. Es una PWA: se instala en el celular y recibe notificaciones push.',
        shots: [
          {
            key: 'contable-panel-cliente',
            alt: 'Panel del cliente en escritorio con el saldo, el flujo del mes, los impuestos y los honorarios.',
          },
        ],
        phoneShots: [
          {
            key: 'contable-mobile-panel',
            alt: 'Panel del cliente en el celular con el saldo y el flujo del mes.',
            label: 'Panel del cliente',
          },
          {
            key: 'contable-mobile-impuestos',
            alt: 'Detalle de impuestos del cliente en el celular, con el estado de cada uno.',
            label: 'Impuestos',
          },
        ],
      },
    ],
    behind: [
      'Control de acceso por roles (administrador, contador, cliente) y permisos por módulo.',
      'Notificaciones por correo (Resend, con configuración DNS del dominio) y push, y tareas programadas (cron jobs) que actualizan estados.',
      'Auditoría de seguridad propia: 12 hallazgos corregidos en validación, autenticación y manejo de datos sensibles.',
    ],
    gallery: [],
    stack: [
      'Node.js',
      'Express',
      'TypeScript',
      'React',
      'PostgreSQL (Supabase)',
      'JWT',
      'bcrypt',
      'node-cron',
      'Resend',
      'PWA',
      'Render',
      'Vercel',
    ],
    note: 'Las capturas usan datos ficticios. El código es privado y el sistema no es de acceso público por pertenecer a un cliente.',
  },

  forja: {
    id: ANCHORS.forja,
    name: 'Forja',
    subtitle: 'Plataforma de gestión para gimnasios',
    tags: ['Producto propio', 'En producción en 2 gimnasios', '+180 usuarios activos'],
    summary:
      'Plataforma SaaS para gimnasios, estudios y profes independientes: rutinas, seguimiento del progreso, asistencia y cuotas, con app para el alumno.',
    context:
      'Forja es mi producto. Nació para que los gimnasios dejen de manejar rutinas en papel o en planillas y para que el profe pueda seguir el progreso de cada alumno. La misma plataforma da servicio a varios gimnasios, cada uno con sus datos, su marca y sus usuarios.',
    whatIDid:
      'Lo diseñé y desarrollé completo, desde el modelo de datos hasta la app que usan los alumnos en el celular.',
    features: [
      {
        title: 'Una plataforma, varios clientes',
        body: 'Desde el panel de administración doy de alta gimnasios, estudios, profes independientes y usuarios individuales, y los activo o desactivo.',
        shots: [
          {
            key: 'forja-admin-gimnasios',
            alt: 'Panel de administración de Forja con los gimnasios, estudios y profes dados de alta, y su estado activo o inactivo.',
          },
        ],
        phoneShots: [],
      },
      {
        title: 'Panel del gimnasio con su propia marca',
        body: 'Alumnos activos, asistencia de los últimos 14 días, estado de las cuotas y alumnos que dejaron de entrenar. Cada gimnasio configura su logo y su color, y así lo ven sus profes y alumnos (en las capturas: Forja es verde y el gimnasio de ejemplo, naranja).',
        shots: [
          {
            key: 'forja-resumen-gimnasio',
            alt: 'Resumen de un gimnasio con su logo y su color naranja: alumnos activos, asistencia de los últimos 14 días y estado de las cuotas.',
          },
        ],
        phoneShots: [],
      },
      {
        title: 'Editor de rutinas para el profe',
        body: 'Rutinas por día, series, repeticiones, descansos, superseries, notas, orden por arrastre, plantillas y copia entre alumnos.',
        shots: [
          {
            key: 'forja-editor-rutina',
            alt: 'Editor de rutinas con los ejercicios de un día, sus series, repeticiones y descansos, ordenables por arrastre.',
          },
        ],
        phoneShots: [],
      },
      {
        title: 'La app del alumno',
        body: 'La semana de entrenamiento, la racha, el día que le toca y el registro de pesos de cada serie, mostrando lo que levantó la última vez. Es una PWA con notificaciones push.',
        shots: [],
        phoneShots: [
          {
            key: 'forja-mobile-semana',
            alt: 'App del alumno en el celular: la semana de entrenamiento, la racha y el día que le toca.',
            label: 'Su semana',
          },
          {
            key: 'forja-mobile-dia',
            alt: 'App del alumno en el celular: registro de los pesos de cada serie, con lo que levantó la última vez.',
            label: 'Registro de pesos',
          },
        ],
      },
      {
        title: 'Progreso y récords',
        body: 'Gráfico de evolución por ejercicio, récords personales e historial de sesiones.',
        shots: [
          {
            key: 'forja-progreso-sentadilla',
            alt: 'Gráfico de evolución de la sentadilla a lo largo del tiempo, con el récord personal marcado.',
          },
        ],
        phoneShots: [],
      },
    ],
    behind: [],
    gallery: [
      { key: 'forja-alumnos', alt: 'Listado de alumnos del profe con su estado.' },
      { key: 'forja-actividad', alt: 'Actividad reciente de los alumnos del gimnasio.' },
      { key: 'forja-progreso-ejercicios', alt: 'Récords personales por ejercicio.' },
      { key: 'forja-progreso-cuerpo', alt: 'Evolución del peso corporal y las medidas del alumno.' },
      { key: 'forja-cuotas', alt: 'Estado de las cuotas de los alumnos del gimnasio.' },
      { key: 'forja-pagos', alt: 'Historial de pagos de un alumno.' },
    ],
    stack: ['Node.js', 'Express', 'TypeScript', 'React', 'TanStack Query', 'PostgreSQL', 'Drizzle ORM', 'JWT', 'PWA'],
    note: 'Las capturas usan datos ficticios.',
  },

  otros: {
    id: ANCHORS.otros,
    eyebrow: 'Otros proyectos',
    title: 'Más trabajos',
    intro: 'Proyectos de equipo, trabajos más chicos y el proyecto final de la carrera.',
    visit: 'Visitar el sitio',
    items: [
      {
        id: ANCHORS.stock,
        name: 'Sistema de stock, ventas y reportes',
        meta: 'Dietética · 2025 · Trabajo en equipo',
        body: 'Me encargué de los módulos de ventas y reportes: transacciones atómicas, comparación entre períodos, gráficos y alertas de stock. Trabajamos con revisión de código entre pares.',
        stack: ['React', 'Vite', 'Node.js', 'TypeScript', 'SQLite (Turso)', 'Zod'],
      },
      {
        id: ANCHORS.landing,
        name: 'Landing page para un estudio contable',
        meta: 'En producción',
        body: 'Sitio comercial con herramienta de diagnóstico para potenciales clientes.',
        stack: [],
        href: 'https://contador-ans.vercel.app',
      },
      {
        id: ANCHORS.turnos,
        name: 'Sistema de turnos',
        meta: 'Proyecto final · Tecnicatura Universitaria en Programación (UTN)',
        body: 'Sistema web de reservas de turnos para canchas y clubes.',
        stack: ['React', 'TypeScript', 'SQL'],
      },
    ],
  },

  about: {
    id: ANCHORS.sobreMi,
    eyebrow: 'Sobre mí',
    title: 'Quién soy',
    paragraphs: [
      'Soy desarrollador Full Stack, de Argentina. Trabajé un año y medio en Insert, un proveedor de internet, donde construí la mayor parte de su sistema de gestión interna como único desarrollador. Además, desde 2024 desarrollo de forma independiente sistemas de gestión para clientes reales. Me gusta estar en todo el proceso: entender qué necesita quien lo va a usar, diseñar la solución y hacerme cargo de que funcione en producción.',
      'Terminé la Tecnicatura Universitaria en Programación en la UTN (promedio 8,50, título en trámite). Uso a diario herramientas de IA para programar, siempre revisando y entendiendo el código antes de integrarlo.',
      'Hoy busco sumarme a un equipo de desarrollo donde seguir creciendo como Full Stack.',
    ],
    skillsTitle: 'Conocimientos técnicos',
    skills: [
      { group: 'Lenguajes', items: ['TypeScript', 'JavaScript', 'Python', 'C#', 'SQL', 'HTML5', 'CSS3'] },
      { group: 'Backend', items: ['Node.js', 'Express', 'APIs REST', 'Drizzle', 'JWT', 'Zod', 'rate limiting', 'Helmet', 'cron jobs'] },
      { group: 'Frontend', items: ['React', 'TanStack Query', 'React Router', 'Tailwind CSS', 'Vite', 'Astro', 'Recharts', 'PWA (Web Push)'] },
      { group: 'Bases de datos', items: ['PostgreSQL', 'SQLite', 'Supabase', 'Migraciones y backups'] },
      { group: 'Testing y DevOps', items: ['Vitest', 'Supertest', 'ESLint', 'GitHub Actions', 'Docker Compose', 'Linux (Debian)', 'VPS', 'Vercel', 'Render'] },
      { group: 'Colaboración', items: ['Metodologías ágiles', 'Git y GitHub (pull requests, code review)', 'Jira', 'Notion', 'Figma'] },
    ],
    languagesTitle: 'Idiomas',
    languages: ['Español nativo', 'Inglés intermedio-avanzado (B2)'],
  },

  contact: {
    id: ANCHORS.contacto,
    title: '¿Hablamos?',
    body: 'Estoy buscando mi próximo desafío como Desarrollador Full Stack. Si tenés una propuesta o querés conocer más sobre algún proyecto, escribime.',
    mail: 'Escribime un mail',
    copy: 'Copiar',
    copied: 'Copiado',
    copyFailed: 'No se pudo: seleccioná el mail',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    cv: 'Descargar CV',
  },

  footer: {
    copyright: '© 2026 Ivo Ansorena Pereira',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    backToTop: 'Volver arriba',
  },

  notFound: {
    seoTitle: 'Página no encontrada — Ivo Ansorena Pereira',
    seoDescription: 'Esta página no existe. Los proyectos y el contacto están en el inicio.',
    eyebrow: 'Error 404',
    title: 'Esta página no existe',
    body: 'Puede que el link esté mal escrito. Mis proyectos y mi contacto siguen en el inicio.',
    home: 'Ir al inicio',
  },

  media: {
    zoom: 'Ampliar captura',
    close: 'Cerrar',
    next: 'Siguiente captura',
    prev: 'Captura anterior',
    pending: 'Captura pendiente',
    pendingHint: 'Se va a mostrar acá cuando esté el archivo',
    counter: 'Captura {n} de {total}',
    gallery: 'Galería de capturas',
    loadError: 'No se pudo cargar la captura. Revisá tu conexión.',
    retry: 'Reintentar',
  },
} as const;

export type Translation = typeof es;
