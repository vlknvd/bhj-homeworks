const tab = Array.from(document.getElementsByClassName('tab'));
const tabContent = Array.from(document.getElementsByClassName('tab__content'));

tab.forEach(item => {
    item.onclick = function() {
        for (let i = 0; i < tab.length; i++) {
            tab[i].className = 'tab';
        }
        for (let i = 0; i < tabContent.length; i++) {
            tabContent[i].className = 'tab__content';
        }

        let index = tab.indexOf(this);
        tab[index].classList = 'tab tab_active';
        tabContent[index].classList = 'tab__content tab__content_active';
    }
})