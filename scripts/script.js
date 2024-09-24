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

// Get reference to the image element
const imgElement = document.getElementById('bathroom-image');

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
        // Remove 'hidden' class to fade in
        imgElement.classList.remove('hidden');
    }, 200); // Duration matches the CSS transition duration
}

// Event listener for image click
imgElement.addEventListener('click', generateRandomImage);

// Generate the first random image on page load
window.onload = generateRandomImage;
