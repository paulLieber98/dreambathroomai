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
    'images/image_9.png',
    'images/image_10.png',
    'images/image_11.png',
    'images/image_12.png',
    'images/image_13.png',
    'images/image_14.png',
    'images/image_15.png',
    'images/image_16.png',
    'images/image_17.png',
    'images/image_18.png',
    'images/image_19.png',
    'images/image_20.png',
    'images/image_21.png',
    'images/image_22.png',
    'images/image_23.png',
    'images/image_24.png',
    'images/image_25.png',
    'images/image_26.png',
    'images/image_27.png',
    'images/image_28.png',
    'images/image_29.png',
    'images/image_30.png',
    'images/image_31.png',
    'images/image_32.png',
    'images/image_33.png',
    'images/image_34.png',
    'images/image_35.png',
    'images/image_36.png',
    'images/image_37.png',
    'images/image_38.png',
    'images/image_39.png',
    'images/image_40.png',
    'images/image_41.png',
    'images/image_42.png',
    'images/image_43.png',
    'images/image_44.png',
    'images/image_45.png',
    'images/image_46.png',
    'images/image_47.png',
    'images/image_48.png',
    'images/image_49.png',
    'images/image_50.png',
    'images/image_51.png',
    'images/image_52.png',
    'images/image_53.png',
    'images/image_54.png',
    'images/image_55.png',
    'images/image_56.png',
    'images/image_57.png',
    'images/image_58.png',
    'images/image_59.png',
    'images/image_60.png',
    'images/image_61.png',
    'images/image_62.png',
    'images/image_63.png',
    'images/image_64.png',
    'images/image_65.png',
    'images/image_66.png',
    'images/image_67.png',
    'images/image_68.png',
    'images/image_69.png',
    'images/image_70.png',
    'images/image_71.png',
    'images/image_72.png',
    'images/image_73.png',
    'images/image_74.png',
    'images/image_75.png',
    'images/image_76.png',
    'images/image_77.png',
];

// Get reference to the image element
const imgElement = document.getElementById('bathroom-image');

let previousIndex = -1;

// Function to generate a random image that is different from the previous one
function generateRandomImage() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * images.length);
    } while (randomIndex === previousIndex);
    previousIndex = randomIndex;
    // Update the image source
    imgElement.src = images[randomIndex];
}

// Event listener for image click
imgElement.addEventListener('click', generateRandomImage);

// Generate the first random image on page load
window.onload = generateRandomImage;
