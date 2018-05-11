let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let selectPlanButtons = document.querySelectorAll('.plan button');
let modalNoButton = document.querySelector('button.modal__action--negative');

selectPlanButtons.forEach((i) => {
  i.addEventListener('click', () => {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
  });
});

backdrop.addEventListener('click', closeModal);
modalNoButton.addEventListener('click', closeModal);

function closeModal() {
  backdrop.style.display = 'none';
  modal.style.display = 'none';
}