import { cvs } from './site';

export interface Service { title: string; body: string }
export interface FaqItem { q: string; a: string }
export interface CrossLink { href: string; label: string }

export interface Profile {
  slug: string;
  route: string;
  title: string;         // <title>
  description: string;   // meta description
  eyebrow: string;
  h1: string;
  intro: string[];
  claim: string;         // frase-tesis bajo el hero
  ctaPrimary: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  cv?: string;
  services: Service[];
  servicesNote?: string;
  extras?: { heading: string; items: Service[] };
  process?: { step: string; body: string }[];
  faq?: FaqItem[];
  crossLinks: CrossLink[];
  showTimeline: boolean;
  showPortfolio: boolean;
  showAbout: boolean;
}

/* ------------------------------------------------------------------ */
/* Trayectoria — una sola fuente, usada por todas las páginas          */
/* ------------------------------------------------------------------ */

export const timeline = [
  {
    years: '2025 — hoy',
    role: 'Desarrollo web, sistemas y calidad',
    org: 'F2Prom',
    body: 'Mantengo en producción las webs corporativas y la plataforma LMS de e-learning de una empresa de formación, del servidor a la base de datos. Además llevo calidad interna, control documental y contabilidad de costes.',
    result: 'Plataformas en producción, formación auditada para FUNDAE y la JCCM (FOCO), y entornos Java listos para enseñar a programar.',
  },
  {
    years: '2026',
    role: 'Docente — Programación en Java (IFCD052PO)',
    org: 'HAZERTA',
    body: 'Impartición del curso de Programación en Java, 210 h, con metodología propia de Flipped Classroom apoyada en IA: NotebookLM, Cursor IDE y Claude.',
    result: 'Diseño íntegro de la programación didáctica, rúbricas y material de aula, de cero a entrega.',
  },
  {
    years: '2026',
    role: 'Docente — Data Mining y Business Intelligence (IFCT032PO)',
    org: 'Fundación Empleo y Sostenibilidad',
    body: 'Cuarenta horas de selección, limpieza, transformación, análisis y visualización de datos para decisiones operativas.',
    result: 'Conceptos técnicos explicados a un grupo con perfiles muy distintos, sin bajar el nivel.',
  },
  {
    years: '2022 — 23',
    role: 'Asesor financiero y soporte de banca digital',
    org: 'CaixaBank',
    body: 'CRM y software financiero del banco para extraer, analizar y gestionar la base de clientes B2B y B2C, con soporte técnico en banca electrónica.',
    result: 'Programas de alfabetización digital: tecnología acercada a quien más la temía.',
  },
  {
    years: '2018 — 21',
    role: 'Desarrollo de e-commerce y marketing digital',
    org: 'Pinturas COES',
    body: 'Tienda online corporativa construida desde cero con HTML, CSS, JavaScript y Java en servidor para un fabricante con más de treinta años de marca.',
    result: 'Catálogo técnico digitalizado, base de datos de productos e integración con el ERP Sage.',
  },
  {
    years: '2017 — 18',
    role: 'Desarrollador backend Java',
    org: 'Hybrid Company · Praga',
    body: 'Lógica de negocio en Java para aplicaciones de televisión interactiva bajo el estándar europeo HbbTV.',
    result: 'Componentes interactivos en producción y bases de datos relacionales sosteniendo el servicio.',
  },
];

export const formacion = [
  { year: '2025', title: 'Calidad y Mejora Continua (ADGD01)', detail: '425 h presenciales, certificado registrado en FOCO. Modelos de gestión, mejora continua, auditorías, metrología y estadística aplicada.' },
  { year: '2025', title: 'Docencia de la FP para el Empleo (SSCE0110)', detail: 'Certificado de profesionalidad nivel 3, 380 h, nota media 8,2.' },
  { year: '2017', title: 'Desarrollo de Aplicaciones con Tecnologías Web (IFCD0210)', detail: 'Certificado de profesionalidad nivel 3, 590 h.' },
  { year: '2017', title: 'Grado en Administración y Dirección de Empresas', detail: 'Universidad de Castilla-La Mancha.' },
  { year: '2022', title: 'Piloto oficial de drones', detail: 'Habilitación AESA.' },
  { year: 'En curso', title: 'Grado en Psicología', detail: 'UNED, 21 ECTS superados.' },
];

/* ------------------------------------------------------------------ */
/* Portfolio                                                           */
/* ------------------------------------------------------------------ */

