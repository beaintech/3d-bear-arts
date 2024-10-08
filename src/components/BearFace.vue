<template>
  <div v-if="!isHidden" class="bear-face-container">
    <canvas ref="bearCanvas"></canvas>
    <button @click="toggleComponent" class="pixel-button">Enter</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const bearCanvas = ref<HTMLCanvasElement | null>(null);
const isHidden = ref(false); // Controls the visibility of the entire component

// Function to hide the entire component
const toggleComponent = () => {
  isHidden.value = true; // Hides the component when the button is clicked
};

onMounted(() => {
  const canvas = bearCanvas.value;

  if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.6;

    const ctx = canvas.getContext('2d');

    if (ctx) {
      const drawBearFace = () => {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        const faceRadius = canvas.height / 2.5;
        const earRadius = faceRadius * 0.45;
        const eyeRadius = faceRadius * 0.18;
        const snoutRadius = faceRadius * 0.3;
        const noseRadius = snoutRadius * 0.35;

        // Draw the bear's head
        ctx.fillStyle = '#FF69B4'; // Pink color
        ctx.beginPath();
        ctx.arc(centerX, centerY, faceRadius, 0, Math.PI * 2, true); // Circle for the head
        ctx.fill();

        // Draw the ears
        ctx.fillStyle = '#FF69B4';
        ctx.beginPath();
        ctx.arc(centerX - faceRadius * 0.85, centerY - faceRadius * 0.8, earRadius, 0, Math.PI * 2, true);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(centerX + faceRadius * 0.85, centerY - faceRadius * 0.8, earRadius, 0, Math.PI * 2, true);
        ctx.fill();

        // Draw the left "O" eye
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(centerX - faceRadius * 0.4, centerY - faceRadius * 0.2, eyeRadius, 0, Math.PI * 2, true);
        ctx.fill();

        // Draw the right "X" eye
        ctx.lineWidth = 15;
        ctx.beginPath();
        // First stroke of "X" (longer)
        ctx.moveTo(centerX + faceRadius * 0.2, centerY - faceRadius * 0.3);  // Start further left and higher
        ctx.lineTo(centerX + faceRadius * 0.5, centerY - faceRadius * 0.05); // End further right and lower

        // Second stroke of "X" (longer)
        ctx.moveTo(centerX + faceRadius * 0.5, centerY - faceRadius * 0.3);  // Start further right and higher
        ctx.lineTo(centerX + faceRadius * 0.2, centerY - faceRadius * 0.05); // End further left and lower

        ctx.strokeStyle = '#000000'; // Black color for "X"
        ctx.stroke();

        // Draw the snout
        ctx.fillStyle = '#F0E68C';
        ctx.beginPath();
        ctx.ellipse(centerX, centerY + faceRadius * 0.4, snoutRadius * 1.5, snoutRadius, 0, 0, Math.PI * 2);
        ctx.fill();

        // Draw the snout details (nose)
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(centerX, centerY + faceRadius * 0.3, noseRadius * 1.2, 0, Math.PI * 2, true);
        ctx.fill();
      };

      drawBearFace();
    }
  }
});
</script>

<style scoped>
.bear-face-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background: radial-gradient(circle at 50% 50%, rgba(255, 182, 193, 0.8), rgba(135, 206, 250, 0.8), rgba(254, 0, 127, 0.993));
}

canvas {
  display: block;
  width: 100%;
  height: auto;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 18px;
  background-color: #ff69b4;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.pixel-button {
  font-family: 'Press Start 2P', sans-serif; /* Pixel-style font */
  font-size: 18px;
  padding: 15px 40px;
  background-color: #ff69b4; /* Bright pink background */
  color: white;
  border: 4px solid #000000; /* Black pixelated border */
  box-shadow: 5px 5px 0 #000000, 10px 10px 0 #ffffff; /* Pixel-style shadow */
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

/* Hover effect for the button */
.pixel-button:hover {
  background-color: #ffcc00; /* Change background to gold on hover */
  color: black;
  transform: translate(-3px, -3px); /* Pixel push effect */
  box-shadow: 5px 5px 0 #ffffff, 10px 10px 0 #000000;
}
</style>
