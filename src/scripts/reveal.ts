/**
 * Anima .reveal al entrar en viewport (opacidad + translateY).
 * Honra prefers-reduced-motion y hace fallback si no hay IntersectionObserver.
 */
export function initReveal(): void {
  if (typeof window === 'undefined') return;

  const els = document.querySelectorAll<HTMLElement>('.reveal');
  if (!els.length) return;

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const supportsIO = 'IntersectionObserver' in window;

  if (reduced || !supportsIO) {
    els.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  els.forEach(el => obs.observe(el));

  if (import.meta.hot) {
    import.meta.hot.dispose(() => obs.disconnect());
  }
}
