<template>
  <div ref="threeCanvas" id="three-canvas"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { initScene } from '../three/scene';

const threeCanvas = ref<HTMLDivElement | null>(null);

onMounted(() => {
  if (threeCanvas.value) {
    initScene(threeCanvas.value);
  }
});
</script>

<style scoped>
#three-canvas {
  width: 100%;
  height: 100vh;
  display: block;
}
</style>
