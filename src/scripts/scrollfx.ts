export function initScrollFX(): void {
  if (typeof window === 'undefined') return;

  const progress = document.getElementById('nx-progress');
  const parallax = document.getElementById('nx-parallax');
  const layers = parallax
    ? Array.from(parallax.querySelectorAll<HTMLElement>('[data-depth]'))
    : [];

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarse = matchMedia('(pointer: coarse)').matches;

  let targetY = window.scrollY;
  let smoothY = targetY;
  let ticking = false;

  const update = () => {
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = docH > 0 ? Math.min(1, Math.max(0, smoothY / docH)) : 0;

    if (progress) {
      progress.style.width = `${ratio * 100}%`;
    }

    if (!reduced && !coarse && layers.length) {
      layers.forEach(layer => {
        const depth = parseFloat(layer.dataset.depth ?? '0.2');
        const translate = -smoothY * depth;
        layer.style.transform = `translate3d(0, ${translate.toFixed(2)}px, 0)`;
      });
    }

    ticking = false;
  };

  const raf = () => {
    smoothY += (targetY - smoothY) * 0.14;
    if (Math.abs(targetY - smoothY) > 0.5) {
      update();
      requestAnimationFrame(raf);
    } else {
      smoothY = targetY;
      update();
      ticking = false;
    }
  };

  const onScroll = () => {
    targetY = window.scrollY;
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(raf);
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', update);
  update();

  // Pulso inicial al cargar: transición suave de entrada del contenido
  window.addEventListener('load', () => {
    document.body.classList.add('has-loaded');
  });
}
