const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView:6,
    slidesPerGroup:6,
    spaceBetween:10,
    loopPreventsSliding:true,
    loopedSlides:1,
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  const header = document.body.querySelector('.header');
  console.log(header.getBoundingClientRect().top);
  document.addEventListener('DOMContentLoaded',function () {
    if(header.getBoundingClientRect().top + window.pageYOffset == 0) {
        header.style.background = 'linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent)';
    }
  })
  window.addEventListener('scroll', function() {
    if(header.getBoundingClientRect().top + window.pageYOffset == 0) {
        header.style.background = 'linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent)';
    } else {
        header.style.background = '#141414';
    }
  });