import * as flsFunctions from './modules/func.js';


document.addEventListener("DOMContentLoaded", function() {

    flsFunctions.isWebp();

});

let section_titles = document.querySelector('.section-title');

console.log(section_titles);

let menu_btn = document.querySelector('.menu-btn');
let menu = document.querySelector('.main-menu');

menu_btn.addEventListener('click', function() {
    menu.classList.toggle('main-menu_active');
})