var menu = document.querySelector('.nav-links');
var hamburger = document.querySelector('.hamburger-menu');
var gallery = document.querySelector('#gallery');

function toggleMenu() {
    var menu = document.querySelector('.nav-links');
    var header = document.querySelector('#header');
    var gallery = document.querySelector('#gallery');
    var hamburger = document.querySelector('.hamburger-menu');
    menu.classList.toggle('active');
    header.classList.toggle('blur-effect');
    gallery.classList.toggle('blur-effect');
    if (menu.classList.contains('active')) {
        hamburger.classList.add('fade-out');
    } else {
        hamburger.classList.remove('fade-out');
    }
}

let targetScroll = 0;
let currentScroll = 0;
let scrollDistance = 150; // Distance to scroll on each wheel event
let animating = false; // Flag to indicate whether an animation is currently running

function animateScroll() {
    if (Math.abs(targetScroll - currentScroll) > 1) {
        // Smoothly move currentScroll towards targetScroll
        currentScroll += (targetScroll - currentScroll) * 0.05; // Adjust the multiplier as needed
        document.querySelector('#gallery').scrollLeft = currentScroll;
        // Continue the animation if the target scroll is not reached
        window.requestAnimationFrame(animateScroll);
    } else {
        // Stop the animation when the target scroll is reached
        animating = false;
    }
}

window.addEventListener('wheel', function(e) {
    var gallery = document.querySelector('#gallery');
    if (gallery.contains(e.target)) {
        // Increase or decrease target scroll based on wheel direction
        targetScroll += e.deltaY > 0 ? scrollDistance : -scrollDistance;
        // Stop the current animation before starting a new one
        if (animating) {
            window.cancelAnimationFrame(animateScroll);
        }
        // Start the animation
        animating = true;
        window.requestAnimationFrame(animateScroll);
    }
});

window.addEventListener('load', function() {
    var header = document.querySelector('#header');
    header.style.animationDelay = '0.5s'; /* Delay the animation by 0.5 seconds */
});

document.querySelector('#close-menu').addEventListener('click', toggleMenu);