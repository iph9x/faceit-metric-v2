export const changeThemeToDark = () => {
  document.documentElement.setAttribute('data-theme', 'dark');
  localStorage.setItem('data-theme', 'dark');
};

export const changeThemeToLight = () => {
  document.documentElement.setAttribute('data-theme', 'light');
  localStorage.setItem('data-theme', 'light');
};
