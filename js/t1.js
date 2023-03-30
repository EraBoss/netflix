const dbody = document.body;
const q1 = dbody.querySelector('.spollers-rod');
const q2 = dbody.querySelector('.spoller');
const q3 = dbody.querySelectorAll('.spoller__button');
const q4 = dbody.querySelectorAll('.spoller__hidden');

const q5 = Array.from(q4);
const q6 = dbody.querySelector('.spoller__button::before')



q1.addEventListener('click',function (params) {
    if(params.target.closest('.spoller__button') !== null) {
        console.log('yeah!');
        if (params.target.nextElementSibling.style.maxHeight) {
            q4.forEach((el) => {
                el.style.maxHeight = null;
                el.previousElementSibling.classList.remove('rotate');
            })
            
        } else {
            q4.forEach((el) => {
                el.style.maxHeight = null;
                el.previousElementSibling.classList.remove('rotate');
            });
            params.target.nextElementSibling.style.maxHeight = params.target.scrollHeight + 'px';
            params.target.classList.add('rotate');
        }
    } 
});




  
