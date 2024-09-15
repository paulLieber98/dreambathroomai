from flask import Flask, request, jsonify, send_file
from diffusers import StableDiffusionPipeline
import torch
from PIL import Image
import io

app = Flask(__name__)

# Load the model (once at startup)
model_id = "CompVis/stable-diffusion-v1-4"
pipe = StableDiffusionPipeline.from_pretrained(model_id, torch_dtype=torch.float16)
pipe = pipe.to("cpu")


@app.route('/generate', methods=['POST'])
def generate_image():
    data = request.json
    prompt = data.get('prompt', '')

    if not prompt:
        return jsonify({"error": "Prompt is required"}), 400

    # Generate the image
    image = pipe(prompt).images[0]

    # Convert to binary for sending over HTTP
    img_byte_arr = io.BytesIO()
    image.save(img_byte_arr, format='PNG')
    img_byte_arr = img_byte_arr.getvalue()

    return send_file(
        io.BytesIO(img_byte_arr),
        mimetype='image/png',
        as_attachment=False,
        download_name='generated_image.png'
    )

if __name__ == '__main__':
    app.run(debug=True)
