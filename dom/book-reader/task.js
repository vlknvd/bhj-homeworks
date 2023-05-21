const fontSize = Array.from(document.querySelectorAll('.font-size'));
const book = document.getElementById('book');

fontSize.forEach(item => {
    item.addEventListener('click', function(event){
        event.preventDefault();
        const activeEl = document.querySelector('.font-size_active');
        if (activeEl !== this) {
            activeEl.classList.remove('font-size_active');
            this.classList.add('font-size_active');
        }
        
        if(this.dataset.size === 'small') {
            book.classList.add('book_fs-small');
        } 

        if(this.dataset.size === 'big') {
            book.classList.remove('book_fs-small');
            book.classList.add('book_fs-big');
        }

        if(this.dataset.size === undefined) {
            book.classList.remove('book_fs-small');
            book.classList.remove('book_fs-big')
        }
    })
})