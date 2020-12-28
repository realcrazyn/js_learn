function modal() {
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        tabsButton = document.querySelectorAll('.description-btn');
    //console.log(tabsButton);


    function modalWindow(start, overlay, close) {

        start.addEventListener('click', function () {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });

        close.addEventListener('click', function () {
            overlay.style.display = 'none';
            start.classList.remove('more-splash');
            document.body.style.overflow = '';
        });
    }



    modalWindow(more, overlay, close);
    modalWindow(tabsButton[0], overlay, close);
    modalWindow(tabsButton[1], overlay, close);
    modalWindow(tabsButton[2], overlay, close);
    modalWindow(tabsButton[3], overlay, close);
}

module.exports = modal;