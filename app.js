import { buildShape } from './src/simulator.js';

const video = document.getElementById('camera');
const canvas = document.getElementById('overlay');
const shapeInput = document.getElementById('shape');
const colorInput = document.getElementById('color');
const sizeInput = document.getElementById('size');
const startButton = document.getElementById('start');

const context = canvas.getContext('2d');

function drawOverlay() {
  const width = video.videoWidth;
  const height = video.videoHeight;

  if (!width || !height) {
    requestAnimationFrame(drawOverlay);
    return;
  }

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.strokeStyle = colorInput.value;
  context.lineWidth = 4;

  const shape = buildShape(
    shapeInput.value,
    canvas.width / 2,
    canvas.height / 2,
    Number(sizeInput.value)
  );

  context.beginPath();

  if (shape.type === 'circle') {
    context.arc(shape.centerX, shape.centerY, shape.radius, 0, Math.PI * 2);
  } else {
    context.moveTo(shape.points[0][0], shape.points[0][1]);
    shape.points.slice(1).forEach(([x, y]) => context.lineTo(x, y));
    context.closePath();
  }

  context.stroke();
  requestAnimationFrame(drawOverlay);
}

async function startCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' },
      audio: false,
    });

    video.srcObject = stream;
    await video.play();
    drawOverlay();
    startButton.disabled = true;
    startButton.textContent = 'Câmera ativa';
  } catch (error) {
    startButton.textContent = 'Permissão negada';
    console.error('Falha ao iniciar câmera:', error);
  }
}

startButton.addEventListener('click', startCamera);
