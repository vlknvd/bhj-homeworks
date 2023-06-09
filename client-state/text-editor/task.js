const text = document.getElementById('editor');
text.addEventListener('input', (e) => {
    localStorage.getItem('text');
    localStorage.text = e.target.value;
})
localStorage.getItem('text');
text.value = localStorage.text;