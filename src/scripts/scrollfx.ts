/**
 * Barra de progreso + parallax de fondo reactivo a scroll y ratón.
 * Un solo bucle RAF con lerp para ambos: scroll (translateY por capa,
 * según data-depth) y ratón (--mx/--my en % + un desplazamiento extra
 * por capa, proporcional a su depth, para dar sensación de profundidad).
 * Desactiva parallax y reacción al ratón en pointer: coarse y
 * prefers-reduced-motion para evitar jank en móvil / respetar accesibilidad.
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
  const enableMouseFX = !reduced && !coarse;

  const MOUSE_PX = 46; // desplazamiento máx. (px) del blob con más depth al mover el ratón de borde a borde

  let targetY = window.scrollY;
  let smoothY = targetY;
  let targetMX = 0.5, targetMY = 0.5; // 0..1, centro por defecto
  let smoothMX = 0.5, smoothMY = 0.5;
  let rafId = 0;
  let running = false;

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

    const dx = (smoothMX - 0.5) * 2; // -1..1
    const dy = (smoothMY - 0.5) * 2;

    if (enableParallax) {
      for (let i = 0; i < layers.length; i++) {
        const layer = layers[i];
        const depth = parseFloat(layer.dataset.depth ?? '0.2');
        const scrollT = -smoothY * depth;
        const mouseX = enableMouseFX ? dx * MOUSE_PX * depth : 0;
        const mouseY = enableMouseFX ? dy * MOUSE_PX * depth * 0.6 : 0;
        layer.style.transform = `translate3d(${mouseX.toFixed(2)}px, ${(scrollT + mouseY).toFixed(2)}px, 0)`;
      }
    }

    if (enableMouseFX && parallax) {
      parallax.style.setProperty('--mx', `${(smoothMX * 100).toFixed(2)}%`);
      parallax.style.setProperty('--my', `${(smoothMY * 100).toFixed(2)}%`);
    }
  };

  const tick = () => {
    smoothY += (targetY - smoothY) * 0.14;
    smoothMX += (targetMX - smoothMX) * 0.06;
    smoothMY += (targetMY - smoothMY) * 0.06;
    update();

    const settled =
      Math.abs(targetY - smoothY) < 0.5 &&
      Math.abs(targetMX - smoothMX) < 0.0015 &&
      Math.abs(targetMY - smoothMY) < 0.0015;

    if (!settled) {
      rafId = requestAnimationFrame(tick);
    } else {
      smoothY = targetY;
      smoothMX = targetMX;
      smoothMY = targetMY;
      update();
      running = false;
    }
  };

  const kick = () => {
    if (!running) {
      running = true;
      rafId = requestAnimationFrame(tick);
    }
  };

  const onScroll = () => {
    targetY = window.scrollY;
    kick();
  };

  const onResize = () => update();

  const onMouseMove = (e: MouseEvent) => {
    targetMX = e.clientX / window.innerWidth;
    targetMY = e.clientY / window.innerHeight;
    kick();
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize);
  if (enableMouseFX) {
    window.addEventListener('mousemove', onMouseMove, { passive: true });
  }
  update();

  const onLoad = () => document.body.classList.add('has-loaded');
  if (document.readyState === 'complete') onLoad();
  else window.addEventListener('load', onLoad, { once: true });

  if (import.meta.hot) {
    import.meta.hot.dispose(() => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('load', onLoad);
    });
  }
}
