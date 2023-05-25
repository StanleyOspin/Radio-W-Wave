let tabsBtn = document.querySelectorAll('.tab-nav__btn');
let tabsBlock = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    tabsBtn.forEach(function (btn) { btn.classList.remove('tab-nav__btn--active') });
    e.currentTarget.classList.add('tab-nav__btn--active');

    tabsBlock.forEach(function (element) { element.classList.remove('tabs-item--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  })
})
