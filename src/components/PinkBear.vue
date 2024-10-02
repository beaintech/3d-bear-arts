<template>
    <div ref="threeCanvas" class="bear-canvas"></div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import * as THREE from 'three';
  import { initScene } from '../three/scene';  // Import the scene setup function
  
  const threeCanvas = ref<HTMLDivElement | null>(null);
  
  onMounted(() => {
    if (threeCanvas.value) {
      const material = new THREE.MeshPhysicalMaterial({
        color: 0xFF69B4, // Hot Pink color
        metalness: 0.2,
        roughness: 0.6,
        clearcoat: 0.1,
        clearcoatRoughness: 0.8,
        transparent: true,
        opacity: 0.99,
      });
  
      initScene(threeCanvas.value, {
        material,
        backgroundColor: 0xffffff, // White background
      });
    }
  });
  </script>
  
  <style scoped>
  .bear-canvas {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background: radial-gradient(circle at 50% 50%, rgba(255, 182, 193, 0.8), rgba(135, 206, 250, 0.8), rgba(254, 0, 127, 0.993));
  }
  </style>
  