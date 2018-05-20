let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let selectPlanButtons = document.querySelectorAll('.plan button');
let modalNoButton = document.querySelector('.modal__action--negative');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');

selectPlanButtons.forEach((i) => {
  i.addEventListener('click', () => {
    modal.classList.add('open');
    backdrop.style.display = 'block';
    setTimeout(() => {
      backdrop.classList.add('open');
    }, 10);
  });
});

backdrop.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener('click', closeModal);
}

function closeModal() {
  if (modal) {
    modal.classList.remove('open');
  }
  backdrop.classList.remove('open');
  setTimeout(() => {
    backdrop.style.display = 'none';
  }, 200);
}

toggleButton.addEventListener('click', () => {
  mobileNav.classList.add('open');
  backdrop.style.display = 'block';
  setTimeout(() => {
    backdrop.classList.add('open');
  }, 10);
});