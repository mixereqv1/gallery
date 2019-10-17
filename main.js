const images = ["BMW-2-series.jpg", "landscape01.jpg", "landscape02.jpg", "pingwin02.png", "red-car-4.jpg", "red-car-facebook-covers.jpg"];
const main = document.querySelector('.main');
const previous_image = document.querySelector('.previous');
const next_image = document.querySelector('.next');
const photos = document.querySelector('.photos');
const image = document.querySelector('.image');
const current_image_span = document.querySelector('.current__image span');

let current_image = 0;

image.src = `images/${images[current_image]}`
current_image_span.innerText = `${current_image+1} / ${images.length}`;

previous_image.addEventListener('click', event => {
    if(current_image == 1) {
        previous_image.classList.add('hidden');
    }
    image.style.opacity = 0;
    setTimeout(a => {
        current_image--;
        image.src = `images/${images[current_image]}`;
        image.style.opacity = 1;
        current_image_span.innerText = `${current_image+1} / ${images.length}`;
    }, 300)
    if(current_image == images.length - 1) {
        next_image.classList.remove('hidden');
    }
});

next_image.addEventListener('click', event => {
    previous_image.classList.remove('hidden');
    image.style.opacity = 0;
    setTimeout(a => {
        current_image++;
        image.src = `images/${images[current_image]}`;
        image.style.opacity = 1;
        current_image_span.innerText = `${current_image+1} / ${images.length}`;
    }, 300)
    if(current_image == images.length - 2) {
        next_image.classList.add('hidden');
    }
});