const modalBtns = document.querySelectorAll('.more');
const modal = document.querySelector('.modal');

modalBtns.forEach(btn => {
  btn.addEventListener('click', (evt) => {
    evt.preventDefault();
  
    modal.classList.remove('hidden');
  });
});

modal.addEventListener('click', (evt) => {
  const target = evt.target;

  if (target.classList.contains('modal__close') || target.classList.contains('overlay')) {
    modal.classList.add('hidden');
  }
});