<template>
  <div class="flex">
    <!-- Bear face background, placed first so it's rendered in the background -->
    <BearFace class="bear-background" />
     <!-- <BearFaceBlackAndWhite class="bear-background" />  -->

    <!-- Other bear components on top of the background -->
    <PinkBear :background="true" :cameraPosition="6" :bodyPosition="{ x:-15, y:0, z: 0 }" class="bear-page"/>
    <PurpleBear :background="true" :cameraPosition="4" :bodyPosition="{ x: -15,  y: 0, z: 0 }" class="bear-page"/>
    <BlueBear :background="true" :cameraPosition="6" :bodyPosition="{ x: -18,  y: 0, z: 0 }" class="bear-page"/>
  </div>
</template>

<script setup lang="ts">
import PinkBear from './PinkBear.vue';
import PurpleBear from './PurpleBear.vue';
import BlueBear from './BlueBear.vue';
import PinkBlueBear from './PinkBlueBear.vue';
import BearFace from './BearFace.vue';
import BearFaceBlackAndWhite from './BearFaceBlackAndWhite.vue';

</script>

<style scoped>
.flex {
  display: flex;
  flex-direction: row;
  height: 100vh;
  justify-content: center;
  align-items: center;
  position: relative; /* Ensure the child elements respect the position */
}

.bear-page {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 1; /* Ensure these elements are above the background */
}

.bear-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1; /* Lower z-index to place it behind everything */
}
</style>
