/**
 * Entry-point único. Garantiza idempotencia (evita doble init en HMR)
 * y permite a Astro hacer code-splitting con tree-shaking efectivo.
 */
import { initPreloader } from './preloader';
import { initScrollFX } from './scrollfx';
import { initNavbar } from './navbar';
import { initReveal } from './reveal';
import { initCounters } from './counters';
import { initCursor } from './cursor';

declare global {
  interface Window {
    __nxInit?: boolean;
  }
}

export function initAll(): void {
  if (typeof window === 'undefined') return;
  if (window.__nxInit) return;
  window.__nxInit = true;

  const run = () => {
    // Preloader primero: marca body[data-preloader="done"] al terminar
    initPreloader();
    // El resto puede arrancar en paralelo; no dependen del preloader
    initScrollFX();
    initNavbar();
    initReveal();
    initCounters();
    initCursor();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run, { once: true });
  } else {
    run();
  }
}
