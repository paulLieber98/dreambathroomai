from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from diffusers import StableDiffusionPipeline
import torch
import base64
from io import BytesIO

app = Flask(__name__)
CORS(app)

# Load the model (adjust path as needed)
model = StableDiffusionPipeline.from_pretrained("runwayml/stable-diffusion-v1-5", torch_dtype=torch.float16)
model.to("cuda" if torch.cuda.is_available() else "cpu")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate_image():
    try:
        data = request.json
        prompt = data['prompt']
        
        # Generate image
        image = model(prompt).images[0]
        
        # Convert image to base64
        buffered = BytesIO()
        image.save(buffered, format="PNG")
        img_str = base64.b64encode(buffered.getvalue()).decode()
        
        return jsonify({"status": "success", "image": img_str})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
