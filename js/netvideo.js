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
  //adaptive
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
    // adaptive
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

  // changes on click to document
  document.addEventListener('click', function (params) {
    // menu burger
    if(params.target.closest('.header__browse-burger-menu')) {
      params.target.closest('.header__browse-burger-menu').nextElementSibling.classList.toggle('burger-active');
    } else {
      document.querySelector('.header__burger-nav').classList.remove('burger-active');
    };
  });
  // header 
  const header = document.body.querySelector('.header');
  // header loaded background
  document.addEventListener('DOMContentLoaded',function () {
    if(header.getBoundingClientRect().top + window.pageYOffset == 0) {
        header.style.background = 'linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent)';
    } else {
      header.style.background = '#141414';
    };
  });
  // change header background at scroll
  window.addEventListener('scroll', function() {
    if(header.getBoundingClientRect().top + window.pageYOffset == 0) {
        header.style.background = 'linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent)';
    } else {
        header.style.background = '#141414';
    };
  });

// slider slide hover effect 
let mouseOnSlide = false;
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

// Content load at scroll// Content load at scroll
let scrollSliders = document.querySelector('.main__scroll-sliders');
let page = 0;
let second = 0;
let isLoading = false;
let genres = ['scifi', 'war%2Cdrama', 'romance%2Ccomedy', 'action'];
let genresTitle = ['Scifi', 'War Drama', 'Romance Comedy', 'Action'];

const loadContent = async function(htmlElement) {
    if (!isLoading && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        isLoading = true;
        await getContent(htmlElement);
        isLoading = false;
    }
};

