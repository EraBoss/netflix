const signInInput = document.body.querySelector('.block-1__input')
const signInInputValue = (new URL(document.location)).searchParams.get('loginSignIn');
signInInput.value = signInInputValue;
const signLink = document.body.querySelector('.sign__learnMore');
const para2 = document.body.querySelector('.sign__para-2');
signLink.addEventListener('click', function (params) {
    params.target.style.display = 'none';
    para2.style.display = 'block';
})