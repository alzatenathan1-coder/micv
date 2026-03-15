/* ================================================================
   NATANAEL ALZATE TORRES — PORTFOLIO JAVASCRIPT
   ================================================================ */

/* ----------------------------------------------------------------
   1. THEME TOGGLE — dark / light with localStorage persistence
   ---------------------------------------------------------------- */
const html        = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const themeIcon   = document.getElementById('theme-icon');

// Restore saved preference (default: dark)
const saved = localStorage.getItem('portfolio-theme') || 'dark';
html.setAttribute('data-theme', saved);
applyThemeIcon(saved);

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next    = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('portfolio-theme', next);
  applyThemeIcon(next);
});

function applyThemeIcon(theme) {
  if (theme === 'dark') {
    themeIcon.className   = 'fa-solid fa-moon';
    themeToggle.title     = 'Cambiar a modo claro';
    themeToggle.setAttribute('aria-label', 'Cambiar a modo claro');
  } else {
    themeIcon.className   = 'fa-solid fa-sun';
    themeToggle.title     = 'Cambiar a modo oscuro';
    themeToggle.setAttribute('aria-label', 'Cambiar a modo oscuro');
  }
}


/* ----------------------------------------------------------------
   2. STICKY NAVBAR — add .scrolled class after 20px scroll
   ---------------------------------------------------------------- */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });


/* ----------------------------------------------------------------
   3. ACTIVE NAV LINK — highlight current section in nav
   ---------------------------------------------------------------- */
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => activeObserver.observe(s));


/* ----------------------------------------------------------------
   4. HAMBURGER MENU — mobile nav toggle
   ---------------------------------------------------------------- */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close when any mobile link is clicked
mobileNav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', closeMobileNav);
});

// Close on outside click
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target) && mobileNav.classList.contains('open')) {
    closeMobileNav();
  }
});

function closeMobileNav() {
  hamburger.classList.remove('open');
  mobileNav.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}


/* ----------------------------------------------------------------
   5. SCROLL REVEAL — fade-in elements as they enter the viewport
   ---------------------------------------------------------------- */
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target); // fire once only
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => revealObserver.observe(el));


/* ----------------------------------------------------------------
   6. SKILL BAR ANIMATION — animate width when bars scroll into view
   ---------------------------------------------------------------- */
const skillItems = document.querySelectorAll('.skill-item[data-pct]');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target.querySelector('.skill-fill');
      const pct  = entry.target.dataset.pct;
      if (fill && pct) fill.style.width = pct + '%';
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.35 });

skillItems.forEach(item => skillObserver.observe(item));


/* ----------------------------------------------------------------
   7. HERO COUNTER ANIMATION — animated numbers in stats row
   ---------------------------------------------------------------- */
function animateCount(el, target, suffix, duration = 1500) {
  let start     = 0;
  const step    = Math.ceil(target / (duration / 16));
  const timer   = setInterval(() => {
    start = Math.min(start + step, target);
    // Format 2400 → "2.400"
    el.textContent = target >= 1000
      ? start.toLocaleString('es-ES') + suffix
      : start + suffix;
    if (start >= target) clearInterval(timer);
  }, 16);
}

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
  const statsObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      heroStats.querySelectorAll('.stat-num').forEach(el => {
        const target = parseInt(el.dataset.target, 10);
        const suffix = el.dataset.suffix || '';
        animateCount(el, target, suffix);
      });
      statsObserver.unobserve(heroStats);
    }
  }, { threshold: 0.5 });
  statsObserver.observe(heroStats);
}


/* ----------------------------------------------------------------
   8. CONTACT FORM — client-side validation & success state
   ---------------------------------------------------------------- */
const contactForm    = document.getElementById('contact-form');
const formSuccessMsg = document.getElementById('form-success');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre  = contactForm.querySelector('#f-nombre');
    const email   = contactForm.querySelector('#f-email');
    const mensaje = contactForm.querySelector('#f-mensaje');

    // Clear previous error states
    [nombre, email, mensaje].forEach(f => f.classList.remove('error'));

    let valid = true;

    if (!nombre.value.trim()) { nombre.classList.add('error');  valid = false; }
    if (!isValidEmail(email.value)) { email.classList.add('error'); valid = false; }
    if (!mensaje.value.trim()) { mensaje.classList.add('error'); valid = false; }

    if (!valid) {
      // Focus the first invalid field
      contactForm.querySelector('.error').focus();
      return;
    }

    // Show success UI (form stays in DOM but is hidden via CSS)
    contactForm.hidden = true;
    formSuccessMsg.hidden = false;
  });

  // Remove error class on input
  contactForm.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('input', () => field.classList.remove('error'));
  });
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}
