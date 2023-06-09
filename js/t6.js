const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView:6,
    slidesPerGroup:6,
    spaceBetween:10,
    //spaceVetween: 800,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });