export const site = {
  name: 'Natanael Alzate Torres',
  shortName: 'Natanael Alzate',
  role: 'Docente técnico IT · Analista Programador',
  tagline: 'Docente técnico IT · Formador homologado SEPE',
  location: 'Cuenca, España',
  url: 'https://natanaelalzatetorres.com',
  email: 'alzatetorres@icloud.com',
  phone: '+34 651 377 113',
  phoneHref: '+34651377113',
  whatsapp: 'https://wa.me/34651377113',
  linkedin: 'https://www.linkedin.com/in/natanaelalzate',
  github: 'https://github.com/alzatenathan1-coder',
  photo: '/photo.jpg',
  cvDocencia: '/cv/CV_Docencia_Natanael_Alzate.pdf',
  cvDesarrollo: '/cv/CV_Desarrollo_Natanael_Alzate.pdf',
} as const;

export const metrics = [
  { value: 2400, suffix: '+', label: 'Horas de formación relacionadas' },
  { value: 210, suffix: ' h', label: 'Curso Java en activo (IFCD052PO)' },
  { value: 8, suffix: 'S', prefix: '', label: 'Calificación S-8 en SSCE0110' },
  { value: 8, suffix: ' años', label: 'Experiencia en IT real' },
] as const;

export const trust = [
  { label: 'SEPE',     title: 'Acreditaciones oficiales SEPE' },
  { label: 'JCCM',     title: 'Castilla-La Mancha' },
  { label: 'FUNDAE',   title: 'Formación Programada' },
  { label: 'AESA',     title: 'Piloto de drones' },
  { label: 'Cambridge',title: 'Inglés B1 certificado' },
  { label: 'UCLM',     title: 'Universidad de Castilla-La Mancha' },
  { label: 'UNED',     title: 'Universidad Nacional de Educación a Distancia' },
] as const;

export const javaCourse = {
  title: 'Programación en Java',
  code: 'IFCD052PO',
  hours: 210,
  dateRange: '18/03/2026 – 25/05/2026',
  center: 'HAZERTA, Soluciones Globales para el Empleo S.L.',
  action: 'Acción 17 · Grupo 2',
  modules: [
    'Introducción a la programación y paradigmas',
    'Elementos de un programa Java: tipos, operadores y casting',
    'Programación Orientada a Objetos: los cinco pilares',
    'Clases, objetos, herencia y polimorfismo',
    'Excepciones, colecciones y flujos de datos',
    'Acceso a BBDD y desarrollo web básico',
  ],
  methodology: [
    {
      title: 'Flipped Classroom con IA',
      body: 'Asimilación teórica previa con Google NotebookLM restringido a documentación oficial del curso, para evitar alucinaciones y potenciar la comprensión conversacional.',
    },
    {
      title: 'Programación asistida',
      body: 'Uso guiado de Cursor IDE + Supermaven y Claude como copilotos de aula. El alumno aprende a dirigir la IA con precisión técnica, no a depender de ella.',
    },
    {
      title: 'Cuadernos interactivos (IJava)',
      body: 'Entorno sandbox con Jupyter + kernel Java para practicar tipos, operadores y casting con retroalimentación inmediata, sin compilar proyectos enteros.',
    },
    {
      title: 'Evaluación continua con rúbricas',
      body: 'Rúbricas públicas, seguimiento individualizado y recuperaciones formativas. La nota es resultado del proceso, no un examen suelto.',
    },
  ],
} as const;

export const services = [
  {
    icon: 'teach',
    title: 'Impartición de CP IT',
    body: 'Certificados de profesionalidad y especialidades IFCD / IFCT: programación, desarrollo web, bases de datos, sistemas.',
  },
  {
    icon: 'custom',
    title: 'Acciones formativas a medida',
    body: 'Diseño e impartición de cursos privados o FUNDAE: Java, POO, SQL, e-commerce, calidad ADGD.',
  },
  {
    icon: 'plan',
    title: 'Programación didáctica',
    body: 'Redacción de programaciones SEPE listas para auditoría FUNDAE/JCCM, con rúbricas, cronograma y recursos.',
  },
  {
    icon: 'online',
    title: 'Tutorización e-learning',
    body: 'Moodle y LMS corporativos. Seguimiento, evaluación continua y dinamización online.',
  },
  {
    icon: 'lms',
    title: 'Consultoría LMS / FUNDAE',
    body: 'Configuración, auditoría y gestión de plataformas formativas. Experiencia FOCO (JCCM) y FUNDAE.',
  },
  {
    icon: 'freelance',
    title: 'Colaboración autónomo',
    body: 'Facturación por horas o proyecto. Documentación en regla y disponibilidad flexible para convocatorias.',
  },
] as const;

