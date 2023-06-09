const form = document.getElementById('signin__form');
const btn = document.getElementById('signin__btn');
const sign = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const user = document.getElementById('user_id');

btn.addEventListener('click', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.responseType = 'json';
    xhr.send(formData);
    xhr.addEventListener('load', () => {
        const response = Object.values(xhr.response);
        if(response[0] === false){
            alert('Неверный логин/пароль');
            return;
        }
        sign.classList.remove('signin_active');
        welcome.classList.remove('welcome');
        welcome.classList.add('welcome__active');
        user.textContent = response[1];
        localStorage.setItem('user', response[1]);
    })
})

let storedName = localStorage.getItem('user');
if(storedName){
    user.textContent = storedName;
    sign.classList.remove('signin_active');
    welcome.classList.remove('welcome');
    welcome.classList.add('welcome__active');
}