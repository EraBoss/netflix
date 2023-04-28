const dbody = document.body;
//spoller consts
const spollerContainer = dbody.querySelector('.block-6__spoller-container');
const spollerButtons = dbody.querySelectorAll('.block-6__spoller-button');
const spollerTexts = dbody.querySelectorAll('.block-6__spoller-text');
//input email consts
const inputsEmail = dbody.querySelectorAll('.block-1__input');
spollerContainer.addEventListener('click', function (params) {
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
            params.target.nextElementSibling.style.maxHeight = params.target.nextElementSibling.scrollHeight + 300 + 'px';
            params.target.classList.add('rotate');
        }
    };
    // get started button
    if (params.target.closest('.block-1__button-link')) {
        if(!params.target.previousElementSibling.firstElementChild.value) {
            params.target.previousElementSibling.firstElementChild.focus();
        }
    }
});
document.addEventListener('click', function (params) {
    if (params.target.closest('.block-1__button-link')) {
        if(!params.target.previousElementSibling.firstElementChild.value) {
            params.target.previousElementSibling.firstElementChild.focus();
        }
        let el = params.target.previousElementSibling.firstElementChild;
        if(el.value.length > 4 && (el.value.includes('@') && el.value.includes('.'))) {
            location.href = 'signin.html?loginSignIn=' + params.target.previousElementSibling.firstElementChild.value;
        }
    }
})
inputsEmail.forEach((el)=> el.addEventListener('change', function (params1) {
    if(el.value.length <= 4) {
        el.parentElement.lastElementChild.style.display = 'flex';
        el.style.border = '1px solid red';
        el.parentElement.lastElementChild.lastElementChild.innerHTML = 'Email is required!';
    } else if(el.value.length > 4 && !(el.value.includes('@') && el.value.includes('.'))) {
        el.parentElement.lastElementChild.style.display = 'flex';
        el.style.border = '1px solid red';
        el.parentElement.lastElementChild.lastElementChild.innerHTML = 'Please enter valid email adress';
    } else {
        el.parentElement.lastElementChild.style.display = 'none';
        el.style.border = '1px solid green';
    }
    el.addEventListener('input', function (params2) {
        if(el.value.length <= 4) {
            el.parentElement.lastElementChild.style.display = 'flex';
            el.style.border = '1px solid red';
            el.parentElement.lastElementChild.lastElementChild.innerHTML = 'Email is required!'
        } else if(el.value.length > 4 && !(el.value.includes('@') && el.value.includes('.'))) {
            el.parentElement.lastElementChild.style.display = 'flex';
            el.style.border = '1px solid red';
            el.parentElement.lastElementChild.lastElementChild.innerHTML = 'Please enter valid email adress';
        } else {
            el.parentElement.lastElementChild.style.display = 'none';
            el.style.border = '1px solid green';
        }
    })
},{once:true}))


 