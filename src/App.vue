<template>
  <div class="app-container">
    <HomePage />
  </div>
</template>

<script setup lang="ts">
import HomePage from "./components/HomePage.vue";
</script>

<style>
/* 全局重置样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #1a1d25;
  color: #ffffff;
}

#app {
  width: 100%;
  min-height: 100vh;
}
</style>

<style scoped>
.app-container {
  width: 100%;
  min-height: 100vh;
  background-color: #1a1d25;
  display: flex;
  justify-content: center;
}
</style>
