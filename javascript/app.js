var hamburger_button = document.querySelector('.js-hamburger-button');

hamburger_button.onclick = function (){
    var menu = document.querySelector('.js-menu');
    menu.classList.toggle('menu--is-showing');
}