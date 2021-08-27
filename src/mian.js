const toggleThemeButton = document.querySelector('#toggle-theme');
const root = document.firstElementChild;

window.onload = () => {
  const savedTheme = localStorage.getItem('THEME');
  root.setAttribute('color-scheme', savedTheme ?? 'dark');
};

toggleThemeButton.addEventListener('click', () => {
  const currentTheme = root.getAttribute('color-scheme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  root.setAttribute('color-scheme', newTheme);
});