let targetScroll = 0;
let currentScroll = 0;
let scrollDistance = 150; // Distance to scroll on each wheel event
let animating = false; // Flag to indicate whether an animation is currently running

// Function to adjust styles based on screen size
function adjustStyles() {
    // Get the width of the window
    var width = window.innerWidth;

    // Get the preformatted text element
    var pre = document.querySelector('#cv pre');

    // Adjust the padding-right of the preformatted text based on the screen size
    if (width <= 1366) {
        pre.style.paddingRight = '900px';
    } else if (width <= 1800) {
        pre.style.paddingRight = '600px';
    } else {
        pre.style.paddingRight = '800px';
    }
}

// Call the function when the window is resized
window.addEventListener('resize', adjustStyles);

// Call the function when the page loads
window.addEventListener('load', adjustStyles);
