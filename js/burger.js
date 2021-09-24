const burger = document.querySelector('.humburger-menu');
const menuElem = document.querySelector('.menu');

function toggleMenu() {
  menuElem.classList.toggle('menu-active');
  burger.classList.toggle('humburger-menu-active');
}

burger.addEventListener('click', toggleMenu);

menuElem.addEventListener('click', (evt) => {
  const target = evt.target;

  if (target.classList.contains('menu-list__link')) {
    toggleMenu();
  }
});