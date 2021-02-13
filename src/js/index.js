(() => {
  const menuButton = document.querySelector('.menu-button');
  const nav = document.querySelector('.nav');

  menuButton.addEventListener('click', () => {
    let expanded = menuButton.getAttribute('aria-expanded') === 'true';

    menuButton.setAttribute('aria-expanded', !expanded);
    menuButton.setAttribute(
      'aria-label',
      expanded ? 'Open menu' : 'Close menu'
    );
    menuButton.classList.toggle('menu-button--active');
    nav.classList.toggle('nav--open');
  });
})();
