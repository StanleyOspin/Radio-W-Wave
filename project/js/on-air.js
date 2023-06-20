onAirBtn = document.querySelector('.wats-on-air-btn');
headerBotom = document.querySelector('.header__bottom');

onAirBtn.addEventListener('click', function() {
  onAirBtn.classList.toggle('wats-on-air-btn--open');
  headerBotom.classList.toggle('header__bottom--open');
});

window.addEventListener('click', e => { // при клике в любом месте окна браузера
  const target = e.target; // находим элемент, на котором был клик
  if (!target.closest('.wats-on-air-btn') && !target.closest('.header__bottom'))
   { // если этот элемент или его родительские элементы не окно навигации и не кнопка
    onAirBtn.classList.remove('wats-on-air-btn--open'); // то закрываем окно навигации, удаляя активный класс
    headerBotom.classList.remove('header__bottom--open');
  }
});
