const fontSize = Array.from(document.querySelectorAll('.font-size'));
const bookSize = document.querySelector('.book__content');
const bookControl = document.querySelector('.book__control_font-size');
console.log(bookControl)
// for (let i = 0; i < fontSize.length; i++) {
//     fontSize[i].addEventListener('click', function() {
//         if (fontSize[i].classList.contains('font-size_active')) {
//             fontSize[i].classList.remove('font-size_active');
//         } else {
//             bookSize.forEach(el => {
                
//             })
//             fontSize[i].classList.add('font-size_active');
//         }
//     })
    
// }

bookControl.addEventListener('click', () => {
    this.setAttribute('font-size','font-size_active')
})
      