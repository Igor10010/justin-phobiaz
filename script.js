let menu = document.querySelector('.menu');
let close = document.querySelector('.close');
let nav = document.querySelector('nav.mobile-nav');

menu.addEventListener('click', () => {
    nav.classList.add('open-nav');
})

close.addEventListener('click', () => {
    nav.classList.remove('open-nav');
})