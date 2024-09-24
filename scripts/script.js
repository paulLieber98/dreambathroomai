// JavaScript from index.html

// JavaScript code to change the image when clicked
const images = [
    'images/image_0.png',
    'images/image_1.png',
    'images/image_2.png',
    'images/image_3.png',
    'images/image_4.png',
    'images/image_5.png',
    'images/image_6.png',
    'images/image_7.png',
    'images/image_8.png',
    'images/image_9.png'
];

const imgElement = document.getElementById('bathroom-image');

imgElement.addEventListener('click', () => {
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * images.length);
    // Set the image source to the new random image
    imgElement.src = images[randomIndex];
});
