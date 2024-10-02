<template>
  <div class="bear-container">
    <div ref="threeCanvas" class="bear-canvas"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as THREE from 'three';

// Set up Three.js scene, camera, and renderer
const threeCanvas = ref<HTMLDivElement | null>(null);

onMounted(() => {
  if (threeCanvas.value) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    threeCanvas.value.appendChild(renderer.domElement);

    // Add your bear model here (same as the code in the index.html provided)
    const bearGroup = new THREE.Group();

    // Add body parts (same as your existing code for the bear)
    // I will summarize it for brevity, but you can copy the full part from your HTML code

    const bodyGeometry = new THREE.SphereGeometry(1, 32, 32);
    const bodyMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xFF69B4, // Hot Pink color
      metalness: 0.2,
      roughness: 0.6,
      clearcoat: 0.1,
      clearcoatRoughness: 0.8,
      transparent: true,
      opacity: 0.99,
    });

    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    bearGroup.add(body);

    // Add all other parts of the bear as in your provided code

    scene.add(bearGroup);

    // Camera positioning and animation
    camera.position.set(0, 1, 4);
    camera.lookAt(0, 0, 0);

    function animate() {
      requestAnimationFrame(animate);
      bearGroup.rotation.y += 0.02; // Animation
      renderer.render(scene, camera);
    }

    animate();

    // Handle window resizing
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }
});
</script>

<style scoped>
.bear-container {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: radial-gradient(circle at 50% 50%, rgba(255, 182, 193, 0.8), rgba(135, 206, 250, 0.8), rgba(254, 0, 127, 0.993));
  background-size: 200% 200%;
  background-repeat: no-repeat;
  animation: heartTunnel 1s infinite linear;
}

@keyframes heartTunnel {
  0% {
    background-size: 150% 150%;
    background-position: center;
  }
  50% {
    background-size: 100% 100%;
    background-position: center;
  }
  100% {
    background-size: 150% 150%;
    background-position: center;
  }
}
</style>
