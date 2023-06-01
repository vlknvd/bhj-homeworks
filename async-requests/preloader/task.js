let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

const code = document.createElement('div');
code.classList.add('item__code');

const value = document.createElement('div');
value.classList.add('item__value');

const currency = document.createElement('div');
currency.classList.add('item__currency');

const item = document.getElementById('items');
item.append(code, value, currency);

const img = document.getElementById('loader');

xhr.addEventListener('readystatechange', () => {

    if(xhr.readyState == 4) {
        xhr.onreadystatechange = null;
    }

    if(xhr.status == 200) {
        let xhrResponse = JSON.parse(xhr.responseText).response['Valute'];
console.log(xhrResponse)
        code.innerHTML = xhrResponse.AUD.CharCode;
        value.innerHTML = xhrResponse.AUD.Value;

        // console.log(code)
        // if(xhr.response === xhr.DONE) {
        //     img.classList.remove('loader_active')
        // }
    }
})