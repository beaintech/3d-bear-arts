<template>
  <div class="bear-face-container">
    <canvas ref="bearCanvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

// Define the canvas ref with correct typing
const bearCanvas = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  const canvas = bearCanvas.value;

  // Ensure the canvas is available
  if (canvas) {
    // Set the canvas size dynamically
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.6; // 70% of the viewport height

    const ctx = canvas.getContext('2d');

    // Ensure the context is available
    if (ctx) {
      // Function to draw the 2D bear face
      const drawBearFace = () => {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        // Adjust size based on canvas height (keep proportional scaling)
        const faceRadius = canvas.height / 2.5;
        const earRadius = faceRadius * 0.35; // Adjusted ear size
        const eyeRadius = faceRadius * 0.18; // Adjusted eye size
        const snoutRadius = faceRadius * 0.3; // Adjusted snout size
        const noseRadius = snoutRadius * 0.35;

        // Draw the bear's head
        ctx.fillStyle = '#FF69B4'; // Pink color
        ctx.beginPath();
        ctx.arc(centerX, centerY, faceRadius, 0, Math.PI * 2, true); // Circle for the head
        ctx.fill();

        // Draw the ears (closer to the head)
        ctx.fillStyle = '#FF69B4'; // Same pink color as the head
        // Left ear (closer to the head)
        ctx.beginPath();
        ctx.arc(centerX - faceRadius * 1.1, centerY - faceRadius * 0.8, earRadius, 0, Math.PI * 2, true); // Closer left ear
        ctx.fill();

        // Right ear (closer to the head)
        ctx.beginPath();
        ctx.arc(centerX + faceRadius * 1.1, centerY - faceRadius * 0.8, earRadius, 0, Math.PI * 2, true); // Closer right ear
        ctx.fill();

        // Draw the left "O" eye (moved higher)
        ctx.fillStyle = '#000000'; // Black color for the eye
        ctx.beginPath();
        ctx.arc(centerX - faceRadius * 0.4, centerY - faceRadius * 0.2, eyeRadius, 0, Math.PI * 2, true); // Higher circle for "O" eye
        ctx.fill();

        // Draw the right "X" eye (moved higher)
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(centerX + faceRadius * 0.2, centerY - faceRadius * 0.25); // First stroke of "X" (higher)
        ctx.lineTo(centerX + faceRadius * 0.4, centerY - faceRadius * 0.1);
        ctx.moveTo(centerX + faceRadius * 0.4, centerY - faceRadius * 0.25); // Second stroke of "X"
        ctx.lineTo(centerX + faceRadius * 0.2, centerY - faceRadius * 0.1);
        ctx.strokeStyle = '#000000'; // Black color for "X"
        ctx.stroke();

        // Draw the snout (moved lower for better spacing)
        ctx.fillStyle = '#F0E68C'; // Light khaki color for snout
        ctx.beginPath();
        ctx.arc(centerX, centerY + faceRadius * 0.3, snoutRadius, 0, Math.PI * 2, true); // Lower snout
        ctx.fill();

        // Draw the snout details (nose)
        ctx.fillStyle = '#000000'; // Black for the nose
        ctx.beginPath();
        ctx.arc(centerX, centerY + faceRadius * 0.3, noseRadius, 0, Math.PI * 2, true); // Circle for the nose
        ctx.fill();
      };

      // Call the draw function
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
  height: 100vh;
  background: radial-gradient(circle at 50% 50%, rgba(255, 182, 193, 0.8), rgba(135, 206, 250, 0.8), rgba(254, 0, 127, 0.993));
}

canvas {
  display: block;
  width: 100%; /* Make the canvas 100% width */
  height: auto; /* Maintain aspect ratio */
}
</style>
