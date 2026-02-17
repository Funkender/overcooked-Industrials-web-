const menuBtn = document.querySelector('.menu-btn');
const sideMenu = document.querySelector('.side-menu');
const menuItems = document.querySelectorAll('.menu-item');

menuBtn.addEventListener('click', () => {
    sideMenu.classList.toggle('open');

    if (sideMenu.classList.contains('open')) {
        menuItems.forEach((item, i) => {
            setTimeout(() => item.classList.add('visible'), i * 150);
        });
    } else {
        menuItems.forEach(item => item.classList.remove('visible'));
    }
});
