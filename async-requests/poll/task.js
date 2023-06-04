let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE) {
        let xhrResponse = JSON.parse(xhr.response).data;

        const pollTitle = document.getElementById('poll__title');
        pollTitle.innerText = xhrResponse.title;

        let objValue = Object.values(xhrResponse.answers);
        objValue.forEach( el => {
            const pollAnswers = document.getElementById('poll__answers');
            const btn = document.createElement('button');
            btn.classList.add('poll__answer');
            pollAnswers.append(btn)
            btn.innerText = el;

            const btnResponse = Array.from(document.querySelectorAll('.poll__answer'));
            btnResponse.forEach(item => {
                item.onclick = function() {
                    alert('Спасибо, ваш голос засчитан!')
                }
        })
    })
    }
})
xhr.send();