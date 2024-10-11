<template>
  <div ref="cubeWrapper" class="cube-wrapper">
    <canvas ref="canvasRef" class="renderCanvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';

const canvasRef = ref<HTMLCanvasElement | null>(null);
let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer;
let cube: THREE.Mesh;

// Create a basic cube material
function createCubeMaterial(): THREE.MeshBasicMaterial {
  return new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
}

// Create a cube mesh
function createCube(): THREE.Mesh {
  const geometry = new THREE.BoxGeometry(4, 4, 4);
  const material = createCubeMaterial();
  return new THREE.Mesh(geometry, material);
}

// Set up the scene
function setupScene(canvas: HTMLCanvasElement) {
  // Create the scene
  scene = new THREE.Scene();

  // Create the camera
  camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
  camera.position.z = 10;

  // Create the renderer
  renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  // Add the cube to the scene
  cube = createCube();
  scene.add(cube);

  // Render the scene once
  renderer.render(scene, camera);
}

// Resize the renderer when the window size changes
function onResize() {
  if (!canvasRef.value || !renderer || !camera) return;
  const { clientWidth, clientHeight } = canvasRef.value;
  camera.aspect = clientWidth / clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(clientWidth, clientHeight);
  renderer.render(scene, camera);
}

onMounted(() => {
  if (!canvasRef.value) return;
  setupScene(canvasRef.value);
  window.addEventListener('resize', onResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize);
  renderer.dispose();
});
</script>

<style scoped>
.cube-wrapper {
  width: 100%;
  height: 100%;
}

.renderCanvas {
  width: 100%;
  height: 100%;
  background: transparent;
}
</style>
