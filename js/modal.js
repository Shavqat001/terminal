let modal = document.querySelector('.modal-language');
let blackScreen = document.querySelector('.black-screen');
let modalButton = document.querySelector('.main-header__lang');
let modalCloseButton = document.querySelector('.modal-language__button');
let modalItems = document.querySelectorAll('.modal-language__item');

modalButton.addEventListener('click', () => {
    modal.classList.add('modal-show');
    blackScreen.classList.remove('visually-hidden');
});

modalCloseButton.addEventListener('click', () => {
    modal.classList.remove('modal-show');
    blackScreen.classList.add('visually-hidden');
});

for (const item of modalItems) {
    item.addEventListener('click', () => {
        for (let i = 0; i < modalItems.length; i++) {
            modalItems[i].classList.remove('modal-language__item--selected');
        }
        item.classList.add('modal-language__item--selected');
    });
}