export const projects = [
  {
    name: 'Norden Barber', sector: 'Barbería · Reservas',
    url: 'https://barbernorden.vercel.app', img: '/img/portfolio/norden-barber.webp',
    reto: 'Ordenar servicios, precios, tono visual y llamada a reserva en una experiencia rápida, especialmente en móvil.',
    solucion: 'Landing visual, jerarquía clara de servicios, CTA visible y estructura preparada para posicionar búsquedas de barbería de proximidad.',
    stack: 'HTML, CSS, JavaScript, imágenes WebP y despliegue estático.',
    resultado: 'Una presencia digital enfocada a reserva, fácil de compartir y con identidad propia.',
  },
  {
    name: 'Stefania Panzariu Studio', sector: 'Estética · Branding',
    url: 'https://stefaniavictoria.com', img: '/img/portfolio/stefania-studio.webp',
    reto: 'Convertir una identidad visual delicada en una web clara, elegante y útil para captar citas.',
    solucion: 'Estructura por servicios, copy orientado a confianza, experiencia visual limpia y navegación sin ruido.',
    stack: 'React con Vite, CSS responsive, optimización de imagen y metadatos sociales.',
    resultado: 'Más autoridad visual para servicios premium, preparada para ampliar páginas de tratamientos.',
  },
  {
    name: 'Promesas de Papel', sector: 'Librería · Cultura',
    url: 'https://promesasdepapel.com', img: '/img/portfolio/promesas-papel.webp',
    reto: 'No caer en una web genérica de comercio: el valor estaba en la personalidad, la comunidad y la selección.',
    solucion: 'Diseño editorial, contenido claro y estructura preparada para eventos, recomendaciones y comunicación con lectores.',
    stack: 'HTML, CSS, JavaScript, diseño responsive y optimización de assets.',
    resultado: 'Una presencia online que puede crecer hacia agenda, artículos y clubes de lectura.',
  },
  {
    name: 'Pinturas COES', sector: 'Industria · E-commerce',
    url: 'https://pinturascoes.com', img: '/img/portfolio/pinturas-coes.webp',
    reto: 'Pasar de producto técnico a experiencia digital entendible para cliente profesional y usuario final.',
    solucion: 'Catálogo digital, base de datos de productos, arquitectura preparada para ecommerce e integración con el ERP Sage.',
    stack: 'HTML, CSS, JavaScript, Java en servidor, SQL y Sage.',
    resultado: 'Un activo digital industrial con recorrido para fichas de producto, SEO técnico y venta online.',
  },
];

export const about = {
  heading: 'Sobre mí',
  paragraphs: [
    'Soy analista programador, pero antes estudié Administración y Dirección de Empresas: por eso leo un negocio antes de escribir una sola línea de código. Desde 2017 me he movido entre el desarrollo de software, la administración de sistemas corporativos y el aula.',
    'Diseño y programo webs a medida de principio a fin, integro herramientas como Sage, SAP o Moodle, y formo a quienes quieren dedicarse a esto. Mi acreditación oficial en docencia me obliga a explicar lo complejo de forma sencilla, y eso acaba mejorando también el código.',
    'Cuando cierro el portátil, piloto drones. Y siempre ando estudiando algo: ahora, Psicología en la UNED.',
  ],
  data: [
    { k: 'Área',      v: 'Cuenca y provincia · remoto' },
    { k: 'Situación', v: 'Autónomo disponible' },
    { k: 'Idiomas',   v: 'Español · Inglés B1 · Alemán A2' },
    { k: 'Desarrollo',v: 'Java · SQL · HTML/CSS/JS' },
    { k: 'Sistemas',  v: 'Sage · SAP FICO · Dynamics · Moodle' },
    { k: 'También',   v: 'IA aplicada · Drones (AESA)' },
  ],
};

/* ------------------------------------------------------------------ */
/* Las 7 páginas                                                       */
/* ------------------------------------------------------------------ */

const CTA_HABLEMOS = { label: 'Hablemos', href: '#contacto' };

