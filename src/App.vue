<template>
  <nav>
    <router-link to="/3d-bear-arts">Home</router-link>
      <router-link to="/3d-bear-arts/pink">Pink Bear</router-link>
      <router-link to="/3d-bear-arts/purple">Purple Bear</router-link>
      <router-link to="/3d-bear-arts/pinkBlue">Pink Blue Bear</router-link>
      <router-link to="/3d-bear-arts/diamond">Diamond Bear</router-link>
      <router-link to="/3d-bear-arts/glass">Glass Bear</router-link>
    </nav>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import ThreeScene from './components/ThreeScene.vue';

// No additional script needed for the main layout in this case
</script>

<style scoped>
  nav {
    position: absolute;
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
  }

  router-link {
    padding: 10px;
    background-color: #ff69b4;
    color: white;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
  }
</style>
