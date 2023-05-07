const toggleBtn = document.querySelector('.menu__toggle');
const iconBtn = document.querySelector('.menu__toggle i');
const menuDropDown = document.querySelector('.menu__dropdown');

toggleBtn.addEventListener('click', function () {
    menuDropDown.classList.toggle('open');

    // Kiểm tra xem nếu thằng menuDropDown đã add thêm thằng open thì ta đổi icon
    const isOpen = menuDropDown.classList.contains('open');
    iconBtn.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
})