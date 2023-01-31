const toogleButton = document.querySelector('.navbar__toogleButton');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navber_icons');

toogleButton.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})