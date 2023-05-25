document.getElementById('open-modal-btn').addEventListener('click', function() {
  document.getElementById('header-modal').classList.add('open')
});

document.getElementById('modal__close-btn').addEventListener('click', function() {
  document.getElementById('header-modal').classList.remove('open')
});

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.getElementById('header-modal').classList.remove('open')
  }
});

document.querySelector('#header-modal .modal__wrapper').addEventListener('click', event => {
  event._isClickWithInModal = true;
});

document.getElementById('header-modal').addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
});
