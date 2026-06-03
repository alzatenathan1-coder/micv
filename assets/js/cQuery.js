// Selector Shorthand
const $$ = (s) => document.querySelectorAll(s);
const $1 = (s) => document.querySelector(s);

// Helpers
const getComputedValue = (el, prop) => {
    if (!el || !prop) return 0;
    return parseFloat(getComputedStyle(el).getPropertyValue(prop));
}