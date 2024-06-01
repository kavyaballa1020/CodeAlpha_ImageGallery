const slides = document.querySelectorAll('.slide');
const thumbs = document.querySelectorAll('.thumb');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const playPauseBtn = document.querySelector('.play-pause');
let currentSlide = 0;
let slideInterval;
let isPlaying = false;

function showSlide(index) {
    slides.forEach((slide, idx) => {
        slide.classList.remove('active');
        thumbs[idx].classList.remove('active');
    });

    slides[index].classList.add('active');
    thumbs[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
    showSlide(currentSlide);
}

function playSlides() {
    slideInterval = setInterval(nextSlide, 1500); // 1 second interval
    playPauseBtn.innerHTML = '&#10074;&#10074;'; // Pause symbol
    isPlaying = true;
}

function pauseSlides() {
    clearInterval(slideInterval);
    playPauseBtn.innerHTML = '&#9658;'; // Play symbol
    isPlaying = false;
}

function togglePlayPause() {
    if (isPlaying) {
        pauseSlides();
    } else {
        playSlides();
    }
}

prev.addEventListener('click', () => {
    pauseSlides();
    prevSlide();
});

next.addEventListener('click', () => {
    pauseSlides();
    nextSlide();
});

thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        pauseSlides();
        currentSlide = index;
        showSlide(currentSlide);
    });
});

playPauseBtn.addEventListener('click', togglePlayPause);

// Ensure the first slide is active initially
showSlide(currentSlide);
