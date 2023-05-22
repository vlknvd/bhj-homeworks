const rotator = document.querySelector('.rotator__case');
const parentRotator = document.querySelector('.rotator');
const activeRotator = document.querySelector('.rotator__case_active')
let currentRotator = rotator;
let previousRotator = rotator;

setInterval(() => {
    currentRotator === activeRotator;
    currentRotator.classList.remove('rotator__case_active');

    if(currentRotator.nextElementSibling) {
        currentRotator = currentRotator.nextElementSibling;
    } else {
        currentRotator = parentRotator.firstElementChild;
        previousRotator.classList.remove('rotator__case_active')
    }

    currentRotator.classList.add('rotator__case_active');
}, 1000);