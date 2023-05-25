const showMore = document.querySelector('.show-more-btn');
const cardsLength = document.querySelectorAll('.podcasts__item').length;
let items = 8;

showMore.addEventListener('click', () => {
  items += 4;
  const array = Array.from(document.querySelector('.podcasts__list').children);
  const visibleItems = array.slice(0, items)

  visibleItems.forEach(el => el.classList.add('is-visible'));

  if (visibleItems.length === cardsLength) {
    showMore.style.display = 'none';
  }
});
