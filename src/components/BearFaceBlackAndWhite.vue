<template>
    <div class="bear-background">
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
      canvas.width = window.innerWidth * 0.8; // Make the bear face occupy 80% of the width
      canvas.height = window.innerHeight * 0.8; // Make the bear face occupy 80% of the height
  
      const ctx = canvas.getContext('2d');
  
      // Ensure the context is available
      if (ctx) {
        const drawBearFace = () => {
          const centerX = canvas.width / 2;
          const centerY = canvas.height / 2;
          ctx.lineWidth = 8; // Set the stroke thickness
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
          ctx.lineWidth = 8;
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
          ctx.lineWidth = 6;
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
    position: absolute;
    top: 10%;
    left: 10%;
    width: 80vw;
    height: 80vh;
    background-color: black; /* Black background */
    z-index: -1; /* Keep behind other components */
  }
  </style>
  