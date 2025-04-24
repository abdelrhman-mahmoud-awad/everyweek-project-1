// Dark‑mode toggle
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? '' : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  toggle.innerHTML = theme ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';

  // Update hamburger color based on theme
  const hamburger = document.querySelector('.hamburger');
  hamburger.style.color = theme ? 'var(--clr-text)' : 'var(--clr-primary)';
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
  navList.classList.toggle('active');
});

window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});
