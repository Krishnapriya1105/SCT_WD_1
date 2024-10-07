// script.js

// Select the navigation bar
const navbar = document.querySelector('.navbar');

// Add an event listener to window scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
