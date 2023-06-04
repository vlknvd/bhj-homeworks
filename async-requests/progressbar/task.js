document.forms.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
        xhr.upload.addEventListener('progress', (event) => {
            const progress = document.getElementById('progress');
            progress.value = event.loaded / event.total;
        })
    })

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    const formData = new FormData(document.forms.form);
    xhr.send(formData);

})