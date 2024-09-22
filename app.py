# app.py
from flask import Flask, render_template
import os
import random

app = Flask(__name__)

@app.route('/')
def index():
    images_dir = 'static/images'
    images = os.listdir(images_dir)
    image_file = random.choice(images)
    image_url = f'/static/images/{image_file}'
    return render_template('index.html', image_url=image_url)

if __name__ == '__main__':
    app.run(debug=True)
