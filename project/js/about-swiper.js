let swiper = new Swiper(".about-swiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 2.32,
      spaceBetween: 20,
    },

    440: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    1201: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  }
});