export const profiles: Profile[] = [
  /* ---------------------------------------------------------------- 1 */
  {
    slug: 'home', route: '/',
    title: 'Natanael Alzate Torres · Software, formación y calidad',
    description: 'Analista programador y docente acreditado por el SEPE. Webs a medida, automatización con IA, gestión de formación FUNDAE/FOCO y sistemas de calidad. Cuenca y remoto.',
    eyebrow: 'Cuenca · remoto · autónomo disponible',
    h1: 'Programo webs, automatizo procesos y formo equipos para que tu empresa trabaje mejor y pueda demostrarlo.',
    intro: [
      'Soy Natanael Alzate Torres: analista programador y docente técnico acreditado por el SEPE. Trabajo desde Cuenca para negocios de proximidad, centros de formación y empresas que necesitan tecnología útil y documentación que aguante una revisión.',
      'Si llegaste hasta aquí desde una web que diseñé, esto es lo que hay detrás: análisis de negocio, código limpio, criterio docente y bastante obsesión por que cada pantalla tenga sentido.',
    ],
    claim: 'Grado en ADE, ocho años en IT desde 2017 y acreditación oficial en docencia: la mezcla de aula, código y negocio que convierte tecnología compleja en algo que tu equipo entiende, usa y mantiene.',
    ctaPrimary: CTA_HABLEMOS,
    ctaSecondary: { label: 'Ver mi trabajo', href: '/casos' },
    services: [
      { title: 'Webs a medida para negocios que necesitan vender mejor', body: 'Diseño y programo páginas rápidas, claras y mantenibles para empresas locales, comercios y proyectos profesionales. Sin plantilla genérica: contenido, estructura y código pensados para que Google entienda el servicio y el cliente sepa qué hacer.' },
      { title: 'Automatización de procesos e IA administrativa', body: 'Detecto las tareas repetitivas que se comen las horas de tu equipo y las convierto en flujos más simples: formularios, bases de datos, informes, agentes de IA y conexiones seguras con ERP como Sage o SAP FICO.' },
      { title: 'Formación técnica, LMS y cumplimiento e-learning', body: 'Formo a equipos y dejo plataformas Moodle, documentación SEPE, FOCO y FUNDAE listas para revisión. La parte técnica y la didáctica van juntas: menos improvisación, más trazabilidad.' },
    ],
    servicesNote: 'Primero mapa de negocio; después arquitectura, contenido y automatización. El resultado no es solo una web bonita: es un sistema pequeño, rápido y medible que se puede explicar, mantener y mejorar.',
    extras: {
      heading: 'Pensado para negocios que necesitan moverse mejor',
      items: [
        { title: 'Comercios y servicios', body: 'Webs que explican qué haces, eliminan dudas y llevan al cliente a reservar, llamar o escribir sin perderse.' },
        { title: 'Centros de formación', body: 'LMS, documentación, programaciones, FUNDAE y FOCO con visión técnica y docente, no solo administrativa.' },
        { title: 'Pymes con procesos manuales', body: 'Automatización de informes, formularios, expedientes, CRM y tareas repetitivas con IA controlada.' },
        { title: 'Marcas que quieren escalar', body: 'Arquitectura web preparada para casos, servicios, SEO, catálogo, datos y mejoras progresivas.' },
      ],
    },
    faq: [
      { q: '¿Haces webs para negocios pequeños o solo proyectos técnicos?', a: 'Trabajo especialmente bien con negocios de proximidad, comercios, profesionales y pymes. Si necesitas web, contenido, estructura y llamadas a acción claras, puedes ver los casos completos.' },
      { q: '¿Puedes automatizar tareas administrativas con IA?', a: 'Sí. Empiezo con un diagnóstico pequeño: qué tarea se repite, qué dato se usa, quién valida y qué herramienta ya existe. La página de automatización detalla proceso y entregables.' },
      { q: '¿Trabajas presencial y en remoto?', a: 'Ambos. Para proyectos locales la cercanía ayuda; para automatización y formación técnica pesa más la documentación que la distancia.' },
      { q: '¿Puedes ayudar a centros de formación con Moodle, FOCO o FUNDAE?', a: 'Sí, es una de mis líneas principales: programaciones didácticas, seguimiento, auditorías y soporte técnico de plataforma.' },
      { q: '¿Qué pasa después de publicar la web?', a: 'Se mide: indexación, rendimiento, consultas reales en Search Console y comportamiento de formularios o llamadas. Con esos datos se ajustan contenidos y enlaces internos.' },
    ],
    crossLinks: [
      { href: '/docencia', label: 'Docencia IT' },
      { href: '/tecnico', label: 'Formación y LMS' },
      { href: '/calidad', label: 'Calidad' },
      { href: '/administracion', label: 'Administración' },
      { href: '/automatizacion-ia', label: 'Automatización con IA' },
      { href: '/casos', label: 'Casos de éxito' },
    ],
    showTimeline: true, showPortfolio: true, showAbout: true,
  },

  /* ---------------------------------------------------------------- 2 */
  {
    slug: 'docencia', route: '/docencia',
    title: 'Docente técnico IT acreditado SEPE · Java · Cuenca',
    description: 'Formador homologado SSCE0110 para certificados de profesionalidad IT: Java, desarrollo web y análisis de datos. 250 h impartidas. Disponible para convocatorias 2026.',
    eyebrow: 'Impartiendo ahora · Java IFCD052PO, 210 h',
    h1: 'Enseño tecnología que uso: programar, manejar los datos y sostener los sistemas.',
    intro: [
      'Soy Natanael Alzate Torres, docente técnico IT acreditado por el SEPE (SSCE0110, nivel 3, nota media 8,2). Combino ocho años programando de verdad —Java, bases de datos, ERP— con el aula: imparto certificados de profesionalidad, programación y análisis de datos a profesionales en activo.',
    ],
    claim: '250 horas impartidas en 2026 entre programación en Java (210 h) y Data Mining con Business Intelligence (40 h). Materia técnica convertida en aprendizaje práctico, medible y aplicable desde el primer día.',
    ctaPrimary: { label: 'Colaborar con tu centro', href: '#contacto' },
    ctaSecondary: { label: 'Descargar CV docente', href: cvs.docencia },
    cv: cvs.docencia,
    services: [
      { title: 'Impartición de certificados y cursos técnicos', body: 'Certificados de profesionalidad del SEPE y acciones formativas de programación (Java, desarrollo web) y análisis de datos, con material y rúbricas diseñados de cero.' },
      { title: 'Metodología de aula invertida con IA', body: 'Flipped Classroom apoyado en asistentes de IA (NotebookLM, Cursor IDE, Claude): aprendizaje personalizado y medible, sin atajos que debiliten el esfuerzo del alumno. Todo el material pasa por validación humana.' },
      { title: 'Diseño de programaciones y evaluación', body: 'Programaciones didácticas, rúbricas objetivas y materiales completos, listos para acreditar y para entrar al aula.' },
    ],
    extras: {
      heading: 'Lo que suele preguntar un centro antes de contratar',
      items: [
        { title: 'Acreditación', body: 'SSCE0110 nivel 3, 380 h, nota media 8,2. Certificado de profesionalidad IFCD0210 (590 h) para la familia informática.' },
        { title: 'Modalidad', body: 'Presencial en Cuenca capital y provincia, online, y desplazamiento dentro de Castilla-La Mancha.' },
        { title: 'Relación contractual', body: 'Contrato laboral, autónomo con factura o acuerdo marco. Documentación en regla.' },
        { title: 'Disponibilidad', body: 'Inmediata para convocatorias 2026. Respondo con disponibilidad y documentación en menos de 24 h.' },
      ],
    },
    faq: [
      { q: '¿Qué familias profesionales puedes impartir?', a: 'Informática y comunicaciones, con base acreditada en desarrollo de aplicaciones web (IFCD0210) y experiencia real en Java, SQL y bases de datos. También formación en IA aplicada y ofimática avanzada.' },
      { q: '¿Preparas tú el material o lo aporta el centro?', a: 'Puedo trabajar con el material del centro o diseñar la programación completa: objetivos, contenidos, actividades, rúbricas y evaluación.' },
      { q: '¿Cómo usas la IA en el aula sin que el alumno se acomode?', a: 'La IA prepara material y personaliza el ritmo; el alumno sigue teniendo que escribir el código y defenderlo. La evaluación es por rúbrica sobre producto propio.' },
      { q: '¿También gestionas la parte administrativa del curso?', a: 'Sí. Es mi otra línea de trabajo: plataformas LMS, expedientes, FOCO y justificación FUNDAE.' },
    ],
    crossLinks: [
      { href: '/tecnico', label: 'Formación y LMS' },
      { href: '/calidad', label: 'Calidad' },
      { href: '/administracion', label: 'Administración' },
      { href: '/casos', label: 'Casos de éxito' },
    ],
    showTimeline: true, showPortfolio: false, showAbout: true,
  },

  /* ---------------------------------------------------------------- 3 */
  {
    slug: 'tecnico', route: '/tecnico',
    title: 'Técnico de formación · FUNDAE, FOCO y Moodle',
    description: 'Gestión integral de expedientes de formación subvencionada: programaciones SEPE, plataforma FOCO-JCCM, LMS Moodle y justificación económica FUNDAE.',
    eyebrow: 'Disponible para incorporación inmediata',
    h1: 'Pongo en orden tu formación: programaciones SEPE, plataformas LMS y justificaciones que pasan a la primera.',
    intro: [
      'Soy Natanael Alzate Torres, técnico de formación y analista programador. Me ocupo de la gestión técnica integral de la Formación para el Empleo: diseño programaciones didácticas SEPE, administro plataformas LMS (Moodle, FOCO-JCCM) y dejo lista la bonificación y justificación ante FUNDAE.',
      'Disponible para incorporación en centro de formación o como colaboración freelance, presencial en Cuenca o en remoto.',
    ],
    claim: 'La ventaja no es saber de plataforma o saber de expediente: es saber de las dos. Puedo revisar la coherencia entre lo que dice tu Moodle y lo que dice tu justificación antes de que lo haga la administración.',
    ctaPrimary: { label: 'Revisar un expediente', href: '#contacto' },
    ctaSecondary: { label: 'Descargar CV técnico', href: cvs.tecnico },
    cv: cvs.tecnico,
    services: [
      { title: 'Gestión y administración de plataformas LMS', body: 'Configuro, mantengo y optimizo Moodle y FOCO (JCCM): altas, seguimiento, informes y cumplimiento normativo telemático. Tu plataforma, lista para inspección en cualquier momento.' },
      { title: 'Programaciones didácticas y acreditación SEPE', body: 'Programaciones completas de certificados de profesionalidad de nivel 2 y 3: objetivos, contenidos, rúbricas y evaluación, listas para presentar y acreditar.' },
      { title: 'Bonificación y justificación FUNDAE', body: 'Preparo y justifico la formación bonificada cumpliendo cada requisito de FUNDAE y de la JCCM, para que la auditoría sea un trámite y no un problema.' },
    ],
    extras: {
      heading: 'Qué resuelvo para un centro de formación',
      items: [
        { title: 'Programaciones SEPE', body: 'Objetivos, contenidos, metodología, evaluación, rúbricas y documentación preparada para revisión.' },
        { title: 'Moodle y FOCO', body: 'Altas, seguimiento, informes, configuración de actividades, trazabilidad y control de evidencias.' },
        { title: 'FUNDAE y auditoría', body: 'Documentación, coherencia entre plataforma y expediente, revisión de puntos débiles y preparación de inspección.' },
        { title: 'Soporte al docente', body: 'Materiales, evaluación, guías de uso y ayuda para que la parte técnica no bloquee la parte pedagógica.' },
      ],
    },
    process: [
      { step: 'Revisión inicial', body: 'Curso, certificado, plataforma, expediente, calendario y obligaciones documentales.' },
      { step: 'Orden técnico', body: 'Moodle o FOCO, usuarios, actividades, seguimiento, informes y evidencias.' },
      { step: 'Orden didáctico', body: 'Programación, material, rúbricas, criterios de evaluación y coherencia con la norma SEPE.' },
      { step: 'Cierre y auditoría', body: 'Documentación final, checklist FUNDAE y JCCM, y correcciones antes de la revisión.' },
    ],
    faq: [
      { q: '¿Puedes incorporarte como técnico o colaborar como freelance?', a: 'Ambas. Incorporación en centro, soporte externo por curso o colaboración puntual para auditorías y documentación.' },
      { q: '¿Solo gestionas documentación o también plataforma?', a: 'Las dos. Mi ventaja es unir gestión técnica del LMS con programación didáctica y criterio de aula.' },
      { q: '¿Puedes automatizar parte del seguimiento?', a: 'Sí. Informes, extracción de datos, control de evidencias y resúmenes se pueden mejorar con flujos automatizados, siempre con validación humana.' },
      { q: '¿También impartes?', a: 'Sí, con acreditación SSCE0110. Puedes ver el perfil docente completo.' },
    ],
    crossLinks: [
      { href: '/docencia', label: 'Docencia IT' },
      { href: '/calidad', label: 'Calidad' },
      { href: '/automatizacion-ia', label: 'Automatización con IA' },
      { href: '/administracion', label: 'Administración' },
    ],
    showTimeline: true, showPortfolio: false, showAbout: true,
  },

  /* ---------------------------------------------------------------- 4 */
  {
    slug: 'calidad', route: '/calidad',
    title: 'Calidad y mejora continua · ADGD01, 425 h',
    description: 'Implantación de sistemas de gestión, auditorías internas, control documental, metrología y estadística aplicada. 425 horas acreditadas y práctica diaria.',
    eyebrow: 'ADGD01 · 425 h · certificado registrado en FOCO',
    h1: 'Calidad que aguanta una auditoría: procedimientos, trazabilidad e indicadores que se sostienen con datos.',
    intro: [
      'Soy Natanael Alzate Torres, graduado en ADE y técnico en Calidad y Mejora Continua (ADGD01, 425 h presenciales, certificado registrado en FOCO). Trabajo la parte que nadie quiere: que el expediente esté completo, que el dato cuadre y que el indicador signifique algo.',
      'Lo aplico a diario sobre formación subvencionada, donde la administración revisa cada euro y cada firma.',
    ],
    claim: 'Base formativa de 425 horas con 130 h de modelo de gestión, 70 h de mejora continua, 60 h de auditorías y 130 h entre metrología, ensayos y estadística. Y una base técnica en SQL y BI que me permite medir el proceso sin depender de un informático.',
    ctaPrimary: { label: 'Hablemos de tu sistema', href: '#contacto' },
    ctaSecondary: { label: 'Descargar CV de calidad', href: cvs.calidad },
    cv: cvs.calidad,
    services: [
      { title: 'Sistema documental auditable', body: 'Procedimientos, registros y trazabilidad de expedientes. Lo aplico sobre formación subvencionada, donde cada documento tiene que resistir una revisión de la administración.' },
      { title: 'Auditorías internas y preparación de auditoría externa', body: 'Checklist, recogida de evidencias, no conformidades y plan de acciones correctivas. Base formativa: 60 h de auditorías y 130 h de modelo de gestión dentro del ADGD01.' },
      { title: 'Métrica y control', body: 'Estadística aplicada, metrología y ensayos, más cuadros de mando en Excel y Business Intelligence construidos sobre bases de datos reales.' },
    ],
    extras: {
      heading: 'Qué no soy, para que nadie se lleve una sorpresa',
      items: [
        { title: 'No soy auditor certificado', body: 'No estoy acreditado en IATF 16949 ni en VDA 6.3/6.5, y no lo voy a decir. Lo que aporto es base formativa sólida, criterio documental y disponibilidad para formarme en Core Tools (APQP, PPAP, AMFE, SPC, MSA, 8D) desde el primer día.' },
        { title: 'No implanto ISO 9001 en solitario', body: 'Puedo preparar la documentación, los procedimientos y las evidencias, y acompañar el proceso. La certificación la emite una entidad acreditada.' },
        { title: 'Sí sostengo el día a día', body: 'Control documental, trazabilidad, indicadores, auditoría interna, acciones correctivas y contabilidad de costes asociada. Es lo que hago cada semana.' },
        { title: 'Sí traigo el dato', body: 'Depuración y validación de bases de datos, cuadros de mando y detección temprana de incidencias. La calidad sin medición es una carpeta bonita.' },
      ],
    },
    faq: [
      { q: '¿Trabajas para industria o solo para formación?', a: 'Mi práctica actual es en formación subvencionada, que es un entorno muy regulado. La base formativa (metrología, ensayos, estadística, modelo de gestión) es industrial y transferible.' },
      { q: '¿Puedes preparar una auditoría externa?', a: 'Puedo preparar documentación, evidencias e indicadores y acompañarte en la revisión. La certificación la emite una entidad acreditada, no yo.' },
      { q: '¿Qué herramientas usas para medir?', a: 'Excel avanzado, Business Intelligence y SQL sobre las bases de datos del propio proceso. Sin exportaciones manuales que se desactualizan al día siguiente.' },
    ],
    crossLinks: [
      { href: '/administracion', label: 'Administración' },
      { href: '/tecnico', label: 'Formación y LMS' },
      { href: '/automatizacion-ia', label: 'Automatización con IA' },
      { href: '/docencia', label: 'Docencia IT' },
    ],
    showTimeline: true, showPortfolio: false, showAbout: true,
  },

  /* ---------------------------------------------------------------- 5 */
  {
    slug: 'administracion', route: '/administracion',
    title: 'Administración digital, ERP e IA aplicada',
    description: 'Digitalización de procesos administrativos: integración ERP (Sage, SAP FICO), CRM, control de costes y automatización de tareas repetitivas con IA.',
    eyebrow: 'Grado en ADE · ocho años en entornos técnicos',
    h1: 'Automatizo la administración de tu empresa: ERP, IA y procesos que devuelven horas a tu equipo.',
    intro: [
      'Soy Natanael Alzate Torres, graduado en Administración y Dirección de Empresas por la UCLM con ocho años en entornos empresariales y técnicos. Digitalizo procesos administrativos con IA, gestiono ERP (Sage, SAP FICO) y CRM corporativo, y aporto control de calidad con base acreditada.',
    ],
    claim: 'Entiendo el negocio y sé programar la solución. Esa combinación es la que suele faltar cuando una empresa intenta digitalizar su administración sin romper lo que ya funciona.',
    ctaPrimary: { label: 'Pedir diagnóstico', href: '#contacto' },
    ctaSecondary: { label: 'Descargar CV', href: cvs.administracion },
    cv: cvs.administracion,
    services: [
      { title: 'Automatización de procesos con IA', body: 'Identifico las tareas que más tiempo consumen y las convierto en flujos automatizados, conectados de forma controlada a tu ERP o CRM. Siempre con una persona validando lo sensible.' },
      { title: 'Gestión de ERP, CRM y datos', body: 'Administro y conecto tus sistemas: extracción y análisis de datos, gestión documental digital y soporte operativo. Integración con Sage probada en producción durante tres años.' },
      { title: 'Control de costes y mejora continua', body: 'Contabilidad de costes, justificación económica y modelos de gestión (ADGD01) para que tus procesos administrativos sean medibles, trazables y revisables.' },
    ],
    extras: {
      heading: 'Dónde suele estar el ahorro',
      items: [
        { title: 'Entrada de datos duplicada', body: 'El mismo dato tecleado en tres sitios: formulario, hoja de cálculo y ERP. Se resuelve con una única entrada y sincronización.' },
        { title: 'Informes rehechos cada mes', body: 'Extracción, limpieza y montaje manual de cuadros que podrían generarse solos a partir de la base de datos.' },
        { title: 'Documentación dispersa', body: 'Expedientes repartidos entre correo, disco y plataforma. Sin trazabilidad no hay auditoría que se supere con tranquilidad.' },
        { title: 'Conciliaciones a mano', body: 'Cotejo de importes entre facturas, ERP y justificación. Es exactamente el tipo de tarea que una automatización con validación humana hace bien.' },
      ],
    },
    faq: [
      { q: '¿Necesito tener ya un ERP?', a: 'No. Si existe, lo respeto y lo conecto donde tenga sentido. Si no existe, se puede empezar con formularios, hojas y una base de datos sencilla.' },
      { q: '¿Cómo garantizas que no se rompe lo que ya funciona?', a: 'Empezando pequeño: una tarea concreta, en paralelo al proceso actual, con datos reales y marcha atrás disponible. Solo se sustituye cuando el flujo nuevo demuestra que aguanta.' },
      { q: '¿Trabajas el RGPD?', a: 'Sí. Aplico RGPD y LOPDGDD en mi trabajo diario con expedientes de formación, que incluyen datos personales de alumnado.' },
    ],
    crossLinks: [
      { href: '/automatizacion-ia', label: 'Automatización con IA' },
      { href: '/calidad', label: 'Calidad' },
      { href: '/tecnico', label: 'Formación y LMS' },
      { href: '/casos', label: 'Casos de éxito' },
    ],
    showTimeline: true, showPortfolio: false, showAbout: true,
  },

  /* ---------------------------------------------------------------- 6 */
  {
    slug: 'automatizacion-ia', route: '/automatizacion-ia',
    title: 'Automatización con IA para pymes · Cuenca',
    description: 'Automatizaciones pequeñas, medibles y seguras: mapa de proceso, prototipo funcional, integración con ERP o CRM y formación del equipo.',
    eyebrow: 'Diagnóstico · prototipo · integración',
    h1: 'Automatizo tareas administrativas para que tu equipo deje de copiar datos, perseguir documentos y rehacer informes.',
    intro: [
      'La IA útil no empieza preguntando qué herramienta comprar, sino qué tarea se repite, dónde nace el dato y quién lo revisa. Trabajo con empresas que necesitan ordenar administración, informes, documentación, CRM o ERP sin montar un proyecto imposible.',
      'Mi perfil mezcla ADE, programación, sistemas y docencia: puedo entender el proceso, construir el flujo y enseñar al equipo a usarlo sin dependencia ciega.',
    ],
    claim: 'Automatización pequeña, segura y medible: formularios, documentos, informes, clasificación de solicitudes, extracción de datos y conexiones con Sage, SAP FICO, CRM o Moodle.',
    ctaPrimary: { label: 'Pedir diagnóstico', href: '#contacto' },
    ctaSecondary: { label: 'Ver el proceso', href: '#proceso' },
    services: [
      { title: 'Administración repetitiva', body: 'Entradas de datos, correos, hojas de cálculo, justificantes, solicitudes, seguimiento de expedientes y documentación que cambia poco pero consume muchas horas.' },
      { title: 'Informes y cuadros de mando', body: 'Extracción, limpieza y lectura de datos para informes internos, seguimiento comercial, calidad, formación o dirección.' },
      { title: 'IA conectada al trabajo real', body: 'Asistentes y flujos que trabajan con tus documentos y sistemas, con límites claros: qué pueden hacer, qué no, quién valida y cómo queda trazado.' },
    ],
    extras: {
      heading: 'Qué entrego',
      items: [
        { title: 'Mapa de proceso', body: 'Diagrama de entradas, salidas, responsables, herramientas, riesgos y puntos donde automatizar tiene sentido.' },
        { title: 'Prototipo funcional', body: 'Un flujo pequeño que resuelve una tarea concreta antes de escalar. Nada de prometer una nave espacial para clasificar tres correos.' },
        { title: 'Integración técnica', body: 'Conexión con formularios, hojas, bases de datos, ERP, CRM, Moodle o la documentación existente según el caso.' },
        { title: 'Guía de uso', body: 'Instrucciones, límites, mantenimiento básico y formación para que el equipo sepa usarlo y corregirlo.' },
      ],
    },
    process: [
      { step: 'Auditoría breve', body: 'Revisamos tareas, volumen, herramientas y dolor real.' },
      { step: 'Priorización', body: 'Elegimos una automatización pequeña con impacto medible.' },
      { step: 'Prototipo', body: 'Construyo el flujo, lo probamos con datos reales y ajustamos.' },
      { step: 'Entrega', body: 'Documentación, formación y criterios para escalar sin perder control.' },
    ],
    faq: [
      { q: '¿Necesito tener ya un ERP o CRM?', a: 'No. Si existe, lo respeto y lo conecto donde tenga sentido. Si no existe, podemos empezar con formularios, hojas y una base de datos sencilla.' },
      { q: '¿La IA decide sola?', a: 'No debería. En procesos sensibles la IA prepara, clasifica o propone, y una persona valida. La gracia está en ahorrar trabajo sin perder criterio.' },
      { q: '¿Se puede conectar con una web?', a: 'Sí. Una web a medida puede alimentar formularios, solicitudes, reservas o informes internos.' },
      { q: '¿Sirve para formación bonificada o LMS?', a: 'Especialmente para seguimiento, documentación, informes y auditorías.' },
    ],
    crossLinks: [
      { href: '/administracion', label: 'Administración' },
      { href: '/casos', label: 'Casos de éxito' },
      { href: '/tecnico', label: 'Formación y LMS' },
    ],
    showTimeline: false, showPortfolio: true, showAbout: false,
  },

  /* ---------------------------------------------------------------- 7 */
  {
    slug: 'casos', route: '/casos',
    title: 'Casos de éxito · Webs a medida e integración',
    description: 'Cuatro proyectos en producción: reservas para barbería, estudio de estética, librería cultural y e-commerce industrial con integración ERP Sage.',
    eyebrow: 'Cuatro proyectos en producción',
    h1: 'Webs reales para negocios que necesitan verse mejor, vender con más claridad y ordenar su presencia digital.',
    intro: [
      'No vendo páginas bonitas como si fueran cuadros. Un buen proyecto web tiene que aclarar el servicio, reducir fricción, transmitir confianza y dejar una base técnica que no se rompa cuando el negocio crece.',
      'Estos casos muestran cuatro tipos de trabajo: reserva online, marca personal, comercio cultural e industria con catálogo técnico.',
    ],
    claim: 'La misma lógica para sectores distintos: entender el negocio, diseñar la ruta del cliente y programar una web que Google y las personas puedan leer sin esfuerzo.',
    ctaPrimary: { label: 'Quiero algo parecido', href: '#contacto' },
    services: [],
    faq: [
      { q: '¿El diseño empieza por estética o por negocio?', a: 'Por negocio. Primero se define qué debe hacer la web: reservar, captar contactos, explicar servicios, ordenar catálogo o reducir preguntas repetidas. Después se diseña.' },
      { q: '¿Se puede añadir automatización después?', a: 'Sí. Una web bien planteada puede crecer hacia formularios inteligentes, bases de datos, informes y flujos automatizados.' },
      { q: '¿También trabajas con centros de formación?', a: 'Sí. Para LMS, FUNDAE, FOCO y programaciones didácticas, el perfil enfocado es el de técnico de formación.' },
    ],
    crossLinks: [
      { href: '/automatizacion-ia', label: 'Automatización con IA' },
      { href: '/administracion', label: 'Administración' },
      { href: '/', label: 'Inicio' },
    ],
    showTimeline: false, showPortfolio: true, showAbout: false,
  },
];

export const byRoute = (route: string) => profiles.find(p => p.route === route)!;
