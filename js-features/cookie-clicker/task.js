const image = document.getElementById('cookie');
const click = document.getElementById('clicker__counter');
count = 0;
image.addEventListener('click', function(){
    count++;
    click.textContent = + count;
});
window.onload = function() {
    var image = document.getElementById('cookie');
    var click = 0;
    image.onclick = function() {
        if (click === 0) {
            this.style.width = '300px';
            click = 1;
        } else if (click === 1) {
            this.style.width = '200px';
            click = 0;
        }
    }
}