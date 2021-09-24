const lists = document.querySelectorAll('.feature-sub');
const buttons = document.querySelectorAll('.feature__link');

buttons.forEach((btn, index) => {
  btn.addEventListener('click', (evt) => {
    if (btn.classList.contains('feature__link_active')) {
      btn.classList.remove('feature__link_active');
      lists[index].classList.add('hidden');
    } else {
      buttons.forEach(btn => {
        btn.classList.remove('feature__link_active');
      });
  
      lists.forEach((listItem) => {
        listItem.classList.add('hidden');
      });
  
      btn.classList.add('feature__link_active');
      lists[index].classList.remove('hidden');
    }
  });
});