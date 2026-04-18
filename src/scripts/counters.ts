/**
 * Contadores numéricos animados al entrar en viewport.
 * Soporta formato "S-8" (mantiene prefijo) y números con miles.
 */
export function initCounters(): void {
  if (typeof window === 'undefined') return;

  const els = document.querySelectorAll<HTMLElement>('[data-counter]');
  if (!els.length) return;

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const supportsIO = 'IntersectionObserver' in window;
  const observers: IntersectionObserver[] = [];

  els.forEach(el => {
    const raw = el.dataset.counter ?? '';
    const suffix = el.dataset.suffix ?? '';
    const numericMatch = raw.replace(/\./g, '').match(/\d+/);
    if (!numericMatch) return;

    const target = parseInt(numericMatch[0], 10);
    const isSFormat = raw.startsWith('S-');
    const hasThousands = raw.includes('.');

    const render = (n: number) => {
      let value: string;
      if (isSFormat) {
        value = `S-${n}`;
      } else if (hasThousands) {
        value = new Intl.NumberFormat('es-ES').format(n);
      } else {
        value = String(n);
      }
      el.textContent = `${value}${suffix}`;
    };

    if (reduced) {
      el.textContent = `${raw}${suffix}`;
      return;
    }

    if (!supportsIO) {
      el.textContent = `${raw}${suffix}`;
      return;
    }

    const duration = 1400;
    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        observer.unobserve(e.target);

        const start = performance.now();
        const step = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          const n = Math.round(target * eased);
          render(n);
          if (t < 1) {
            requestAnimationFrame(step);
          } else {
            // Asegurar valor final exacto con formato original
            el.textContent = `${raw}${suffix}`;
          }
        };
        requestAnimationFrame(step);
      });
    }, { threshold: 0.3 });

    obs.observe(el);
    observers.push(obs);
  });

  if (import.meta.hot) {
    import.meta.hot.dispose(() => {
      observers.forEach(o => o.disconnect());
    });
  }
}
