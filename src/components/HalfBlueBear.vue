<template>
    <div ref="threeCanvas" class="three-canvas"></div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import * as THREE from 'three';
  
  const threeCanvas = ref<HTMLDivElement | null>(null);
  
onMounted(() => {
  if (threeCanvas.value) {
    // Initialize the Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    threeCanvas.value.appendChild(renderer.domElement);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Create materials for both bears
    const cyanMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x00FFFF, // Cyan
      metalness: 0.2,
      roughness: 0.5,
      clearcoat: 0.1,
      clearcoatRoughness: 0.8,
      transparent: true,
      opacity: 0.99,
    });

    const pinkMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xFF69B4, // Pink
      metalness: 0.2,
      roughness: 0.5,
      clearcoat: 0.1,
      clearcoatRoughness: 0.8,
      transparent: true,
      opacity: 0.99,
    });

    // Function to create a bear
    const createBear = (material) => {
      const bearGroup = new THREE.Group();

      // Body
      const bodyGeometry = new THREE.SphereGeometry(1, 32, 32);
      const body = new THREE.Mesh(bodyGeometry, material);
      body.scale.set(0.85, 0.85, 0.8);
      body.position.y = -0.2;
      bearGroup.add(body);

      // Head
      const headGeometry = new THREE.SphereGeometry(0.6, 32, 32);
      const head = new THREE.Mesh(headGeometry, material);
      head.scale.set(1, 0.95, 0.95);
      head.position.set(0, 1, 0);
      bearGroup.add(head);

      // Ears
      const earGeometry = new THREE.SphereGeometry(0.25, 32, 32);
      const leftEar = new THREE.Mesh(earGeometry, material);
      leftEar.position.set(-0.45, 1.35, -0.1);
      bearGroup.add(leftEar);

      const rightEar = new THREE.Mesh(earGeometry, material);
      rightEar.position.set(0.45, 1.35, -0.1);
      bearGroup.add(rightEar);

      return bearGroup;
    };

    // Create the main bear group that will contain both bears
    const bearGroup = new THREE.Group();

    // Create two bears, one cyan and one pink
    const leftBear = createBear(cyanMaterial);
    const rightBear = createBear(pinkMaterial);

    // Slightly offset each bear by a very small amount to overlap perfectly
    leftBear.position.x = -0.01;  // Slight shift to the left
    rightBear.position.x = 0.01;  // Slight shift to the right

    // Add both bears to the main group
    bearGroup.add(leftBear);
    bearGroup.add(rightBear);

    // **Increase the size of the entire bear group**
    bearGroup.scale.set(1.5, 1.5, 1.5); // Adjust this scale to change the size

    // Add the main bear group to the scene
    scene.add(bearGroup);

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      bearGroup.rotation.y += 0.01; // Rotate the entire bear group
      renderer.render(scene, camera);
    }

    camera.position.z = 5;
    animate();
  }
});

  </script>
  
  <style scoped>
  .three-canvas {
    width: 100vw;
    height: 100vh;
    background: black;
  }
  </style>
  