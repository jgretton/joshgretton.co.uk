const nav = document.querySelector('.nav');
const navLink = document.querySelectorAll('.nav-link');
const menu = document.querySelector('.menu-bars');
const body = document.querySelector('body');

let showMenu = false;

menu.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        nav.classList.add('open');
        menu.classList.add('close');
        body.classList.add('darken');

        showMenu = true;
    }

    else{
        nav.classList.remove('open');
        menu.classList.remove('close');
        body.classList.remove('darken');

        showMenu = false;
    }

}