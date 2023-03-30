const dbody = document.body;
const q1 = dbody.querySelector('.menu-button')

document.documentElement.addEventListener('click' , function (params) {
    if (params.target.closest('.menu-button')) {
        q1.classList.toggle('active');
        q1.nextElementSibling.classList.toggle('list-active') ;
    } else {
        q1.classList.remove('active');
        q1.nextElementSibling.classList.remove('list-active') ;
    }
})