const form = document.getElementById('signin__form');
const btn = document.getElementById('signin__btn');
const sign = document.getElementById('signin');
const welcome = document.getElementById('welcome');
btn.addEventListener('click', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.send(formData);
    xhr.addEventListener('load', () => {
        if(xhr.readyState === xhr.DONE ) {
            const response = Object.values(JSON.parse(xhr.response));
            if(response[0] === false){
                alert('Неверный логин/пароль')
            } else {
                sign.classList.remove('signin_active');
                welcome.classList.remove('welcome');
                welcome.classList.add('welcome__active');
                const user = document.getElementById('user_id');
                user.textContent = response[1];
                let storedName = localStorage.getItem('user');

                if(storedName){
                    const user = document.getElementById('user_id');
                    user.textContent = storedName;
                } else {
                    localStorage.setItem('user', response[1]);
                }
            }
        }
    })
})