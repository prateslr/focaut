const instructions = [
  'Desenhe algo no canvas abaixo:',
  'Digite uma frase que transmita uma emoção:'
];

const feedback = document.getElementById('feedback');
const instructionDisplay = document.getElementById('instructionDisplay');
const nextButton = document.getElementById('nextButton');
const drawingPhase = document.getElementById('drawingPhase');
const typingPhase = document.getElementById('typingPhase');
const typingInput = document.getElementById('typingInput');
const drawingCanvas = document.getElementById('drawingCanvas');
const ctx = drawingCanvas.getContext('2d');

let currentInstruction = 0;

function showNextPhase() {
  if (currentInstruction >= instructions.length) {
      feedback.textContent = 'Parabéns! Você completou todas as tarefas.';
      nextButton.style.display = 'none'; 
      return;
  }

  instructionDisplay.textContent = instructions[currentInstruction];

  drawingPhase.style.display = 'none';
  typingPhase.style.display = 'none';

  if (currentInstruction === 0) {
      drawingPhase.style.display = 'block';
  } else if (currentInstruction === 1) {
      typingPhase.style.display = 'block';
  }

  feedback.textContent = '';
}

let drawing = false;

drawingCanvas.addEventListener('mousedown', () => {
  drawing = true;
});

drawingCanvas.addEventListener('mouseup', () => {
  drawing = false;
  ctx.beginPath();
});

drawingCanvas.addEventListener('mousemove', (e) => {
  if (drawing) {
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.strokeStyle = 'black';
      ctx.lineTo(e.clientX - drawingCanvas.offsetLeft, e.clientY - drawingCanvas.offsetTop);
      ctx.stroke();
  }
});

function checkPhase() {
  if (currentInstruction === 1) {
      const userText = typingInput.value.trim().toLowerCase();
      if (userText.includes('triste') || userText.includes('feliz') || userText.includes('ansioso')) {
          feedback.textContent = 'Você descreveu uma emoção corretamente!';
          currentInstruction++;
          showNextPhase();
      } else {
          feedback.textContent = 'Tente novamente.';
      }
  } else {
      currentInstruction++;
      showNextPhase();
  }
}

nextButton.addEventListener('click', checkPhase);

showNextPhase();
