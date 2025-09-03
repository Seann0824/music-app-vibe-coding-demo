<template>
  <div class="app-container">
    <HomePage v-if="currentPage === '推荐'" @switch-page="switchPage" />
    <VinylPage v-else-if="currentPage === '唱片'" @switch-page="switchPage" />
    <ArtistPage
      v-else-if="currentPage === '艺术家'"
      @switch-page="switchPage"
    />
    <LabelPage
      v-else-if="currentPage === '唱片公司'"
      @switch-page="switchPage"
    />
    <RankingPage v-else-if="currentPage === '榜单'" @switch-page="switchPage" />
    <ActivityPage
      v-else-if="currentPage === '动态'"
      @switch-page="switchPage"
    />
    <ProfilePage v-else-if="currentPage === '我的'" @switch-page="switchPage" />
    <div v-else class="coming-soon">
      <h2>{{ currentPage }}页面</h2>
      <p>即将上线...</p>
      <button @click="switchPage('推荐')" class="back-button">返回首页</button>
    </div>

    <!-- 全局共享的底部导航栏 -->
    <TabBar :active-tab="currentPage" @switch-tab="switchPage" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import HomePage from "./components/HomePage.vue";
import VinylPage from "./components/VinylPage.vue";
import ArtistPage from "./components/ArtistPage.vue";
import LabelPage from "./components/LabelPage.vue";
import RankingPage from "./components/RankingPage.vue";
import ActivityPage from "./components/ActivityPage.vue";
import ProfilePage from "./components/ProfilePage.vue";
import TabBar from "./components/TabBar.vue";

// 当前页面
const currentPage = ref("推荐");

// 切换页面
const switchPage = (page: string) => {
  console.log("切换页面到:", page);
  currentPage.value = page;
};
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
  height: 100vh;
}
</style>

<style scoped>
.app-container {
  width: 100%;
  height: 100vh;
  background-color: #1a1d25;
  display: flex;
  justify-content: center;
}

.coming-soon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #ffffff;
  text-align: center;
  padding: 20px;
  max-width: 375px;
  width: 100%;
}

.coming-soon h2 {
  font-size: 24px;
  margin-bottom: 16px;
  color: rgba(232, 205, 167, 1);
}

.coming-soon p {
  font-size: 16px;
  margin-bottom: 32px;
  color: rgba(129, 131, 135, 1);
}

.back-button {
  background-color: rgba(37, 40, 48, 1);
  color: #ffffff;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.back-button:hover {
  background-color: rgba(37, 40, 48, 0.8);
  transform: translateY(-2px);
}
</style>
