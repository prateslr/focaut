const emotions = ['😀', '😢', '😠', '😲', '😎'];
const emotionDisplay = document.getElementById('emotionDisplay');
const showEmotionButton = document.getElementById('showEmotionButton');

function showEmotion() {
    const randomIndex = Math.floor(Math.random() * emotions.length);
    emotionDisplay.textContent = emotions[randomIndex];
}

showEmotionButton.addEventListener('click', showEmotion);