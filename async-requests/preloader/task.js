let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE) {
        let xhrResponse = JSON.parse(xhr.responseText).response['Valute'];

        let valueObj = Object.values(xhrResponse);
        valueObj.forEach(element => {
            const code = document.createElement('div');
            code.classList.add('item__code');
            code.innerText = element.CharCode;

            const value = document.createElement('div');
            value.classList.add('item__value');
            value.innerText = element.Value;

            const currency = document.createElement('div');
            currency.classList.add('item__currency');
            currency.textContent = 'руб.'

            const item = document.getElementById('items');
            item.append(code, value, currency);
        })
        const img = document.getElementById('loader');
        img.classList.remove('loader_active');
    }
})