const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const close = document.querySelector('.close');

menu.addEventListener('click', () => {
    nav.classList.add('transition');
    nav.classList.add('open-nav');
});

nav.addEventListener("transitionend", function() {
    nav.classList.remove('transition');
});

close.addEventListener('click', () => {
    nav.classList.add('transition');
    nav.classList.remove('open-nav');
});