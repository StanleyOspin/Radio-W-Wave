document.getElementById('search__btn').addEventListener('click', function() {
  document.getElementById('search').classList.add('active')
});


window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.getElementById('search').classList.remove('active')
  }
});

window.addEventListener('click', e => { // при клике в любом месте окна браузера
  const target = e.target; // находим элемент, на котором был клик
  if (!target.closest('#search') && !target.closest('.header__btn-search'))
   { // если этот элемент или его родительские элементы не окно навигации и не кнопка
    document.getElementById('search').classList.remove('active') // то закрываем окно навигации, удаляя активный класс
  }
});
