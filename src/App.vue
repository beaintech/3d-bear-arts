<template>
  <nav>
      <router-link to="/pink">Pink Bear</router-link>
      <router-link to="/purple">Purple Bear</router-link>
      <router-link to="/pinkBlue">Pink Blue Bear</router-link>
      <router-link to="/diamond">Diamond Bear</router-link>
      <router-link to="/glass">Glass Bear</router-link>
    </nav>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
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
