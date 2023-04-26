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
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
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
    },
  }); 
  // changes on click to document
  document.addEventListener('click', function (params) {
    // menu burger
    if(params.target.closest('.header__browse-burger-menu')) {
      params.target.closest('.header__browse-burger-menu').nextElementSibling.classList.toggle('burger-active');
    } else {
      document.querySelector('.header__burger-nav').classList.remove('burger-active');
    };
  });

  const header = document.body.querySelector('.header');
  // header loaded background
  document.addEventListener('DOMContentLoaded',function () {
    if(header.getBoundingClientRect().top + window.pageYOffset == 0) {
        header.style.background = 'linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent)';
    };
  });
  // header background change  at scroll
  window.addEventListener('scroll', function() {
    if(header.getBoundingClientRect().top + window.pageYOffset == 0) {
        header.style.background = 'linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent)';
    } else {
        header.style.background = '#141414';
    };
  });

// slider slide hover effect 
document.addEventListener('mouseover',function (params) {
  if (params.target.closest('.slider-slide__content')) {
    params.target.closest('.slider-slide__content').classList.add('slide-content-hover');
    if(params.target.closest('.slider-slide__content').getBoundingClientRect().left < 100) {
      params.target.closest('.slider-slide__content').classList.add('slide-content-hover_left');
    } else if (params.target.closest('.slider-slide__content').getBoundingClientRect().right > document.documentElement.clientWidth - 100) {
      params.target.closest('.slider-slide__content').classList.add('slide-content-hover_right');
    };
  }
});
document.addEventListener('mouseout',function (params) {
  if (params.target.closest('.slider-slide__content')) {
    params.target.closest('.slider-slide__content').classList.remove('slide-content-hover');
    params.target.closest('.slider-slide__content').classList.remove('slide-content-hover_left');
    params.target.closest('.slider-slide__content').classList.remove('slide-content-hover_right');
  }
})
  