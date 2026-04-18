/**
 * Cursor personalizado con ring animado.
 * Se desactiva automáticamente en dispositivos táctiles y con reduced-motion.
 */
export function initCursor(): void {
  if (typeof window === 'undefined') return;

  const finePointer = matchMedia('(pointer: fine)').matches;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!finePointer || reduced) return;

  const dot = document.getElementById('nx-cursor-dot');
  const ring = document.getElementById('nx-cursor-ring');
  if (!dot || !ring) return;

  document.documentElement.classList.add('has-custom-cursor');

  let mx = window.innerWidth / 2;
  let my = window.innerHeight / 2;
  let rx = mx;
  let ry = my;
  let rafId = 0;
  let moved = false;

  const onMove = (e: MouseEvent) => {
    mx = e.clientX;
    my = e.clientY;
    if (!moved) {
      rx = mx;
      ry = my;
      moved = true;
    }
    dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
  };

  const tick = () => {
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
    rafId = requestAnimationFrame(tick);
  };

  window.addEventListener('mousemove', onMove, { passive: true });
  rafId = requestAnimationFrame(tick);

  const hoverables = 'a, button, [role="button"], input, textarea, select, label, summary, .chip, .card';
  const onOver = (e: MouseEvent) => {
    const target = e.target as HTMLElement | null;
    if (target?.closest(hoverables)) {
      document.documentElement.classList.add('nx-cursor-hover');
    }
  };
  const onOut = (e: MouseEvent) => {
    const target = e.target as HTMLElement | null;
    if (target?.closest(hoverables)) {
      document.documentElement.classList.remove('nx-cursor-hover');
    }
  };
  document.addEventListener('mouseover', onOver);
  document.addEventListener('mouseout', onOut);

  const onLeave = () => {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
  };
  const onEnter = () => {
    dot.style.opacity = '1';
    ring.style.opacity = '1';
  };
  window.addEventListener('mouseleave', onLeave);
  window.addEventListener('mouseenter', onEnter);

  // Cleanup en HMR (Vite) para evitar RAF duplicados y listeners huérfanos
  if (import.meta.hot) {
    import.meta.hot.dispose(() => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('mouseenter', onEnter);
      document.documentElement.classList.remove('has-custom-cursor', 'nx-cursor-hover');
    });
  }
}