const getContent = async function(htmlElement) {
    if (second === genres.length) {
        window.removeEventListener('scroll', scrollHandler);
        return;
    }

    console.log('Loading content...');
    const url = `https://streaming-availability.p.rapidapi.com/shows/search/filters?country=gb&series_granularity=show&genres=${genres[page]}&genres_relation=and&output_language=en&show_type=movie`;
    page++;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '413491b2ccmshcdc12a0a9290a34p1cd0e4jsne4fdc56e6d56',
            'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        function generateSlideElement(currentSlide) {
            const slideElement = document.createElement('div');
            slideElement.className = 'swiper-slide slider-slide';

            slideElement.innerHTML = `
                <div class="slider-slide__height">
                    <div class="slider-slide__content">
                        <div class="slider-slide__container">
                            <div class="slider-slide__title">
                                <img src="${currentSlide.imageSet.horizontalPoster.w720}" alt="">
                            </div>
                            <section class="slider-slide__description">
                                <div class="slider-slide__description-container">
                                    <div class="slider-slide__description-buttons-section">
                                        <div class="slider-slide__description-left-buttons">
                                            <button class="slider-slide__description-button">
                                                <div class="buttons-svg-cont">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard" data-name="Play">
                                                        <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path>
                                                    </svg>
                                                </div>
                                            </button>
                                            <button class="slider-slide__description-button slider-slide__description-button_border-color">
                                                <div class="buttons-svg-cont">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard" data-name="Add">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor"></path>
                                                    </svg>
                                                </div>
                                            </button>
                                            <button class="slider-slide__description-button slider-slide__description-button_border-color">
                                                <div class="buttons-svg-cont">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard" data-name="RateUp">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.696 8.7732C10.8947 8.45534 11 8.08804 11 7.7132V4H11.8377C12.7152 4 13.4285 4.55292 13.6073 5.31126C13.8233 6.22758 14 7.22716 14 8C14 8.58478 13.8976 9.1919 13.7536 9.75039L13.4315 11H14.7219H17.5C18.3284 11 19 11.6716 19 12.5C19 12.5929 18.9917 12.6831 18.976 12.7699L18.8955 13.2149L19.1764 13.5692C19.3794 13.8252 19.5 14.1471 19.5 14.5C19.5 14.8529 19.3794 15.1748 19.1764 15.4308L18.8955 15.7851L18.976 16.2301C18.9917 16.317 19 16.4071 19 16.5C19 16.9901 18.766 17.4253 18.3994 17.7006L18 18.0006L18 18.5001C17.9999 19.3285 17.3284 20 16.5 20H14H13H12.6228C11.6554 20 10.6944 19.844 9.77673 19.5382L8.28366 19.0405C7.22457 18.6874 6.11617 18.5051 5 18.5001V13.7543L7.03558 13.1727C7.74927 12.9688 8.36203 12.5076 8.75542 11.8781L10.696 8.7732ZM10.5 2C9.67157 2 9 2.67157 9 3.5V7.7132L7.05942 10.8181C6.92829 11.0279 6.72404 11.1817 6.48614 11.2497L4.45056 11.8313C3.59195 12.0766 3 12.8613 3 13.7543V18.5468C3 19.6255 3.87447 20.5 4.95319 20.5C5.87021 20.5 6.78124 20.6478 7.65121 20.9378L9.14427 21.4355C10.2659 21.8094 11.4405 22 12.6228 22H13H14H16.5C18.2692 22 19.7319 20.6873 19.967 18.9827C20.6039 18.3496 21 17.4709 21 16.5C21 16.4369 20.9983 16.3742 20.995 16.3118C21.3153 15.783 21.5 15.1622 21.5 14.5C21.5 13.8378 21.3153 13.217 20.995 12.6883C20.9983 12.6258 21 12.5631 21 12.5C21 10.567 19.433 9 17.5 9H15.9338C15.9752 8.6755 16 8.33974 16 8C16 6.98865 15.7788 5.80611 15.5539 4.85235C15.1401 3.09702 13.5428 2 11.8377 2H10.5Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                        </button>
                                    </div>
                                    <div class="slider-slide__description-right-buttons">
                                        <button class="slider-slide__description-button slider-slide__description-button_border-color">
                                            <div class="buttons-svg-cont">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard" data-name="ChevronDown">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z" fill="currentColor"></path>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div class="slider-slide__description-metadata-cont">
                                <span class="slider-slide__metadata-match-score">${currentSlide.rating}% Match</span>
                                <div class="slider-slide__metadata-second-line">
                                    <span class="slider-slide__maturity-namber code-button">18+</span>
                                    <span class="slider-slide__title-duration">6 Seasons</span>
                                    <span class="slider-slide__title-quality code-button">HD</span>
                                </div>
                            </div>
                            <div class="slider-slide__description-metadata-tags">
                                <span class="slider-slide__description-genre">${currentSlide.genres[0].name}</span>                                 
                            </div>   
                        </div>                                                                  
                    </section>
                </div>
            </div>
        </div>
        `;
            return slideElement;
        }

        function generateSlider() {
            const sliderElement = document.createElement('div');
            sliderElement.className = 'slider-section';
            sliderElement.innerHTML = `
            <h2 class="slider-theme"><a href="">${genresTitle[second]}</a></h2>
            <div class="swiper slider">
                <div class="swiper-pagination slider-pagination"></div>                   
                <div class="swiper-wrapper slider-wrapper sliderNumber${second}"></div>
                <div class="swiper-button-prev slider-button-prev"></div>
                <div class="swiper-button-next slider-button-next"></div> 
            </div>`;
            return sliderElement;
        }

        const slider = generateSlider();
        let arr = Object.values(result.shows);
        arr.forEach(element => {
            let slide = generateSlideElement(element);
            slider.querySelector('.swiper-wrapper').appendChild(slide);
        });

        if (second < genres.length) {
            htmlElement.insertAdjacentElement('beforeend', slider);
        }

        let items = document.body.querySelectorAll('.slider-section');
        initSlider(items[second + 3]);
        second++;
    } catch (err) {
        console.log(err);
    }
};

// Обертываем loadContent, чтобы передать htmlElement
const scrollHandler = () => loadContent(scrollSliders);

// Используем обертку для добавления обработчика события
window.addEventListener('scroll', scrollHandler);
