export function smoothScrollToHash(e, href, options = {}) {
  const { headerOffset = 80, duration = 2000 } = options;

  e.preventDefault();

  const targetId = href.replace(/.*#/, "");
  const targetElement = document.getElementById(targetId);

  if (!targetElement) return;

  const elementPosition = targetElement.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - headerOffset;
  const startPosition = window.scrollY;
  const distance = offsetPosition - startPosition;
  let start = null;

  const ease = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  };

  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = timestamp - start;

    window.scrollTo({ top: ease(progress, startPosition, distance, duration), behavior: "auto" });

    if (progress < duration) window.requestAnimationFrame(step);
  };

  window.requestAnimationFrame(step);
}
