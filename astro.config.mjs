import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // NC-01 / NC-02: única fuente de verdad del dominio. Todo canonical,
  // og:url y entrada del sitemap se derivan de aquí.
  site: 'https://natanaelalzatetorres.com',
  integrations: [
    sitemap({
      // Páginas de servicio fuera del índice: no aportan a búsqueda.
      filter: (page) => !/\/(gracias|404)\/?$/.test(page),
      changefreq: 'monthly',
      lastmod: new Date(),
      serialize(item) {
        const priority = item.url.replace('https://natanaelalzatetorres.com', '').replace(/\/$/, '') === ''
          ? 1.0
          : /(aviso-legal|privacidad)/.test(item.url) ? 0.2 : 0.8;
        return { ...item, priority };
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    // La caché no puede vivir en iCloud: el mount no permite unlink.
    cacheDir: '.cache/vite',
  },
  // Las URLs indexadas en producción son /calidad, /docencia… sin barra final.
  // format:'file' + cleanUrls de Vercel las reproduce exactamente: cero redirecciones.
  trailingSlash: 'never',
  compressHTML: true,
  build: { inlineStylesheets: 'auto', format: 'file' },
});
