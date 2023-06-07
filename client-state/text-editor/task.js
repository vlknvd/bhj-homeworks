const text = document.getElementById('editor');

text.addEventListener('input', (e) => {
    if(localStorage.text) {
        localStorage.text = JSON.stringify(e.target.value);
    } else {
        localStorage.setItem('text', JSON.stringify(e.target.value));
    }
})

if(localStorage.text){
    text.value = JSON.parse(localStorage.text);
} else {
    false;
}
