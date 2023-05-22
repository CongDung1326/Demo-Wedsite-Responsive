const toggleBtn = document.querySelector('.menu__toggle');
const iconBtn = document.querySelector('.menu__toggle i');
const menuDropDown = document.querySelector('.menu__dropdown');

toggleBtn.addEventListener('click', function () {
    menuDropDown.classList.toggle('open');

    // Kiểm tra xem nếu thằng menuDropDown đã add thêm thằng open thì ta đổi icon
    const isOpen = menuDropDown.classList.contains('open');
    iconBtn.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
})

// Viết thêm cho button Tìm hiểu thêm 
const btnContact = document.querySelector('.content__welcome .btn__contact button:first-child');
const textContact = document.querySelector('.text__contact');
const closeText = document.querySelector('.text__close i');

btnContact.addEventListener('click', () => {
    textContact.classList.add('open__text');
});

closeText.addEventListener('click', () => {
    textContact.classList.remove('open__text');
});