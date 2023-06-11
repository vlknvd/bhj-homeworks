const text = document.getElementById('editor');
text.addEventListener('input', (e) => {
    localStorage.getItem('text');
    localStorage.text = e.target.value;
})
text.value = localStorage.getItem('text');