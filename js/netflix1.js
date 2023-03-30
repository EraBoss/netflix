const dbody = document.body;
//spoller consts
const spollerContainer = dbody.querySelector('.block-6__spoller-container');
const spollerButtons = dbody.querySelectorAll('.block-6__spoller-button');
const spollerTexts = dbody.querySelectorAll('.block-6__spoller-text');
//language choose consts
const langButton = dbody.querySelector('.choose-language__buttton');
const langListItems = dbody.querySelectorAll('.choose-language__link');
console.log(langListItems[0]);
document.addEventListener('click', function (params) {
    //spoller
    if (params.target.closest('.block-6__spoller-button')) {
        if(params.target.nextElementSibling.style.maxHeight) {
            spollerTexts.forEach((el) => {
                el.style.maxHeight = null;
                el.style.padding = '0 24px';
                el.previousElementSibling.classList.remove('rotate');
            })
        } else {
            spollerTexts.forEach((el) => {
                el.style.maxHeight = null;
                el.style.padding = '0 24px';
                el.previousElementSibling.classList.remove('rotate');
            })
            params.target.nextElementSibling.style.padding = '24px';
            params.target.nextElementSibling.style.maxHeight = params.target.nextElementSibling.scrollHeight + 48 + 'px';
            params.target.classList.add('rotate');
        }
    };
})


 