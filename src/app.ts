const hamburgerMenuButton = document.getElementById('menu-hamburger');
const closeMobileSidebarButton = document.getElementById(
  'close-mobile-sidebar'
);
const toggleThemeButton = document.getElementById('toggle-theme');

hamburgerMenuButton.addEventListener('click', () => {
  document.getElementById('mobile-sidebar').classList.add('open');
  document.querySelector('.backdrop').classList.add('visible');
  document.body.classList.add('no-scroll');
});

closeMobileSidebarButton.addEventListener('click', () => {
  document.getElementById('mobile-sidebar').classList.remove('open');
  document.body.classList.remove('no-scroll');
  document.querySelector('.backdrop').classList.remove('visible');
});

enum Theme {
  LIGHT_MOED = 'theme-light',
  DARK_MOED = 'theme-dark',
}
toggleThemeButton.addEventListener('click', () => {
  const currentMode = document.body.classList[0];
  const newMode =
    currentMode === Theme.LIGHT_MOED ? Theme.DARK_MOED : Theme.LIGHT_MOED;
  document.body.classList.replace(currentMode, newMode);
});
