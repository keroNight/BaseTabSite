// Libs
import LazyLoad from 'vanilla-lazyload';

// Parts
import { tabs } from './parts/tabs';

function log() {
    console.log(window);
    console.log(localStorage.getItem("lightMode"));
}

function toggle_theme() {
    var main_el = document.getElementsByTagName("body")[0];
    let $button = document.querySelector('#themeMode');
    $button.addEventListener('click', function(a){
        if (main_el.classList.contains("lightMode")) {
            localStorage.setItem("lightMode", 0);
            main_el.classList.remove('lightMode');
            $button.classList.remove('themeModeToggle--checked');
            console.log("Dark");
        } else {
            localStorage.setItem("lightMode", 1);
            main_el.classList.add('lightMode');
            $button.classList.add('themeModeToggle--checked');
            console.log("Light");
        }
    });

    log();
}

window.onload = function(){
    log();
    var main_el = document.getElementsByTagName("body")[0];
    let $button = document.querySelector('#themeMode');
    if (localStorage.getItem("lightMode") == 0) {
        main_el.classList.remove('lightMode');
        $button.classList.remove('themeModeToggle--checked');
        console.log("Dark");
    } else if (localStorage.getItem("lightMode") == 1) {
        main_el.classList.add('lightMode');
        $button.classList.add('themeModeToggle--checked');
        console.log("Light");
    } else {
        console.error(localStorage.getItem("lightMode"));
    }
};

tabs();
toggle_theme();

new LazyLoad();