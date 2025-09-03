<template>
  <div class="home-page">
    <!-- 状态栏 -->
    <div class="status-bar">
      <div class="left-side">
        <div class="time">9:41</div>
      </div>
      <img class="right-side" src="/assets/battery-status.svg" alt="信号状态" />
    </div>

    <!-- 顶部导航 -->
    <div class="top-nav">
      <div class="nav-tabs">
        <div
          v-for="tab in tabs"
          :key="tab"
          class="tab-item"
          :class="{ active: activeTab === tab }"
          @click="switchTab(tab)"
        >
          <div class="tab-text">{{ tab }}</div>
          <div
            class="tab-indicator"
            :class="{ 'opacity-0': activeTab !== tab }"
          ></div>
        </div>
      </div>
      <img class="search-icon" src="/assets/search-icon.svg" alt="搜索" />
    </div>

    <!-- 推荐Banner -->
    <div class="banner-section">
      <img class="banner-image" src="/assets/banner.png" alt="推荐Banner" />
    </div>

    <!-- 歌单推荐标题 -->
    <div class="playlist-header">
      <div class="header-title">
        <div class="title-text">歌单推荐</div>
      </div>
      <div class="all-button">
        <div class="button-text">全部</div>
      </div>
    </div>

    <!-- 推荐歌单 -->
    <div class="featured-playlist">
      <div class="playlist-background">
        <img class="bg-image" src="/assets/featured-bg.png" alt="背景" />
        <div class="blur-overlay"></div>
        <img
          class="album-cover"
          src="/assets/featured-album.png"
          alt="专辑封面"
        />
      </div>
      <div class="playlist-info">
        <div class="playlist-title">
          这个国产的Mac包管理工具，是否能成为HomeBrew的替代品
        </div>
        <div class="playlist-desc">
          我通过镜子向一颗心脏展示一些妙不可言的磨镜视频，心脏吃不消这么香艳刺激的场面，坏掉了。
        </div>
        <div class="play-button" @click="playPlaylist">
          <img class="music-note" src="/assets/music-note.svg" alt="播放" />
          <div class="play-count">642</div>
        </div>
      </div>
    </div>

    <!-- 歌单网格 -->
    <div class="playlist-grid">
      <!-- 第一行 -->
      <div class="grid-row">
        <div
          class="playlist-item"
          v-for="(album, index) in albums.slice(0, 3)"
          :key="index"
          @click="clickAlbum(index)"
        >
          <img
            class="album-image"
            :src="`/assets/album-${index + 1}.png`"
            :alt="album.title"
          />
          <div class="album-title">{{ album.title }}</div>
        </div>
      </div>
      <!-- 第二行 -->
      <div class="grid-row">
        <div
          class="playlist-item"
          v-for="(album, index) in albums.slice(3, 6)"
          :key="index + 3"
          @click="clickAlbum(index + 3)"
        >
          <img
            class="album-image"
            :src="`/assets/album-${index + 4}.png`"
            :alt="album.title"
          />
          <div class="album-title">{{ album.title }}</div>
        </div>
      </div>
      <!-- 第三行 -->
      <div class="grid-row">
        <div
          class="playlist-item"
          v-for="(album, index) in albums.slice(6, 9)"
          :key="index + 6"
          @click="clickAlbum(index + 6)"
        >
          <img
            class="album-image"
            :src="`/assets/album-${index + 7}.png`"
            :alt="album.title"
          />
          <div class="album-title">{{ album.title }}</div>
        </div>
      </div>
    </div>

    <!-- 底部Tab Bar -->
    <div class="tab-bar">
      <div class="tab-container">
        <div class="tab-bar-item active">
          <img class="tab-icon" src="/assets/home-icon.svg" alt="首页" />
          <div class="tab-label">首页</div>
        </div>
        <div class="tab-bar-item">
          <img class="tab-icon" src="/assets/disc-icon.svg" alt="淘碟" />
          <div class="tab-label">淘碟</div>
        </div>
        <img class="center-tab" src="/assets/center-tab.svg" alt="中心按钮" />
        <div class="tab-bar-item">
          <img class="tab-icon" src="/assets/activity-icon.svg" alt="动态" />
          <div class="tab-label">动态</div>
        </div>
        <div class="tab-bar-item">
          <img class="tab-icon" src="/assets/profile-icon.svg" alt="我的" />
          <div class="tab-label">我的</div>
        </div>
      </div>
      <div class="home-indicator">
        <div class="indicator-bar"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// 当前激活的标签页
const activeTab = ref("推荐");

