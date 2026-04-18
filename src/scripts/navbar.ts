/**
 * Navbar sticky con auto-hide en scroll up y resalte de sección activa.
 */
export function initNavbar(): void {
  if (typeof window === 'undefined') return;

  const nav = document.getElementById('nx-navbar');
  const toggle = document.getElementById('nx-nav-toggle');
  const mobileMenu = document.getElementById('nx-nav-mobile');
  if (!nav) return;

  const SHOW_AFTER = 140;
  const HIDE_BEFORE = 60;
  let lastY = window.scrollY;

  const update = () => {
    const y = window.scrollY;
    const goingDown = y > lastY;
    const state = nav.dataset.state;

    if (y < HIDE_BEFORE) {
      if (state !== 'hidden') {
        nav.classList.add('-translate-y-full', 'opacity-0');
        nav.dataset.state = 'hidden';
      }
    } else if (y > SHOW_AFTER && goingDown) {
      if (state !== 'visible') {
        nav.classList.remove('-translate-y-full', 'opacity-0');
        nav.dataset.state = 'visible';
      }
    } else if (!goingDown && y >= HIDE_BEFORE) {
      if (state !== 'visible') {
        nav.classList.remove('-translate-y-full', 'opacity-0');
        nav.dataset.state = 'visible';
      }
    }
    lastY = y;
  };

  const onScroll = () => update();
  window.addEventListener('scroll', onScroll, { passive: true });
  update();

  const onToggleClick = () => {
    if (!mobileMenu || !toggle) return;
    const isOpen = !mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden');
    toggle.setAttribute('aria-expanded', String(!isOpen));
  };
  const onMobileLinkClick = () => {
    if (!mobileMenu || !toggle) return;
    mobileMenu.classList.add('hidden');
    toggle.setAttribute('aria-expanded', 'false');
  };

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', onToggleClick);
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', onMobileLinkClick));
  }

  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('.nx-nav-link'));
  const sections = links
    .map(l => document.querySelector(l.getAttribute('href') || ''))
    .filter((s): s is Element => !!s);

  let obs: IntersectionObserver | null = null;
  if ('IntersectionObserver' in window && sections.length) {
    obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const id = e.target.id;
          links.forEach(l => {
            const active = l.getAttribute('href') === `#${id}`;
            l.classList.toggle('text-brand-700', active);
            l.classList.toggle('bg-brand-50', active);
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
    sections.forEach(s => obs!.observe(s));
  }

  if (import.meta.hot) {
    import.meta.hot.dispose(() => {
      window.removeEventListener('scroll', onScroll);
      if (toggle) toggle.removeEventListener('click', onToggleClick);
      if (mobileMenu) mobileMenu.querySelectorAll('a').forEach(a => a.removeEventListener('click', onMobileLinkClick));
      if (obs) obs.disconnect();
    });
  }
}
