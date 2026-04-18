export function initPreloader(): void {
  if (typeof window === 'undefined') return;
  const el = document.getElementById('nx-preloader');
  if (!el) return;

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const minDelay = reduced ? 0 : 1250;

  const dismiss = () => {
    el.classList.add('is-done');
    // Retira del DOM tras la transición para liberar recursos
    setTimeout(() => el.remove(), 800);
    document.body.dataset.preloader = 'done';
  };

  const start = performance.now();
  const finish = () => {
    const elapsed = performance.now() - start;
    const wait = Math.max(0, minDelay - elapsed);
    setTimeout(dismiss, wait);
  };

  if (document.readyState === 'complete') {
    finish();
  } else {
    window.addEventListener('load', finish, { once: true });
    // Failsafe: no dejar que el preloader se quede colgado
    setTimeout(finish, 4000);
  }
}
