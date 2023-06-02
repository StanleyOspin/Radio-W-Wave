let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav--top');
let menuLinks = menu.querySelectorAll('.header__link--top');
let btn = document.getElementById('shift__menu');


burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('nav--top--active');

    document.body.classList.toggle('stop-scroll');
})


burger.addEventListener('click', () => {

    let n = 'true' === burger.getAttribute('aria-expanded');
    burger.setAttribute('aria-expanded', !n),
      n
        ? burger.setAttribute('aria-label', 'Открыть навигацию')
        : burger.setAttribute('aria-label', 'Закрыть навигацию');
  })


menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('nav--top--active');

    document.body.classList.remove('stop-scroll');

    btn.ariaLabel = 'Открыть меню навигации';
  })
})
