const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');

let index = 0;

function showImage(n) {
    if (n >= images.length) index = 0;
    if (n < 0) index = images.length - 1;
    carouselImages.style.transform = `translateX(${-index * 100}%)`;
}

function nextImage() {
    index++;
    showImage(index);
}

function prevImage() {
    index--;
    showImage(index);
}

nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

// Automatic slide
setInterval(nextImage, 3000); // Change image every 3 seconds
