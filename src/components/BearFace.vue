<template>
    <div class="bear-face-container">
      <canvas ref="bearCanvas" width="400" height="400"></canvas>
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
      const ctx = canvas.getContext('2d');
      
      // Ensure the context is available
      if (ctx) {
        // Function to draw the 2D bear face
        const drawBearFace = () => {
          const centerX = canvas.width / 2;
          const centerY = canvas.height / 2;
  
          // Draw the bear's head
          ctx.fillStyle = '#FF69B4'; // Pink color
          ctx.beginPath();
          ctx.arc(centerX, centerY, 100, 0, Math.PI * 2, true); // Circle for the head
          ctx.fill();
  
          // Draw the ears
          ctx.fillStyle = '#FF69B4'; // Same pink color as the head
          // Left ear
          ctx.beginPath();
          ctx.arc(centerX - 70, centerY - 80, 30, 0, Math.PI * 2, true); // Circle for the left ear
          ctx.fill();
  
          // Right ear
          ctx.beginPath();
          ctx.arc(centerX + 70, centerY - 80, 30, 0, Math.PI * 2, true); // Circle for the right ear
          ctx.fill();
  
          // Draw the left "O" eye (circular)
          ctx.fillStyle = '#000000'; // Black color for the eye
          ctx.beginPath();
          ctx.arc(centerX - 40, centerY - 30, 15, 0, Math.PI * 2, true); // Circle for "O" eye
          ctx.fill();
  
          // Draw the right "X" eye
          ctx.lineWidth = 5;
          ctx.beginPath();
          ctx.moveTo(centerX + 25, centerY - 45); // First stroke of "X"
          ctx.lineTo(centerX + 55, centerY - 15);
          ctx.moveTo(centerX + 55, centerY - 45); // Second stroke of "X"
          ctx.lineTo(centerX + 25, centerY - 15);
          ctx.strokeStyle = '#000000'; // Black color for "X"
          ctx.stroke();
  
          // Draw the snout
          ctx.fillStyle = '#F0E68C'; // Light khaki color for snout
          ctx.beginPath();
          ctx.ellipse(centerX, centerY + 30, 40, 30, 0, 0, Math.PI * 2); // Ellipse for the snout
          ctx.fill();
  
          // Draw the snout details (nose)
          ctx.fillStyle = '#000000'; // Black for the nose
          ctx.beginPath();
          ctx.arc(centerX, centerY + 30, 10, 0, Math.PI * 2, true); // Circle for the nose
          ctx.fill();
  
          // Draw the snout mouth line
          ctx.beginPath();
          ctx.moveTo(centerX, centerY + 40);
          ctx.lineTo(centerX, centerY + 60);
          ctx.strokeStyle = '#000000'; // Black color for the mouth line
          ctx.stroke();
  
          // Draw the mouth
          ctx.beginPath();
          ctx.arc(centerX - 15, centerY + 60, 15, 0, Math.PI, false); // Left side of the mouth
          ctx.arc(centerX + 15, centerY + 60, 15, 0, Math.PI, false); // Right side of the mouth
          ctx.stroke();
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
  }
  </style>
  