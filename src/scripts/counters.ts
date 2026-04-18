export function initCounters(): void {
  const els = document.querySelectorAll<HTMLElement>('[data-counter]');
  if (!els.length) return;

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  els.forEach(el => {
    const raw = el.dataset.counter ?? '';
    const suffix = el.dataset.suffix ?? '';
    const numericMatch = raw.replace('.', '').match(/\d+/);
    if (!numericMatch) return;

    const target = parseInt(numericMatch[0], 10);
    const isDecimalFormatted = raw.includes('.');
    if (reduced) {
      el.textContent = `${raw}${suffix}`;
      return;
    }

    const render = (n: number) => {
      const value = isDecimalFormatted
        ? new Intl.NumberFormat('es-ES').format(n)
        : raw.startsWith('S-')
          ? `S-${n}`
          : String(n);
      el.textContent = `${value}${suffix}`;
    };

    const isSEightFormat = raw.startsWith('S-');
    const finalRender = () => {
      el.textContent = `${raw}${suffix}`;
    };

    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        observer.unobserve(e.target);

        const duration = 1400;
        const start = performance.now();
        const from = 0;

        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          const n = Math.round(from + (target - from) * eased);
          if (isSEightFormat) render(n);
          else render(n);
          if (t < 1) requestAnimationFrame(tick);
          else finalRender();
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.3 });

    obs.observe(el);
  });
}
