const reveal = Array.from(document.querySelectorAll('.reveal'));
console.log(reveal);
function revealVisible() {
    reveal.forEach(element => { 
        const {top, bottom} = element.getBoundingClientRect();
        console.log(top, bottom);
        if(bottom > 0 && top < window.innerHeight) {
            element.classList.add('reveal_active');
        }
    })
}
window.addEventListener('scroll', revealVisible);