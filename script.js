document.getElementById('generateButton').addEventListener('click', async () => {
    const prompt = document.getElementById('prompt').value;

    if (!prompt) {
        alert('Please enter a prompt');
        return;
    }

    // Fetch image from backend
    const response = await fetch('/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: prompt }),
    });

    if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        document.getElementById('generatedImage').src = url;
        document.getElementById('generatedImage').style.display = 'block';
    } else {
        alert('Error generating image');
    }
});
