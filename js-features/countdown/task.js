const startTimer = document.getElementById('timer');

setInterval(() => {
    if(startTimer.textContent >= 1) {
        startTimer.textContent --;
    } else if (startTimer.textContent = '0') {
        alert('Вы победили в конкурсе!');
    }
}, 1000);
