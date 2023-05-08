const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownLink = Array.from(document.querySelectorAll('.dropdown__link'));

function openCloseList() {
    if(dropdownList.classList.contains('dropdown__list_active')){
        dropdownList.classList.remove('dropdown__list_active');
    } else {
        dropdownList.classList.add('dropdown__list_active');
    }
}

dropdownValue.addEventListener('click', openCloseList);

dropdownLink.forEach(function(item) {
    item.onclick = function(){
        dropdownValue.textContent = item.textContent;
        return false;
    }
    item.addEventListener('click', openCloseList)
});