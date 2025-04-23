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

// Nav underline animation
const nav = document.querySelector('.nav .container');
const underline = document.querySelector('.nav-underline');
const links = document.querySelectorAll('.nav-list a');

function setUnderline(link) {
  const rect = link.getBoundingClientRect();
  const navRect = nav.getBoundingClientRect();
  underline.style.setProperty('--underline-width', `${rect.width}px`);
  underline.style.setProperty('--underline-left', `${rect.left - navRect.left}px`);
}

links.forEach(link => {
  link.addEventListener('mouseenter', () => setUnderline(link));
  link.addEventListener('mouseleave', () => {
    const active = document.querySelector('.nav-list a.active');
    if (active) setUnderline(active);
    else underline.style.setProperty('--underline-width', '0');
  });
});

// Initialize underline on load
window.addEventListener('load', () => {
  const active = document.querySelector('.nav-list a.active');
  if (active) setUnderline(active);
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
