var swiper = new Swiper('.swiper-container', {
    effect: 'fade',
    infinity: true,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: true,
      infinity: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
      infinity: true,
    },
    });