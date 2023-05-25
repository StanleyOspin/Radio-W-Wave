document.getElementById('search__btn').addEventListener('click', function() {
  document.getElementById('search').classList.add('active')
});


window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.getElementById('search').classList.remove('active')
  }
});

document.querySelector('#search').addEventListener('click', event => {
  event._isClickWithInSearch = true;
});

document.getElementById('search').addEventListener('click', event => {
  if (event._isClickWithInSearch) return;
  event.currentTarget.classList.remove('active');
});
