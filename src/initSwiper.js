const swiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  autoHeight: true,
  slidesPerView: 'auto',
  cssWidthAndHeight: true,
  visibilityFullFit: true,
  autoResize: false,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-control__next',
    prevEl: '.swiper-control__prev',
  },
});

export default swiper;
