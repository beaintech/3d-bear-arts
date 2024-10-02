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
        color: 0xFFD700, // Gold color
        metalness: 0.5,
        roughness: 0.4,
        clearcoat: 0.2,
        clearcoatRoughness: 0.7,
        transparent: true,
        opacity: 0.95,
      });
  
      initScene(threeCanvas.value, {
        material,
        backgroundColor: 0xf0e68c, // Light yellow background
      });
    }
  });
  </script>
  
  <style scoped>
  .bear-canvas {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background: linear-gradient(135deg, #ff9a9e 10%, #fad0c4 100%);
  }
  </style>
  