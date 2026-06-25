document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
  );

  reveals.forEach((node) => observer.observe(node));

  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = form.querySelector('button');
    if (button) {
      button.textContent = 'Отправлено!';
      button.disabled = true;
    }
    setTimeout(() => {
      if (button) {
        button.textContent = 'Отправить';
        button.disabled = false;
      }
      form.reset();
    }, 1500);
  });
});
