const toggle = document.getElementById('theme-toggle');

function setTheme(theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark);
toggle.textContent = theme === 'dark' ? 'Light' : 'Dark';
}

const saved = localStorage.getItem('theme');
if (saved) setTheme(saved);

toggle.addEventListener("click", (event) => {
  const next = document.documentElement.classList.contains('dark) ? 'light' : 'dark';
    setTheme(next);
  localStorage.setItem('theme, next);
});

ScrollReveal().reveal('section', { origin: 'bottom', distance: '50px', duration: 800, delay: 100 });
