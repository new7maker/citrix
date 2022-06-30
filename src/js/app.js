import * as flsFunctions from './modules/func.js';


document.addEventListener("DOMContentLoaded", function() {

    flsFunctions.isWebp();

});

let section_titles = document.querySelectorAll('.section-title');
let main_menu_link = document.querySelectorAll('.main-menu__link');
let menu_btn = document.querySelector('.menu-btn');
let main_header = document.querySelector('.main-header');
let body = document.body;
let slide_menu = document.querySelector('.slide-menu');
let slide_menu_circles = slide_menu.querySelectorAll('circle');

for(let i = 0; i < section_titles.length; i++) {
    console.log(section_titles[i], section_titles[i].getBoundingClientRect().top);
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    body.classList.add('mobile');
}

for(let i = 0; i < main_menu_link.length; i++) {
    let item = main_menu_link[i];
    let section_position = get_position(item, 'href').top;

    item.addEventListener('click', function(e) {
        e.preventDefault();

        if(main_header.classList.contains('main-menu_active')) {
            main_header.classList.remove('main-menu_active');
        };
        window.scrollTo({
            top: section_position,
            left: 0,
            behavior: 'smooth'
        });
    })
}

for(let i = 0; i < slide_menu_circles.length; i++) {
    let item = slide_menu_circles[i];
    let position = get_position(item, 'data-id').top;
    console.log(position);
    

    item.addEventListener('click', function(e) {
        window.scrollTo({
            top: position,
            left: 0,
            behavior: 'smooth'
        });
    })
}

menu_btn.addEventListener('click', function() {
    main_header.classList.toggle('main-menu_active');
})

function get_position(element, attribute) {
    let item = element;
    let section_id = item.getAttribute(attribute);
    let section = document.querySelector(section_id);
    let section_position = section.getBoundingClientRect();
  
    return {
      top: section_position.top + window.pageYOffset,
      right: section_position.right + window.pageXOffset,
      bottom: section_position.bottom + window.pageYOffset,
      left: section_position.left + window.pageXOffset
    };
}