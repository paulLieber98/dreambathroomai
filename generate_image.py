# generate_image.py
import torch
from diffusers import StableDiffusionPipeline
import os

def generate_images(num_images=10):
    prompt = (
        "An extremely photorealistic, modern, and futuristic bathroom image with a view of a city skyline at sunset. "
        "Situated in downtown New York City, overlooking the Manhattan skyline, this bathroom is designed to take in the beautiful sunset every night. "
        "Exposed wood and glass give the interior an airy and open feel, making the viewer feel like a millionaire."
    )

    # Load the Stable Diffusion model
    pipe = StableDiffusionPipeline.from_pretrained("runwayml/stable-diffusion-v1-5")
    pipe = pipe.to("cuda")  # Use "cpu" if you don't have a CUDA-compatible GPU

    # Ensure the images directory exists
    images_dir = "static/images"
    if not os.path.exists(images_dir):
        os.makedirs(images_dir)

    # Generate and save images
    for i in range(num_images):
        image = pipe(prompt).images[0]
        image_path = os.path.join(images_dir, f"image_{i}.png")
        image.save(image_path)
        print(f"Generated {image_path}")

if __name__ == "__main__":
    generate_images(num_images=10)
