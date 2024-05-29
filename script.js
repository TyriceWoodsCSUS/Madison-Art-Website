let index = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(i) {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - i)}%)`;
    });
}

document.getElementById('prev').addEventListener('click', (e) => {
    e.preventDefault();
    index = (index > 0) ? index - 1 : slides.length - 1;
    showSlide(index);
});

document.getElementById('next').addEventListener('click', (e) => {
    e.preventDefault();
    index = (index < slides.length - 1) ? index + 1 : 0;
    showSlide(index);
});

slides.forEach((slide) => {
    slide.querySelector('img').addEventListener('click', () => {
        slide.style.transform += ' rotateY(180deg)';
    });
});

showSlide(index);