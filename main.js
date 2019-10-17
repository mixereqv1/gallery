const images = ["BMW-2-series.jpg", "landscape01.jpg", "landscape02.jpg", "pingwin02.png", "red-car-4.jpg", "red-car-facebook-covers.jpg"];
const main = document.querySelector('.main');
const previous_button = document.querySelector('.previous');
const next_button = document.querySelector('.next');
const overlay_image = document.querySelector('.overlay__image');

let current_image = 0;

images.forEach( (element,i) => {
    let img = document.createElement('img');
    img.src = `images/${element}`;
    img.className = 'image';
    img.addEventListener('click', event => {
        overlay_image.src = `images/${element}`;
        current_image = i;
    })
    main.appendChild(img);
})

previous_button.addEventListener('click', event => {
    if(current_image > 0) {
        current_image--;
        overlay_image.src = `images/${images[current_image]}`;
    }
});

next_button.addEventListener('click', event => {
    if(current_image < images.length - 1) {
        current_image++;
        overlay_image.src = `images/${images[current_image]}`;
    }
});