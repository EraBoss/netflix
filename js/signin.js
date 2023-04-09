const signInInput = document.body.querySelector('.block-1__input');
const signInInputValue = (new URL(document.location)).searchParams.get('loginSignIn');
signInInput.value = signInInputValue;
const signLink = document.body.querySelector('.sign__learnMore');
const para2 = document.body.querySelector('.sign__para-2');
//learn more
signLink.addEventListener('click', function (params) {
    params.target.style.display = 'none';
    para2.style.display = 'block';
})
//input alerts
const signInputs = document.body.querySelectorAll('.block-1__input');
signInputs.forEach(el => {
    el.addEventListener('blur',function (params) {
        if (!el.value || el.value.length <= 4) {
            el.parentElement.lastElementChild.style.display = 'block';
            el.style.borderBottom = '2px solid #e87c03';
            if(el.type == 'text') {
                el.parentElement.lastElementChild.innerHTML = 'Please enter a valid email or phone number.';
            } else {
                el.parentElement.lastElementChild.innerHTML = 'Your password must contain between 4 and 60 characters.';
            }
        };
        el.addEventListener('input',function (params) {
            if(el.value.length <= 4) {
                el.parentElement.lastElementChild.style.display = 'block';
                el.style.borderBottom = '2px solid #e87c03';
                if(el.type == 'text') {
                    el.parentElement.lastElementChild.innerHTML = 'Please enter a valid email.';
                } else {
                    el.parentElement.lastElementChild.innerHTML = 'Your password must contain between 4 and 60 characters.';
                }
            } else {
                el.parentElement.lastElementChild.style.display = 'none';
                el.style.borderBottom = 'none';
            };
    })
    },{once:true})
});