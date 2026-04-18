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

  window.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
  }, { passive: true });

  const raf = () => {
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);

  const hoverables = 'a, button, [role="button"], input, textarea, select, label, summary, .chip, .card';
  document.addEventListener('mouseover', e => {
    const target = e.target as HTMLElement | null;
    if (target?.closest(hoverables)) {
      document.documentElement.classList.add('nx-cursor-hover');
    }
  });
  document.addEventListener('mouseout', e => {
    const target = e.target as HTMLElement | null;
    if (target?.closest(hoverables)) {
      document.documentElement.classList.remove('nx-cursor-hover');
    }
  });

  window.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
  });
  window.addEventListener('mouseenter', () => {
    dot.style.opacity = '1';
    ring.style.opacity = '1';
  });
}
