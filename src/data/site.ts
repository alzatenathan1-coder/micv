export const site = {
  name: 'Natanael Alzate Torres',
  shortName: 'Natanael Alzate',
  role: 'Analista programador y docente técnico acreditado',
  location: 'Cuenca, España',
  url: 'https://natanaelalzatetorres.com',
  email: 'alzatetorres@icloud.com',
  phone: '+34 651 377 113',
  phoneHref: '+34651377113',
  whatsapp: 'https://wa.me/34651377113',
  // NC-05: un único handle, el mismo que en CV, LinkedIn e InfoJobs.
  linkedin: 'https://www.linkedin.com/in/natanaelalzatetorres',
  linkedinHandle: 'in/natanaelalzatetorres',
  photo: '/photo.jpg',
  ogImage: '/og.jpg',
  // NC-03: endpoint real. Sustituir por la access key de Web3Forms.
  formEndpoint: 'https://api.web3forms.com/submit',
  formKey: import.meta.env.PUBLIC_WEB3FORMS_KEY ?? '',
} as const;

/** NC-04: cada ruta tiene su PDF en public/cv/. Generados con cv-ecosystem. */
export const cvs = {
  docencia:       '/cv/CV_Natanael_Alzate_Docencia.pdf',
  tecnico:        '/cv/CV_Natanael_Alzate_Tecnico_Formacion.pdf',
  administracion: '/cv/CV_Natanael_Alzate_Administracion.pdf',
  calidad:        '/cv/CV_Natanael_Alzate_Calidad.pdf',
} as const;

/**
 * Cifras verificables. Cada una debe poder documentarse si la piden en una entrevista.
 * horasImpartidas: 210 h (IFCD052PO, HAZERTA) + 40 h (IFCT032PO, Fundación Empleo y Sostenibilidad).
 */
export const facts = {
  horasImpartidas: 250,
  horasCalidad: 425,
  anosDesde: 2017,
  webssEnProduccion: 4,
  notaSSCE: '8,2',
} as const;

export const trust = [
  { label: 'SEPE',      title: 'Certificados de profesionalidad SSCE0110 e IFCD0210' },
  { label: 'FOCO·JCCM', title: 'Certificado ADGD01 registrado en FOCO' },
  { label: 'FUNDAE',    title: 'Justificación de formación programada' },
  { label: 'UCLM',      title: 'Grado en Administración y Dirección de Empresas' },
  { label: 'AESA',      title: 'Piloto oficial de drones' },
] as const;

export const nav = [
  { href: '/',                  label: 'Inicio' },
  { href: '/docencia',          label: 'Docencia IT' },
  { href: '/tecnico',           label: 'Formación y LMS' },
  { href: '/calidad',           label: 'Calidad' },
  { href: '/administracion',    label: 'Administración' },
  { href: '/automatizacion-ia', label: 'Automatización IA' },
  { href: '/casos',             label: 'Casos' },
] as const;
