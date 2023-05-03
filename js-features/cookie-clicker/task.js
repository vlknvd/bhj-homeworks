const image = document.getElementById('cookie');
const click = document.getElementById('clicker__counter');
image.onclick = function() {
    click.textContent++;
    image.width = (image.width === 200) ? 300 : 200;
}