const showMore = document.querySelector('.show-more-btn');
const cards = Array.from(document.querySelectorAll('.podcasts__item'));

window.addEventListener('resize', event => {
  if (event.target.window.innerWidth > 570) response1();
  else if (event.target.window.innerWidth <= 570)response2();
})


function openCatalog() {
  showMore.addEventListener('click', () => {
    cards.forEach(item => item.classList.remove('hidden'));
    showMore.classList.add('hidden');
  })
}

function response1() {
  if (window.innerWidth > 570) {
    showMore.classList.add('hidden');

    cards.forEach( (item, index) => {
      item.classList.add('hidden')
      if (index <= 7) {
        item.classList.remove('hidden')
      } else if (index > 7) {
        showMore.classList.remove('hidden');
      }
      openCatalog()
    })
  }
}

response1()

function response2() {
  if (window.innerWidth <= 570) {
    showMore.classList.add('hidden');

    cards.forEach( (item, index) => {
      item.classList.add('hidden')
      if (index <= 3) {
        item.classList.remove('hidden')
      } else if (index > 3) {
        showMore.classList.remove('hidden');
      }
      openCatalog()
    })
  }
}

response2()



