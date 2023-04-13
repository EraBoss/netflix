const dbody = document.body;
const next = dbody.querySelector('.slider__next');
const prev = dbody.querySelector('.slider__prev');
const sLine = dbody.querySelector('.slider__line-content');
let offset = 0;
next.addEventListener('click',function (params) {
    offset -= sLine.clientWidth;
    if(offset < (-sLine.scrollWidth + sLine.clientWidth - sLine.clientWidth + 50)) {
        offset = 0;
    }
    sLine.style.left = offset + 'px';
})

prev.addEventListener('click',function (params) {
    offset += sLine.clientWidth;
    if(offset > sLine.clientWidth - 50) {
        offset = -sLine.scrollWidth + sLine.clientWidth;
    }
    sLine.style.left = offset + 'px';
})
console.log(-sLine.scrollWidth + sLine.clientWidth);
console.log((-sLine.scrollWidth + sLine.clientWidth - sLine.clientWidth/5 + 50));