// 标签页数据
const tabs = ref(["推荐", "唱片", "艺术家", "唱片公司", "榜单"]);

// 专辑数据
const albums = ref([
  { title: "纯装机小白，不想上烈士墙了，有什么需要注意的？" },
  { title: "一块可以无限吸收热量的冰块可以拿来干什么?" },
  { title: "美国很大，每一个州就像一个国家" },
  { title: "为什么你的电脑还没用上国产 CPU？" },
  {
    title:
      "为什么丰巢亏损这么严重，并且已经连亏5年，大家还是不能接受丰巢收费？",
  },
  { title: "怎样调色才好看？从Ins热门摄影照片中总结出的3大规律！" },
  { title: "鞠婧祎和杨超越两个美少女突然打了一架，谁的单兵战斗力更强 ？" },
  { title: "秘鲁紧急抄作业，没想到疫情竟然更严重了！" },
  { title: "你小时候做过什么可以吹嘘一辈子的事情？" },
]);

// 切换标签页
const switchTab = (tab: string) => {
  activeTab.value = tab;
};

// 播放歌单
const playPlaylist = () => {
  console.log("播放歌单");
};

// 点击专辑
const clickAlbum = (index: number) => {
  console.log("点击专辑:", albums.value[index].title);
};
</script>

<style scoped>
/* CSS变量定义 */
:root {
  --token-color: rgba(247, 108, 90, 1);
  --token-color-1: rgba(129, 131, 135, 1);
  --token-color-2: rgba(73, 76, 82, 1);
  --token-color-3: rgba(37, 40, 48, 1);
  --token-color-4: rgba(26, 29, 37, 1);
  --label-color-dark-primary: rgba(255, 255, 255, 1);
  --token-color-5: linear-gradient(
    180deg,
    rgba(232, 205, 168, 1) 0%,
    rgba(244, 230, 207, 1) 100%
  );
  --token-color-6: rgba(26, 29, 37, 1);
  --token-color-7: rgba(255, 255, 255, 1);
  --token-color-8: rgba(232, 205, 167, 1);
}

.home-page {
  position: relative;
  overflow: hidden;
  background-color: var(--token-color-6);
  width: 100%;
  min-height: 100vh;
  max-width: 375px;
  margin: 0 auto;
}

/* 状态栏 */
.status-bar {
  overflow: hidden;
  background-color: var(--token-color-4);
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 14px 0 21px;
}

.left-side {
  width: 54px;
  height: 21px;
}

.time {
  color: var(--label-color-dark-primary);
  font-family: "SFProText-Semibold", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  border-radius: 24px;
  padding-top: 1px;
}

.right-side {
  width: 66.66px;
  height: 11.34px;
}

/* 顶部导航 */
.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 4px 16px 0;
  background-color: var(--token-color-4);
  height: 38px;
}

.nav-tabs {
  display: flex;
  width: 220px;
  height: 34px;
}

.tab-item {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-right: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-item:hover {
  transform: translateY(-1px);
}

.tab-item.active .tab-text {
  color: var(--token-color-7);
  font-size: 14px;
  line-height: 20px;
}

.tab-item .tab-text {
  color: var(--token-color-1);
  font-family: "PingFangSC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  padding: 0 6px;
  white-space: nowrap;
}

.tab-indicator {
  background-color: var(--token-color-8);
  height: 2px;
  width: 100%;
}

.opacity-0 {
  opacity: 0;
}

.search-icon {
  width: 22px;
  height: 22px;
}

/* Banner区域 */
.banner-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  height: 180px;
}

.banner-image {
  border-radius: 4px;
  object-fit: cover;
  width: 100%;
  height: 140px;
}

/* 歌单推荐标题 */
.playlist-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 20px;
  background-color: var(--token-color-6);
  height: 33px;
}

.header-title {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 72px;
  height: 25px;
}

.title-text {
  color: var(--token-color-8);
  white-space: nowrap;
  font-family: "PingFangSC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  width: 72px;
  height: 25px;
}

.all-button {
  border-radius: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  padding: 4px 8px;
  background-color: var(--token-color-3);
  width: 36px;
  height: 22px;
}

.button-text {
  color: var(--token-color-7);
  white-space: nowrap;
  font-family: "PingFangSC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  width: 20px;
  height: 14px;
}

/* 推荐歌单 */
.featured-playlist {
  height: 190px;
  position: relative;
}

.playlist-background {
  position: absolute;
  top: 10px;
  left: 20px;
  right: 20px;
  width: calc(100% - 40px);
  height: 170px;
}

