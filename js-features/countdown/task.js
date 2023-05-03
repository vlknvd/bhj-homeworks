const startTimer = document.getElementById('timer');

let interval = setInterval(() => {
    if(startTimer.textContent >= 1) {
        startTimer.textContent --;
    } else if (startTimer.textContent === '0') {
        alert('Вы победили в конкурсе!');
        clearInterval(1);
    }
}, 1000);
