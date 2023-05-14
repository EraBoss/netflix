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
// принимает как аргумент секцию с каруселью и инициализирует его
const initSlider = function(newSwiperSlider) {
  // Находим карусель внутри секции
  let newSwiperElement  = newSwiperSlider.querySelector('.swiper')
  // Инициализируем новую карусель
  let newSwiper = new Swiper(newSwiperElement, {
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
};

// async function wait(second) {
//   return new Promise(function(resolve) {
//     setTimeout(resolve, second * 1000)
//   })
// }

// (async function() {
//   await wait(3)
//   console.log('era');
// }())

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
    } else {
      header.style.background = '#141414';
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

let mouseOnSlide = false;
// slider slide hover effect 
document.addEventListener('mouseover',function (params) {
  if (params.target.closest('.slider-slide__container')) {
    if(!mouseOnSlide) {
      mouseOnSlide = true;
      // z-index at hover
      setTimeout(()=> {
        params.target.closest('.slider-slide__content').classList.add('z-index-3');
      },300)
      // hover effect with classes
      params.target.closest('.slider-slide__content').classList.remove('slide-content-hover_left','slide-content-hover_right');
      params.target.closest('.slider-slide__content').classList.add('slide-content-hover');
      // slide description hover effect
      params.target.closest('.slider-slide__content').querySelector('.slider-slide__description-container').style.maxHeight = params.target.closest('.slider-slide__content').querySelector('.slider-slide__description-container').scrollHeight + 32 + 'px';
      // left and right slide hover
      if(params.target.closest('.slider-slide__content').getBoundingClientRect().left < 100) {
        params.target.closest('.slider-slide__content').classList.add('slide-content-hover_left');
      } else if (params.target.closest('.slider-slide__content').getBoundingClientRect().right > document.documentElement.clientWidth - 100) {
        params.target.closest('.slider-slide__content').classList.add('slide-content-hover_right');
      };
    }
  };
});
// lose hover class
document.addEventListener('mouseout',function (params) {
  if (params.target.closest('.slider-slide__content') && !params.target.closest('.slider-slide__content').contains(params.relatedTarget)) {
    mouseOnSlide = false;
    // z-index lose
    setTimeout(()=> {
      params.target.closest('.slider-slide__content').classList.remove('z-index-3');
    },300)
    // lose hover effect
    params.target.closest('.slider-slide__content').classList.remove('slide-content-hover');
    params.target.closest('.slider-slide__content').querySelector('.slider-slide__description-container').style.maxHeight = 0;
  };
});

// Content load at scroll
let scrollSliders = document.querySelector('.main__scroll-sliders');
let page = 0;
let isLoading = false;

const loadContent = async function() {
    if (!isLoading && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        await getContent();
    }
};

const getContent = async function() {
    try {
        isLoading = true;
        const response = await fetch('sourceSliders.html');
        if(response.ok) {
            const html = await response.text();
            const doc = new DOMParser().parseFromString(html, 'text/html');
            const items = doc.querySelectorAll('.slider-section');
            if(page == items.length) {
                window.removeEventListener('scroll', loadContent)
            };
            if(page < items.length) {
              let newSlider = items[page]
              scrollSliders.insertAdjacentElement('beforeend',newSlider); 
              initSlider(newSlider);  
            };
            page++;
        };
        isLoading = false;
    } catch(err) {
        console.log(err);
        let storedSlidersArray = JSON.parse(localStorage.getItem('slidersArray'));
        let div = document.createElement('div');
        storedSlidersArray.forEach(element => {
            div.innerHTML += element;
        });
        let items = div.querySelectorAll('.slider-section');
        if(page == items.length) {
            window.removeEventListener('scroll', loadContent)
        };
        if(page < items.length) {
          let newSlider = items[page]
          scrollSliders.insertAdjacentElement('beforeend',newSlider); 
          initSlider(newSlider);  
        };
        page++;
        isLoading = false;
    }
};

window.addEventListener('scroll',loadContent);




   