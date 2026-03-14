// Custom cursor glow effect
const cursorGlow = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
});

// Intersection Observer for reveal animations
const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
        }
    });
}, revealOptions);

// Select elements to reveal
document.querySelectorAll('.stat-card, .timeline-item, .skill-tag, .section-title, .about-text').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s cubic-bezier(0.2, 1, 0.3, 1)";
    revealObserver.observe(el);
});

// Add a class for revealed state
const style = document.createElement('style');
style.textContent = `
    .revealed {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Navigation scroll effect
const nav = document.querySelector('.glass-nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.padding = "0.8rem 2rem";
        nav.style.background = "rgba(5, 5, 5, 0.95)";
    } else {
        nav.style.padding = "1rem 2rem";
        nav.style.background = "rgba(5, 5, 5, 0.8)";
    }
});