.bg-image {
  object-fit: cover;
  position: absolute;
  top: 28px;
  left: 24px;
  right: 11px;
  width: 300px;
  height: 123px;
}

.blur-overlay {
  backdrop-filter: blur(40px);
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 15px;
  left: 15px;
  right: 0;
  width: 320px;
  height: 149px;
}

.album-cover {
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 120px;
  height: 120px;
}

.playlist-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: absolute;
  top: 37px;
  left: 159px;
  right: 31px;
  width: 185px;
  height: 124px;
}

.playlist-title {
  position: relative;
  overflow: hidden;
  color: var(--token-color-7);
  font-family: "PingFangSC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 14px;
  line-height: 18px;
  width: 179px;
  height: 36px;
}

.playlist-desc {
  color: var(--token-color-1);
  font-family: "PingFangSC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 11px;
  line-height: 14px;
  width: 185px;
  height: 42px;
}

.play-button {
  border-radius: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  padding: 4px 8px 4px 4px;
  background-color: var(--token-color-3);
  width: 47px;
  height: 22px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.play-button:hover {
  background-color: rgba(37, 40, 48, 0.8);
  transform: scale(1.05);
}

.music-note {
  width: 14px;
  height: 14px;
}

.play-count {
  color: var(--token-color-7);
  white-space: nowrap;
  font-family: "PingFangSC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  width: 19px;
  height: 14px;
}

/* 歌单网格 */
.playlist-grid {
  display: flex;
  flex-direction: column;
  height: 519px;
}

.grid-row {
  display: flex;
  gap: 17.5px;
  padding: 10px 20px 20px;
  height: 173px;
}

.playlist-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
  flex-grow: 1;
  width: 100px;
  height: 143px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.playlist-item:hover {
  transform: translateY(-2px);
}

.playlist-item:hover .album-image {
  transform: scale(1.05);
}

.album-image {
  object-fit: cover;
  width: 100px;
  height: 100px;
  border-radius: 4px;
  transition: transform 0.3s ease;
}

.album-title {
  color: var(--token-color-7);
  font-family: "PingFangSC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 14px;
  line-height: 18px;
  width: 100px;
  height: 35px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

/* 底部Tab Bar */
.tab-bar {
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  height: 78px;
}

.tab-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 5px 0 0;
  background-color: var(--token-color-6);
  height: 51px;
}

.tab-bar-item {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  padding: 2px 24px;
  width: 72.6px;
  height: 46px;
}

.tab-bar-item.active .tab-label {
  color: #ffffff;
}

.tab-bar-item .tab-label {
  color: var(--token-color-2);
  white-space: nowrap;
  font-family: "SFProText-Medium", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  width: 20px;
  height: 14px;
}

.tab-icon {
  width: 24px;
  height: 24px;
}

.center-tab {
  flex-grow: 1;
  width: 84.6px;
  height: 38px;
}

.home-indicator {
  position: relative;
  background-color: var(--token-color-4);
  height: 27px;
}

.indicator-bar {
  border-radius: 100px;
  background-color: var(--label-color-dark-primary);
  position: absolute;
  left: 120.5px;
  bottom: 8px;
  width: 134px;
  height: 5px;
}

/* 响应式设计 */
@media (min-width: 376px) {
  .home-page {
    max-width: 100%;
  }

  .tab-bar {
    max-width: 100%;
  }

  .banner-section {
    padding: 20px 5%;
  }

  .playlist-header {
    padding: 4px 5%;
  }

  .playlist-background {
    left: 5%;
    right: 5%;
    width: 90%;
  }

  .grid-row {
    padding: 10px 5% 20px;
    justify-content: center;
    gap: 2%;
  }

  .playlist-item {
    width: 30%;
    max-width: 120px;
  }
}

@media (min-width: 768px) {
  .home-page {
    max-width: 768px;
  }

  .grid-row {
    gap: 3%;
  }

  .playlist-item {
    width: 28%;
    max-width: 150px;
  }

  .album-image {
    width: 100%;
    height: auto;
    aspect-ratio: 1;
  }
}

@media (min-width: 1024px) {
  .home-page {
    max-width: 1024px;
  }

  .banner-section {
    padding: 30px 10%;
  }

  .playlist-header {
    padding: 6px 10%;
  }

  .playlist-background {
    left: 10%;
    right: 10%;
    width: 80%;
  }

  .grid-row {
    padding: 15px 10% 30px;
    gap: 4%;
  }

  .playlist-item {
    width: 26%;
    max-width: 200px;
  }
}
</style>
