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
const upvoteButton = document.getElementById('upvote-button');
const upvoteCountElement = document.getElementById('upvote-count');

let previousIndex = -1;
let upvoteCount = 0;

// Function to generate a random image that is different from the previous one
function generateRandomImage() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * images.length);
    } while (randomIndex === previousIndex);
    previousIndex = randomIndex;
    // Update the image source
    imgElement.src = images[randomIndex];
    // Reset upvote count
    upvoteCount = 0;
    upvoteCountElement.textContent = upvoteCount;
}

// Event listener for image click
imgElement.addEventListener('click', generateRandomImage);

// Event listener for upvote button
upvoteButton.addEventListener('click', () => {
    upvoteCount += 1;
    upvoteCountElement.textContent = upvoteCount;
});

// Generate the first random image on page load
window.onload = generateRandomImage;
