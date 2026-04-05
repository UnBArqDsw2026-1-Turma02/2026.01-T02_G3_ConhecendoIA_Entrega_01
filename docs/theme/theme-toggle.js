const toggleBtn = document.getElementById('theme-toggle');
const themeStyle = document.getElementById('theme-css');
// Checa localStorage para lembrar a preferencia de tema do usuario
const currentTheme = localStorage.getItem('theme') || 'dark';

function setTheme(mode) {
  if (mode === 'light') {
    themeStyle.href = 'https://cdn.jsdelivr.net/npm/docsify-themeable@0/dist/css/theme-simple.css';
    document.documentElement.classList.add('light-mode');
    localStorage.setItem('theme', 'light');
  } else {
    themeStyle.href = 'https://cdn.jsdelivr.net/npm/docsify-themeable@0/dist/css/theme-simple-dark.css';
    document.documentElement.classList.remove('light-mode');
    localStorage.setItem('theme', 'dark');
  }
}

setTheme(currentTheme);

toggleBtn.addEventListener('click', () => {
  const mode = document.documentElement.classList.contains('light-mode') ? 'dark' : 'light';
  setTheme(mode);
});
