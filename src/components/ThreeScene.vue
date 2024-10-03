<template>
  <div class="flex">
    <PinkBear :background="true" :cameraPosition="8" :bodyPosition="{ x:-15, y:0, z: 0 }" class="bear-page"/>
    <PurpleBear :background="true" :cameraPosition="8" :bodyPosition="{ x: -15,  y: 0, z: 0 }" class="bear-page"/>
    <PinkBlueBear :background="true" :cameraPosition="8" :bodyPosition="{ x: -18,  y: 0, z: 0 }" class="bear-page"/>
    <BearFace class="bear-page" />
</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as THREE from 'three';

import PinkBear from './PinkBear.vue';
import PurpleBear from './PurpleBear.vue';
import PinkBlueBear from './PinkBlueBear.vue';
import BearFace from './BearFace.vue';

const background = ref(false);
// Reactive state for bear and camera position
const bodyPosition = ref({ x: 0, y: 0, z: 0 });
const cameraPosition = ref(4);

</script>

<style scoped>

.flex {
  display: flex;
  flex-direction: row;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

.bear-page {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;;
}

.bear-group {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 100vw;
}

.bear-container {
  width: 49%;
}

</style>
