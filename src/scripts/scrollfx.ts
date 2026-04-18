/**
 * Barra de progreso + parallax sutil en el fondo.
 * Usa lerp (0.14) con RAF encadenado. Desactiva parallax en pointer: coarse
 * y prefers-reduced-motion para evitar jank en móvil.
 */
export function initScrollFX(): void {
  if (typeof window === 'undefined') return;

  const progress = document.getElementById('nx-progress');
  const parallax = document.getElementById('nx-parallax');
  const layers = parallax
    ? Array.from(parallax.querySelectorAll<HTMLElement>('[data-depth]'))
    : [];

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarse = matchMedia('(pointer: coarse)').matches;
  const enableParallax = !reduced && !coarse && layers.length > 0;

  let targetY = window.scrollY;
  let smoothY = targetY;
  let rafId = 0;
  let running = false;

  // scaleX es más barato que width (no dispara layout)
  if (progress) {
    progress.style.transformOrigin = 'left center';
    progress.style.willChange = 'transform';
  }

  const update = () => {
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = docH > 0 ? Math.min(1, Math.max(0, smoothY / docH)) : 0;

    if (progress) {
      progress.style.transform = `scaleX(${ratio})`;
    }

    if (enableParallax) {
      for (let i = 0; i < layers.length; i++) {
        const layer = layers[i];
        const depth = parseFloat(layer.dataset.depth ?? '0.2');
        const translate = -smoothY * depth;
        layer.style.transform = `translate3d(0, ${translate.toFixed(2)}px, 0)`;
      }
    }
  };

  const tick = () => {
    smoothY += (targetY - smoothY) * 0.14;
    update();
    if (Math.abs(targetY - smoothY) > 0.5) {
      rafId = requestAnimationFrame(tick);
    } else {
      smoothY = targetY;
      update();
      running = false;
    }
  };

  const onScroll = () => {
    targetY = window.scrollY;
    if (!running) {
      running = true;
      rafId = requestAnimationFrame(tick);
    }
  };

  const onResize = () => update();

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize);
  update();

  const onLoad = () => document.body.classList.add('has-loaded');
  if (document.readyState === 'complete') onLoad();
  else window.addEventListener('load', onLoad, { once: true });

  if (import.meta.hot) {
    import.meta.hot.dispose(() => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('load', onLoad);
    });
  }
}
