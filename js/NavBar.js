const burger = document.querySelector('.header__button');
const nav = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
    nav.classList.toggle('toggle')

})