document.addEventListener('click', function (params) {
    //language choose
    if(params.target.closest('.choose-language__buttton')) {
        params.target.closest('.choose-language__buttton').nextElementSibling.classList.toggle('list-active');
    }  
    if(!params.target.closest('.choose-language')){
        console.log('yeahah');
        document.body.querySelectorAll('.choose-language__list').forEach((el) => {
            el.classList.remove('list-active')
        })
    }
})