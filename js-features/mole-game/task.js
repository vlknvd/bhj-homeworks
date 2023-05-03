const dead = document.getElementById('dead');
countDead = 0;
const lost = document.getElementById('lost');
countLost = 0;

function getHole(index) {
    return document.getElementById('hole' + index);
}

for (let i = 1; i < 9; i++) {
    const hole = getHole(i);
    hole.addEventListener('click', function() {
        if(hole.className.includes('hole_has-mole')){
            countDead++;
            dead.textContent = + countDead;
            if(countDead === 10) {
                alert('Вы победили');
                countLost = 0;
                lost.textContent = 0;
                countDead = 0;
                dead.textContent = 0;
            }
        } else {
            countLost++;
            lost.textContent = + countLost;
            if(countLost === 5) {
                alert('Вы проиграли');
                countLost = 0;
                lost.textContent = 0;
                countDead = 0;
                dead.textContent = 0;
            }
        }
    })
}