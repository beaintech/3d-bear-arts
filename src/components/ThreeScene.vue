<template>
  <div class="flex">
    <!-- Bear face background, placed first so it's rendered in the background -->
    <BearFace class="bear-background" />
     <!-- <BearFaceBlackAndWhite class="bear-background" />  -->

    <!-- Other bear components on top of the background -->
    <PinkBear :background="true" :cameraPosition="isBigMobile? 13: isBigTablet? 8: 6" :bodyPosition="{ x:-15, y:0, z: 0 }" class="bear-page"/>
    <PurpleBear :background="true" :cameraPosition="isBigMobile? 10: isBigTablet? 6: 4" :bodyPosition="{ x: -15,  y: 0, z: 0 }" class="bear-page"/>
    <BlueBear :background="true" :cameraPosition="isBigMobile? 13: isBigTablet? 8: 6" :bodyPosition="{ x: -18,  y: 0, z: 0 }" class="bear-page"/>
  </div>
</template>

<script setup lang="ts">
import PinkBear from './PinkBear.vue';
import PurpleBear from './PurpleBear.vue';
import BlueBear from './BlueBear.vue';
import PinkBlueBear from './PinkBlueBear.vue';
import BearFace from './BearFace.vue';
import BearFaceBlackAndWhite from './BearFaceBlackAndWhite.vue';
import { isBigTablet, isBigMobile } from '../utils/window-size';

</script>

<style scoped>
.flex {
  display: flex;
  flex-direction: row;
  height: 100vh;
  justify-content: center;
  align-items: center;
  position: relative; 
  background: radial-gradient(circle at 50% 50%, rgba(255, 182, 193, 0.8), rgba(135, 206, 250, 0.8), rgba(254, 0, 127, 0.993));
}

.bear-page {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;

}

.bear-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
</style>
