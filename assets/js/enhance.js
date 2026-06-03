/* enhance.js — añadidos propios: carrusel horizontal por scroll + formulario.
   Independiente del sistema base; sin dependencias. */
(function () {
    "use strict";

    /* ---------- Carrusel horizontal controlado por el scroll vertical ---------- */
    function initHScroll() {
        var sec = document.querySelector(".hscroll");
        if (!sec) return;
        var track = sec.querySelector(".hscroll-track");
        if (!track) return;

        var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        var extra = 0;
        var enabled = false;

        function vw() { return document.documentElement.clientWidth; }
        function shouldEnable() { return vw() >= 900 && !reduce; }

        function measure() {
            enabled = shouldEnable();
            if (!enabled) {                       // móvil: swipe nativo
                sec.style.height = "";
                track.style.transform = "";
                return;
            }
            extra = Math.max(0, track.scrollWidth - vw());
            sec.style.height = (window.innerHeight + extra) + "px";
            update();
        }

        function update() {
            if (!enabled) return;
            var total = sec.offsetHeight - window.innerHeight;        // == extra
            var p = total > 0 ? (-sec.getBoundingClientRect().top) / total : 0;
            if (p < 0) p = 0; else if (p > 1) p = 1;
            track.style.transform = "translate3d(" + (-p * extra) + "px,0,0)";
        }

        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", measure);
        window.addEventListener("load", measure);
        // refuerzo: vuelve a medir cuando carguen las imágenes del carrusel
        track.querySelectorAll("img").forEach(function (im) {
            if (!im.complete) im.addEventListener("load", measure, { once: true });
        });
        measure();
    }

    /* ---------- Formulario de contacto (Web3Forms vía fetch) ---------- */
    function initForm() {
        var form = document.querySelector(".contact-form");
        if (!form) return;
        var status = form.querySelector(".form-status");
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            status.className = "form-status";
            status.textContent = "Enviando…";
            var data = new FormData(form);
            fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: data,
                headers: { Accept: "application/json" }
            })
            .then(function (r) { return r.json(); })
            .then(function (json) {
                if (json.success) {
                    status.className = "form-status ok";
                    status.textContent = "¡Gracias! Te responderé lo antes posible.";
                    form.reset();
                } else {
                    status.className = "form-status err";
                    status.textContent = "No se pudo enviar. Escríbeme a alzatetorres@icloud.com.";
                }
            })
            .catch(function () {
                status.className = "form-status err";
                status.textContent = "No se pudo enviar. Escríbeme a alzatetorres@icloud.com.";
            });
        });
    }

    /* ---------- Aparición elegante de elementos al hacer scroll ---------- */
    function initReveal() {
        var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        var sel = "[data-section=specialty] h2, [data-section=services] h2, .service, .method,"
            + " [data-section=more] h2, .about-bio, .about-facts, .cv-intro, .cv .cv-wrap,"
            + " [data-section=contact] h2, .contact-info, .contact-form";
        var els = Array.prototype.slice.call(document.querySelectorAll(sel));
        if (!els.length) return;
        if (reduce || !("IntersectionObserver" in window)) return;   // se quedan visibles

        els.forEach(function (el) { el.classList.add("reveal"); });
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) {
                    var sibs = e.target.parentElement ? e.target.parentElement.children : [];
                    var i = Array.prototype.indexOf.call(sibs, e.target);
                    e.target.style.transitionDelay = Math.min(i, 5) * 80 + "ms";
                    e.target.classList.add("in");
                    io.unobserve(e.target);
                }
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
        els.forEach(function (el) { io.observe(el); });
    }

    function ready(fn) {
        if (document.readyState !== "loading") fn();
        else document.addEventListener("DOMContentLoaded", fn);
    }
    ready(function () { initHScroll(); initForm(); initReveal(); });
})();
