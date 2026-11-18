export const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Scroll to an element and move keyboard focus to it (it needs tabIndex={-1}).
export function goTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: reducedMotion() ? "auto" : "smooth", block: "start" });
  el.focus({ preventScroll: true });
}

// For <a href="#x"> links: keep the href as a no-JS fallback, but also move focus.
export const linkTo = (id) => (e) => {
  e.preventDefault();
  goTo(id);
};
