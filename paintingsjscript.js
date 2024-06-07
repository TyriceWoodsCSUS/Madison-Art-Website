window.onload = function() {
    window.addEventListener('scroll', function() {
        var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        var galleries = document.querySelectorAll('.gallery');
        var titleElement = document.querySelector('.gallery-title');

        galleries.forEach(function(gallery) {
            if (scrollLeft >= gallery.offsetLeft && scrollLeft < gallery.offsetLeft + gallery.offsetWidth) {
                titleElement.textContent = gallery.getAttribute('data-title'); // Update the title
                titleElement.style.display = 'block'; // Show the title
            }

            // Adjust the left padding of the gallery container
            var firstImage = gallery.querySelector('.image-item:first-child img');
            if (firstImage) {
                var paddingLeft = (window.innerWidth - firstImage.offsetWidth) / 2;
                gallery.style.paddingLeft = paddingLeft + 'px';
            }
        });
    });
};