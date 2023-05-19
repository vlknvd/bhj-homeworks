const reveal = Array.from(document.querySelectorAll('.reveal'));
console.log(reveal);
function revealVisible(el) {
    el.forEach(element => { 
        const {top, bottom} = element.getBoundingClientRect();
        console.log(top, bottom);
        if(bottom > 0 && top < window.innerHeight) {
            element.classList.add('reveal_active');
        }
    })
}
setInterval(() => {
    revealVisible(reveal);
});
