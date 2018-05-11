let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let selectPlanButtons = document.querySelectorAll('.plan button');
let close = document.querySelector('button.modal__action--negative');

selectPlanButtons.forEach((i) => {
  i.addEventListener('click', () => {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
  });
});

close.addEventListener('click', () => {
  modal.style.display = 'none';
  backdrop.style.display = 'none';
});