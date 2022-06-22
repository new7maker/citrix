import * as flsFunctions from './modules/func.js';


document.addEventListener("DOMContentLoaded", function() {

    flsFunctions.isWebp();

});

let section_titles = document.querySelectorAll('.section-title');
let main_menu_link = document.querySelectorAll('.main-menu__link');
let menu_btn = document.querySelector('.menu-btn');
let main_header = document.querySelector('.main-header');
let body = document.body;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    body.classList.add('mobile');
}

for(let i = 0; i < main_menu_link.length; i++) {
    let item = main_menu_link[i];

    item.addEventListener('click', function(e) {
        e.preventDefault();

        let section_id = item.getAttribute('href');
        let section = document.querySelector(section_id);
        let section_position = section.getBoundingClientRect().top - 65;

        if(body.classList.contains('mobile')) {
            main_header.classList.toggle('main-menu_active');
        }

        window.scrollBy({
            top: section_position,
            behavior: 'smooth'
        });
    })
}

menu_btn.addEventListener('click', function() {
    main_header.classList.toggle('main-menu_active');
})