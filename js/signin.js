const loginInput = document.body.querySelector('.block-1__login');
const loginInputValue = (new URL(document.location)).searchParams.get('loginSignIn');
loginInput.value = loginInputValue;
const signLink = document.body.querySelector('.sign__learnMore');
const para2 = document.body.querySelector('.sign__para-2');
const mainSignInButton = document.querySelector('.block-1__button-link');
const passwordInput = document.querySelector('.block-1__password');
//learn more
signLink.addEventListener('click', function (params) {
    params.target.style.display = 'none';
    para2.style.display = 'block';
});
//main sign in button link
mainSignInButton.addEventListener('click', function(event) {
    event.preventDefault();
    const trigerEvent = new Event('blur', {bubbles: true});
    loginInput.dispatchEvent(trigerEvent);
    passwordInput.dispatchEvent(trigerEvent);
    if(loginInput.value.length > 4 && loginInput.value.includes('@') && loginInput.value.includes('.') && passwordInput.value.length > 4) {
        location.href = 'netvideo.html'
    }
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