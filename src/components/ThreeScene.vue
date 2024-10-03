<template>
  <div class="bear-page">
    <PinkBear :background="true" :cameraPosition="4" :bodyPosition="{ x:0, y: 0, z: 0 }"/>
    <PurpleBear :background="true" :cameraPosition="4" :bodyPosition="{ x: 0,  y: 0, z: 0 }"/>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as THREE from 'three';

import PinkBear from './PinkBear.vue';
import PurpleBear from './PurpleBear.vue';

const background = ref(false);
// Reactive state for bear and camera position
const bodyPosition = ref({ x: 0, y: 0, z: 0 });
const cameraPosition = ref(4);

// Function to move bears left
const moveBearsLeft = () => {
  // Move bears' x position to the left
  bodyPosition.value.x -= 1;
  
  // Move camera in sync with the bears
  cameraPosition.value -= 1;
};

</script>

<style scoped>
.bear-page {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#three-canvas {
  margin: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: radial-gradient(circle at 50% 50%, rgba(255, 182, 193, 0.8), rgba(135, 206, 250, 0.8), rgba(254, 0, 127, 0.993));
  background-size: 200% 200%;
  background-repeat: no-repeat;
  animation: heartTunnel 1s infinite linear;
}

/* Keyframes for heart tunnel-like animation */
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
