const slides = document.querySelectorAll('.slide');
const thumbs = document.querySelectorAll('.thumb');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    thumbs.forEach(thumb => thumb.classList.remove('active'));
    slides[index].classList.add('active');
    thumbs[index].classList.add('active');
}

prev.addEventListener('click', () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
    showSlide(currentSlide);
});

next.addEventListener('click', () => {
    currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
    showSlide(currentSlide);
});

thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

let slideInterval = setInterval(() => {
    next.click();
}, 3000);

// Optional: Pause the slideshow on hover
document.querySelector('.gallery').addEventListener('mouseover', () => {
    clearInterval(slideInterval);
});

document.querySelector('.gallery').addEventListener('mouseout', () => {
    slideInterval = setInterval(() => {
        next.click();
    }, 3000);
});
