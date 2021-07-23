// Side Navigation JS Code

let menuBtn = document.querySelector('.menu-btn');
let cancelBtn = document.querySelector('.cancel-btn');
let navBar = document.querySelector('.navbar');
let body = document.querySelector('body');

menuBtn.addEventListener('click', () => {
    menuBtn.style.opacity = '0';
    menuBtn.style.pointerEvents = 'none';
    navBar.classList.add('active');
    body.style.overflow = 'hidden';
})

cancelBtn.addEventListener('click', () => {
    menuBtn.style.opacity = '1';
    menuBtn.style.pointerEvents = 'auto';
    navBar.classList.remove('active');
    body.style.overflow = 'auto';
})

// Sticky Navigation Menu JS Code

let nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add('sticky');
    }
    else {
        nav.classList.remove('sticky');
    }
})

// Side Navigation gets closed as soon as we click on any of the nav links

let navLinks = document.querySelectorAll('.menu li a');

navLinks.forEach((navLink) => {
    navLink.addEventListener('click', () => {
        menuBtn.style.opacity = '1';
        menuBtn.style.pointerEvents = 'auto';
        navBar.classList.remove('active');
        body.style.overflow = 'auto';
    })
})