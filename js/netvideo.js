const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView:2,
    slidesPerGroup:2,
    // Pagination 
    pagination: {
      el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }, 
    breakpoints: {
      500: {
        slidesPerView:3,
        slidesPerGroup:3,
      },
      800: {
        slidesPerView:4,
        slidesPerGroup:4,
      },
      1100: {
        slidesPerView:5,
        slidesPerGroup:5,
      },
      1400: {
        slidesPerView:6,
        slidesPerGroup:6,
      },
    }
  }); 

  const header = document.body.querySelector('.header');
  document.addEventListener('DOMContentLoaded',function () {
    if(header.getBoundingClientRect().top + window.pageYOffset == 0) {
        header.style.background = 'linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent)';
    }
  });

  window.addEventListener('scroll', function() {
    if(header.getBoundingClientRect().top + window.pageYOffset == 0) {
        header.style.background = 'linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent)';
    } else {
        header.style.background = '#141414';
    }
  });