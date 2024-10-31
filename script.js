let currentImageIndex = 0;
const images = document.querySelectorAll('#carousel img');

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

setInterval(nextImage, 3000);

showImage(currentImageIndex);
