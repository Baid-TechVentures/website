// Scroll reveal: fades [data-reveal] elements in as they enter the viewport.
// data-delay (ms) staggers siblings. Without JS the content is simply visible.
(function () {
  const nodes = document.querySelectorAll('[data-reveal]');
  const show = (el) => {
    el.style.transitionDelay = (el.dataset.delay || 0) + 'ms';
    el.classList.add('is-revealed');
  };

  if (!('IntersectionObserver' in window)) {
    nodes.forEach(show);
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      show(e.target);
      io.unobserve(e.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });

  nodes.forEach((el) => io.observe(el));
})();
