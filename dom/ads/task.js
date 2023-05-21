const rotator = document.querySelector('.rotator__case');
let currentRotator = rotator;
let previousRotator = rotator;

setInterval(() => {
    if (currentRotator.classList.contains('rotator__case_active')) {
        currentRotator = currentRotator.nextElementSibling;
        previousRotator = currentRotator.previousElementSibling;
        if(currentRotator.nextElementSibling === null) {
            currentRotator = rotator;
        }
        currentRotator.classList.add('rotator__case_active');
        previousRotator.classList.remove('rotator__case_active');
}
}, 1000);