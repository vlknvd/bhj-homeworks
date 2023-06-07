document.addEventListener('DOMContentLoaded', () => {
    if(document.cookie !== "popupOpen=true") {
        const popup = document.getElementById('subscribe-modal');
        popup.classList.add('modal_active');
        document.querySelector('.modal__close').addEventListener('click', () => {
            popup.classList.remove('modal_active');
            document.cookie = "popupOpen = true";
    });
    }
})