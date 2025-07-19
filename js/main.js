// ---------- Highlight active nav link ----------
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('#navbar a');

  let current = '';
  sections.forEach(sec => {
    const secTop = sec.offsetTop;
    if (pageYOffset >= secTop - 100) current = sec.getAttribute('id');
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});
