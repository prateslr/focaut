const imageDisplay = document.getElementById('imageDisplay');
const descriptionInput = document.getElementById('descriptionInput');
const feedback = document.getElementById('feedback');

const images = [
    { src: 'https://via.placeholder.com/300?text=Gato', description: 'gato' },
    { src: 'https://via.placeholder.com/300?text=Carro', description: 'carro' },
    { src: 'https://via.placeholder.com/300?text=Árvore', description: 'árvore' },
];

function showImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    imageDisplay.src = images[randomIndex].src;
    imageDisplay.dataset.description = images[randomIndex].description;
}

function checkDescription() {
    const userDescription = descriptionInput.value.trim().toLowerCase();
    const correctDescription = imageDisplay.dataset.description.toLowerCase();
    if (userDescription === correctDescription) {
        feedback.textContent = 'Correto!';
    } else {
        feedback.textContent = 'Tente novamente!';
    }
}

showImage();
