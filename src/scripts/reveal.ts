export function initReveal(): void {
  const els = document.querySelectorAll<HTMLElement>('.reveal');
  if (!els.length) return;

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    els.forEach(el => el.classList.add('is-visible'));
    return;
  }

  if (!('IntersectionObserver' in window)) {
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
}
