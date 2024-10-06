<template>
  <div class="bear-background">
    <canvas ref="bearCanvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const bearCanvas = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  const canvas = bearCanvas.value;

  // Ensure the canvas is available
  if (canvas) {
    // Set canvas to occupy 80% of the viewport
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.8;

    const ctx = canvas.getContext('2d');

    // Ensure the context is available
    if (ctx) {
      const drawBearFace = () => {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        ctx.lineWidth = 10; // Set the stroke thickness
        ctx.strokeStyle = '#FFFFFF'; // White stroke color

        // Draw the bear's head
        ctx.beginPath();
        ctx.arc(centerX, centerY, canvas.height / 2.5, 0, Math.PI * 2, true); // Circle for the head
        ctx.stroke();

        // Draw the ears
        // Left ear
        ctx.beginPath();
        ctx.arc(centerX - canvas.width * 0.15, centerY - canvas.height * 0.25, canvas.height * 0.1, 0, Math.PI * 2, true);
        ctx.stroke();

        // Right ear
        ctx.beginPath();
        ctx.arc(centerX + canvas.width * 0.15, centerY - canvas.height * 0.25, canvas.height * 0.1, 0, Math.PI * 2, true);
        ctx.stroke();

        // Draw the left "O" eye (circular)
        ctx.beginPath();
        ctx.arc(centerX - canvas.width * 0.1, centerY - canvas.height * 0.05, canvas.height * 0.06, 0, Math.PI * 2, true);
        ctx.stroke();

        // Draw the right "X" eye
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.moveTo(centerX + canvas.width * 0.06, centerY - canvas.height * 0.1);
        ctx.lineTo(centerX + canvas.width * 0.14, centerY - canvas.height * 0.02);
        ctx.moveTo(centerX + canvas.width * 0.14, centerY - canvas.height * 0.1);
        ctx.lineTo(centerX + canvas.width * 0.06, centerY - canvas.height * 0.02);
        ctx.stroke();

        // Draw the snout
        ctx.beginPath();
        ctx.ellipse(centerX, centerY + canvas.height * 0.1, canvas.width * 0.15, canvas.height * 0.08, 0, 0, Math.PI * 2);
        ctx.stroke();

        // Draw the snout details (nose)
        ctx.beginPath();
        ctx.arc(centerX, centerY + canvas.height * 0.1, canvas.height * 0.04, 0, Math.PI * 2, true);
        ctx.stroke();

        // Draw the mouth
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.arc(centerX - canvas.width * 0.05, centerY + canvas.height * 0.15, canvas.height * 0.04, 0, Math.PI, false);
        ctx.arc(centerX + canvas.width * 0.05, centerY + canvas.height * 0.15, canvas.height * 0.04, 0, Math.PI, false);
        ctx.stroke();
      };

      // Call the draw function
      drawBearFace();
    }
  }
});
</script>

<style scoped>
.bear-background {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: black; /* Black background */
}
canvas {
  display: block;
  max-width: 80vw; /* Occupy 80% of the width */
  max-height: 80vh; /* Occupy 80% of the height */
}
</style>
