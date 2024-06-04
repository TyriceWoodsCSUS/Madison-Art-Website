let targetScroll = 0;
let currentScroll = 0;
let scrollDistance = 150; // Distance to scroll on each wheel event
let animating = false; // Flag to indicate whether an animation is currently running

/*
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

window.addEventListener('scroll', function(e) {
    var gallery = document.querySelector('#gallery');
    if (gallery.contains(e.target)) {
        // Prevent the default action of the event
        e.preventDefault();
        // Increase or decrease target scroll based on scroll direction
        targetScroll += window.scrollY > currentScroll ? scrollDistance : -scrollDistance;
        // Stop the current animation before starting a new one
        if (animating) {
            window.cancelAnimationFrame(animateScroll);
        }
        // Start the animation
        animating = true;
        window.requestAnimationFrame(animateScroll);
    }
    // Update currentScroll
    currentScroll = window.scrollY;
});
*/
