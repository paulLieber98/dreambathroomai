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



// scripts/script.js

// Array of image paths
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

// Get references to DOM elements
const imgElement = document.getElementById('bathroom-image');
const imageIdElement = document.getElementById('image-id-number');

// Function to generate a random image
function generateRandomImage() {
    // Add 'hidden' class to start fade-out effect
    imgElement.classList.add('hidden');

    // Wait for the transition to complete
    setTimeout(() => {
        // Generate a random index
        const randomIndex = Math.floor(Math.random() * images.length);
        // Update the image source
        imgElement.src = images[randomIndex];
        // Update the image ID
        imageIdElement.textContent = randomIndex + 1; // IDs starting from 1
        // Remove 'hidden' class to fade in
        imgElement.classList.remove('hidden');
    }, 500); // Duration should match the CSS transition duration
}

// Event listener for image click
imgElement.addEventListener('click', generateRandomImage);

// Generate the first random image on page load
window.onload = generateRandomImage;

