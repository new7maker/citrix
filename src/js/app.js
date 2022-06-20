import * as flsFunctions from './modules/func.js';


document.addEventListener("DOMContentLoaded", function() {

    flsFunctions.isWebp();

})

function init() {
    let map = new ymaps.Map('map', {
        center: [45.05661613902117,42.01743746536805],
        zoom: 16
    });
}

ymaps.ready(init);
