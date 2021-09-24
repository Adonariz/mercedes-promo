const menuLinks = document.querySelectorAll('.menu-list__link');
const mainScroll = document.querySelector('.main__scroll');
const linksArray = [...menuLinks, mainScroll];

linksArray.forEach(link => {
  link.addEventListener('click', (evt) => {
    evt.preventDefault();

    const ID = evt.target.getAttribute('href').substr(1);

    document.getElementById(ID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});