export const experience = [
  {
    company: 'Formación Futuras Promesas SL (F2Prom)',
    role: 'Desarrollo Web, Sistemas y Calidad',
    period: '2025 – Actualidad',
    current: true,
    icon: 'briefcase',
    body: [
      'Desarrollo y mantenimiento técnico de aplicaciones web corporativas y plataformas LMS de e-learning.',
      'Configuración de servidores locales, entornos Java (JDK) y bases de datos relacionales para formación.',
      'Auditoría técnica de procesos y gestión de datos en plataformas de la JCCM (FOCO) y FUNDAE.',
    ],
    links: [
      { label: 'formacionfuturaspromesas.com', href: 'https://formacionfuturaspromesas.com/' },
      { label: 'promesasdepapel.com', href: 'https://promesasdepapel.com/' },
    ],
  },
  {
    company: 'HAZERTA, Soluciones Globales para el Empleo S.L.',
    role: 'Docente técnico — Programación Java (IFCD052PO)',
    period: 'Mar 2026 – May 2026',
    current: true,
    icon: 'chalkboard',
    body: [
      'Impartición del curso Programación en Java, acción formativa 17, grupo 2, 210 h.',
      'Metodología propia de Flipped Classroom potenciada con IA (NotebookLM, Cursor IDE, Claude).',
      'Diseño íntegro de la programación didáctica, rúbricas de evaluación y material de aula.',
    ],
    links: [],
  },
  {
    company: 'CaixaBank',
    role: 'Asesor Financiero y Soporte de Banca Digital',
    period: '2022 – 2023',
    icon: 'bank',
    body: [
      'Manejo avanzado del software financiero y CRM del banco para extracción, análisis y gestión de clientes B2B/B2C.',
      'Soporte técnico operativo y resolución de incidencias informáticas en banca electrónica.',
      'Liderazgo en programas de alfabetización digital.',
    ],
    links: [],
  },
  {
    company: 'Pinturas COES, S.L.',
    role: 'Desarrollador E-commerce y Marketing Digital',
    period: '2018 – 2021',
    icon: 'store',
    body: [
      'Desarrollo full-stack y creación desde cero de la tienda online corporativa (HTML, CSS, JavaScript, Java server-side).',
      'Administración de la base de datos de productos e integraciones técnicas con ERP Sage.',
    ],
    links: [{ label: 'pinturascoes.com', href: 'https://pinturascoes.com/' }],
  },
  {
    company: 'Hybrid Company — Praga, República Checa',
    role: 'Desarrollador Backend Java',
    period: '2017 – 2018',
    icon: 'java',
    body: [
      'Desarrollo de lógica de negocio backend en Java para aplicaciones de televisión interactiva (HbbTV).',
      'Componentes interactivos con JavaScript, HTML, CSS y APIs específicas HbbTV.',
      'Diseño, normalización y administración de bases de datos relacionales (SQL).',
    ],
    links: [{ label: 'mihybrid.com', href: 'https://www.mihybrid.com/' }],
  },
] as const;

export const education = [
  {
    title: 'CP Docencia de la Formación Profesional para el Empleo',
    code: 'SSCE0110',
    level: 'Nivel 3 · 380 h',
    highlight: 'Sobresaliente · S-8',
    body: 'Habilitación oficial SEPE para impartición de formación profesional para el empleo. Incluye programación didáctica, impartición, evaluación del aprendizaje y 100 h complementarias en E-Learning.',
    official: true,
  },
  {
    title: 'CP Desarrollo de Aplicaciones con Tecnología Web',
    code: 'IFCD0210',
    level: 'Nivel 3 · 590 h',
    highlight: 'Acreditación SEPE',
    body: 'Programación web en entorno cliente (180 h), programación en entorno servidor con POO y BBDD (240 h), implantación de aplicaciones web (90 h) y prácticas profesionales (80 h).',
    official: true,
  },
  {
    title: 'Técnicas de Calidad y Mejora Continua',
    code: 'ADGD01',
    level: '425 h',
    highlight: 'Homologado SEPE',
    body: 'Implantación del modelo de gestión, mejora continua, auditorías de calidad, ensayos mecánicos, metrología y estadística aplicada. Febrero – junio 2025.',
    official: true,
  },
  {
    title: 'Grado en Administración y Dirección de Empresas',
    code: 'ADE · UCLM',
    level: 'Universidad de Castilla-La Mancha',
    highlight: 'Finalizado 2017',
    body: 'Base sólida en gestión, organización de empresa, contabilidad y análisis económico. Punto de apoyo para la gestión administrativa en entornos formativos y FUNDAE.',
    official: false,
  },
  {
    title: 'Grado en Psicología',
    code: 'UNED',
    level: 'En curso',
    highlight: '21 créditos superados',
    body: 'Refuerzo en procesos de aprendizaje, motivación y neuropsicología aplicada al aula. Especialmente útil para adaptar metodologías a perfiles heterogéneos.',
    official: false,
  },
  {
    title: 'CP Actividades de Venta',
    code: 'COMV0108',
    level: 'Nivel 2 · 590 h',
    highlight: 'Acreditación SEPE',
    body: 'Operaciones de venta y auxiliares, atención al cliente, inglés profesional comercial y prácticas profesionales. Marzo 2018 – enero 2019.',
    official: true,
  },
  {
    title: 'Piloto de Drones AESA',
    code: 'Categorías A1/A3',
    level: 'Acreditación complementaria',
    highlight: 'Vigente hasta 2029',
    body: 'Certificación oficial de la Agencia Estatal de Seguridad Aérea.',
    official: true,
  },
] as const;

export const skills = {
  dev: [
    'Java (POO)',
    'SQL / BBDD',
    'HTML5',
    'CSS3',
    'JavaScript',
    'Backend Web',
    'Eclipse · Cursor IDE',
    'Jupyter IJava',
    'HbbTV',
    'APIs REST',
  ],
  systems: [
    'Moodle (LMS)',
    'SAP (FICO)',
    'Sage ERP',
    'Microsoft Dynamics',
    'CRM corporativo',
    'FOCO (JCCM)',
    'FUNDAE',
    'Google NotebookLM',
  ],
  teaching: [
    'Programación didáctica SEPE',
    'Rúbricas y evaluación continua',
    'Flipped Classroom',
    'Aula con IA generativa',
    'Tutorización e-learning',
    'Adaptación a perfiles heterogéneos',
  ],
  languages: [
    { name: 'Español', level: 'Nativo', tone: 'native' },
    { name: 'Inglés',  level: 'B1 · Cambridge', tone: 'mid' },
    { name: 'Alemán',  level: 'A2', tone: 'low' },
  ],
} as const;
