<template>
  <div class="artist-page">
    <!-- 状态栏 -->
    <div class="status-bar">
      <div class="left-side">
        <div class="time">9:41</div>
      </div>
      <img class="right-side" :src="$getAssetUrl('/assets/battery-status.svg')" alt="信号状态" />
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
      <img class="search-icon" :src="$getAssetUrl('/assets/search-icon.svg')" alt="搜索" />
    </div>

    <!-- 分类选择区域 -->
    <div class="category-selector">
      <div
        class="category-button composer"
        :class="{ active: selectedCategory === '作曲' }"
        @click="selectCategory('作曲')"
      >
        作曲
      </div>
      <div
        class="category-button conductor"
        :class="{ active: selectedCategory === '指挥' }"
        @click="selectCategory('指挥')"
      >
        指挥
      </div>
      <div
        class="category-button pianist"
        :class="{ active: selectedCategory === '钢琴' }"
        @click="selectCategory('钢琴')"
      >
        钢琴
      </div>
    </div>

    <!-- 艺术家列表 -->
    <div class="artist-sections">
      <!-- 作曲区域 -->
      <div class="artist-section">
        <div class="section-header">
          <div class="section-title">
            <div class="title-text">作曲</div>
            <div class="count">665</div>
          </div>
          <div class="view-all-button">全部</div>
        </div>
        <div class="artist-list">
          <div
            class="artist-card"
            v-for="(artist, index) in composers"
            :key="index"
            @click="selectArtist(artist)"
          >
            <img
              class="artist-avatar"
              :src="artist.avatar"
              :alt="artist.chineseName"
            />
            <div class="artist-info">
              <div class="chinese-name">{{ artist.chineseName }}</div>
              <div class="english-name">{{ artist.englishName }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 指挥区域 -->
      <div class="artist-section">
        <div class="section-header">
          <div class="section-title">
            <div class="title-text">指挥</div>
            <div class="count">966</div>
          </div>
          <div class="view-all-button">全部</div>
        </div>
        <div class="artist-list">
          <div
            class="artist-card"
            v-for="(artist, index) in conductors"
            :key="index"
            @click="selectArtist(artist)"
          >
            <img
              class="artist-avatar"
              :src="artist.avatar"
              :alt="artist.chineseName"
            />
            <div class="artist-info">
              <div class="chinese-name">{{ artist.chineseName }}</div>
              <div class="english-name">{{ artist.englishName }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 钢琴区域 -->
      <div class="artist-section">
        <div class="section-header">
          <div class="section-title">
            <div class="title-text">钢琴</div>
            <div class="count">197</div>
          </div>
          <div class="view-all-button">全部</div>
        </div>
        <div class="artist-list">
          <div
            class="artist-card"
            v-for="(artist, index) in pianists"
            :key="index"
            @click="selectArtist(artist)"
          >
            <img
              class="artist-avatar"
              :src="artist.avatar"
              :alt="artist.chineseName"
            />
            <div class="artist-info">
              <div class="chinese-name">{{ artist.chineseName }}</div>
              <div class="english-name">{{ artist.englishName }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部Tab Bar -->
    <div class="tab-bar">
      <div class="tab-container">
        <div class="tab-bar-item" @click="switchTab('推荐')">
          <img class="tab-icon" :src="$getAssetUrl('/assets/home-icon.svg')" alt="首页" />
          <div class="tab-label">首页</div>
        </div>
        <div class="tab-bar-item" @click="switchTab('唱片')">
          <img class="tab-icon" :src="$getAssetUrl('/assets/disc-icon.svg')" alt="淘碟" />
          <div class="tab-label">淘碟</div>
        </div>
        <img class="center-tab" :src="$getAssetUrl('/assets/center-tab.svg')" alt="中心按钮" />
        <div class="tab-bar-item" @click="switchTab('动态')">
          <img class="tab-icon" :src="$getAssetUrl('/assets/activity-icon.svg')" alt="动态" />
          <div class="tab-label">动态</div>
        </div>
        <div class="tab-bar-item" @click="switchTab('我的')">
          <img class="tab-icon" :src="$getAssetUrl('/assets/profile-icon.svg')" alt="我的" />
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
const activeTab = ref("艺术家");

// 标签页数据
const tabs = ref(["推荐", "唱片", "艺术家", "唱片公司", "榜单"]);

// 当前选中的分类
const selectedCategory = ref("作曲");

// 定义 emit 事件
const emit = defineEmits<{
  switchPage: [page: string];
}>();

// 作曲家数据
const composers = ref([
  {
    chineseName: "徐建",
    englishName: "Faithe Tuttle",
    avatar: "/assets/artist-1.svg",
  },
  {
    chineseName: "陈梓鑫",
    englishName: "Bruno Harriman",
    avatar: "/assets/artist-2.svg",
  },
  {
    chineseName: "李瑶",
    englishName: "Freda Betty",
    avatar: "/assets/artist-3.svg",
  },
  {
    chineseName: "刘怡鑫",
    englishName: "Lance Bloomfield",
    avatar: "/assets/artist-4.svg",
  },
  {
    chineseName: "黄晓宣",
    englishName: "Matt Arthur",
    avatar: "/assets/artist-5.svg",
  },
  {
    chineseName: "廖冬",
    englishName: "Glenn Bartholomew",
    avatar: "/assets/artist-6.svg",
  },
]);

// 指挥家数据
const conductors = ref([
  {
    chineseName: "张江平",
    englishName: "Gill Bill",
    avatar: "/assets/conductor-1.svg",
  },
  {
    chineseName: "王熙",
    englishName: "Bell Floyd",
    avatar: "/assets/conductor-2.svg",
  },
  {
    chineseName: "李成逸",
    englishName: "Richards Aubrey",
    avatar: "/assets/conductor-3.svg",
  },
  {
    chineseName: "阎怡星",
    englishName: "Mike Ricardo",
    avatar: "/assets/conductor-4.svg",
  },
  {
    chineseName: "周泽龙",
    englishName: "Rachel Sheridan",
    avatar: "/assets/conductor-5.svg",
  },
  {
    chineseName: "于洪华",
    englishName: "Eli Thackeray",
    avatar: "/assets/conductor-6.svg",
  },
]);

// 钢琴家数据
const pianists = ref([
  {
    chineseName: "吕星",
    englishName: "Hawkins Ted",
    avatar: "/assets/pianist-1.svg",
  },
  {
    chineseName: "吴立",
    englishName: "Gordon Jimmy",
    avatar: "/assets/pianist-2.svg",
  },
  {
    chineseName: "李德夏",
    englishName: "Xavier Burne-Jones",
    avatar: "/assets/pianist-3.svg",
  },
  {
    chineseName: "苏迪",
    englishName: "Watson Greg",
    avatar: "/assets/pianist-4.svg",
  },
  {
    chineseName: "陈梓鑫",
    englishName: "Bruno Harriman",
    avatar: "/assets/pianist-5.svg",
  },
  {
    chineseName: "张德敏",
    englishName: "Octavia Bennett",
    avatar: "/assets/pianist-6.svg",
  },
]);

// 切换标签页
const switchTab = (tab: string) => {
  console.log("ArtistPage - 切换标签页到:", tab);
  activeTab.value = tab;
  if (tab !== "艺术家") {
    console.log("ArtistPage - 发送switchPage事件:", tab);
    emit("switchPage", tab);
  }
};

// 选择分类
const selectCategory = (category: string) => {
  console.log("选择分类:", category);
  selectedCategory.value = category;
  // 可以添加滚动到对应区域的逻辑
  scrollToSection(category);
};

// 滚动到指定区域
const scrollToSection = (category: string) => {
  // 这里可以添加平滑滚动到对应区域的逻辑
  const sections = document.querySelectorAll(".artist-section");
  let targetIndex = 0;

  switch (category) {
    case "作曲":
      targetIndex = 0;
      break;
    case "指挥":
      targetIndex = 1;
      break;
    case "钢琴":
      targetIndex = 2;
      break;
  }

  if (sections[targetIndex]) {
    sections[targetIndex].scrollIntoView({ behavior: "smooth" });
  }
};

// 选择艺术家
const selectArtist = (artist: any) => {
  console.log("选择艺术家:", artist.chineseName, artist.englishName);
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

.artist-page {
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: var(--token-color-6);
  width: 100%;
  height: 100vh;
  max-width: 375px;
  margin: 0 auto;
  padding-bottom: 78px; /* 为底部Tab Bar留出空间 */
  box-sizing: border-box;
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
  width: 222px;
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

/* 分类选择区域 */
.category-selector {
  display: flex;
  gap: 10px;
  padding: 20px;
  height: 88px;
  align-items: center;
}

.category-button {
  flex-grow: 1;
  width: 105px;
  height: 48px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  color: var(--token-color-7);
  font-family: "PingFangSC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
}

.category-button.composer {
  background: linear-gradient(
    90deg,
    rgb(99, 99, 99) 0%,
    rgb(133, 132, 132) 100%
  );
}

.category-button.conductor {
  background: linear-gradient(
    89deg,
    rgb(152, 160, 160) 0%,
    rgb(163, 173, 173) 100%
  );
}

.category-button.pianist {
  background: linear-gradient(
    90deg,
    rgb(116, 104, 104) 0%,
    rgb(65, 68, 68) 100%
  );
}

.category-button:hover {
  transform: scale(1.05);
}

.category-button.active {
  transform: scale(1.08);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

/* 艺术家区域 */
.artist-sections {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 170px); /* 减去状态栏、导航栏、分类选择器的高度 */
}

.artist-section {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 20px;
  background-color: var(--token-color-6);
  height: 33px;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 25px;
}

.title-text {
  color: var(--token-color-7);
  white-space: nowrap;
  font-family: "PingFangSC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
}

.count {
  color: var(--token-color-1);
  white-space: nowrap;
  font-family: "PingFangSC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
}

.view-all-button {
  border-radius: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  background-color: var(--token-color-3);
  color: var(--token-color-7);
  white-space: nowrap;
  font-family: "PingFangSC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.view-all-button:hover {
  background-color: rgba(37, 40, 48, 0.8);
}

/* 艺术家列表 */
.artist-list {
  display: flex;
  gap: 8px;
  padding: 10px 20px;
  overflow-x: auto;
  overflow-y: hidden;
  height: 209px;
  align-items: center;
  scroll-behavior: smooth;
  /* 添加渐变边缘提示可以滚动 */
  position: relative;
}

.artist-list::after {
  content: "";
  position: absolute;
  top: 0;
  right: 20px;
  width: 20px;
  height: 100%;
  background: linear-gradient(to right, transparent, var(--token-color-6));
  pointer-events: none;
}

.artist-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  background-color: var(--token-color-3);
  width: 140px;
  height: 189px;
  flex-shrink: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 6px;
}

.artist-card:hover {
  transform: translateY(-4px);
  background-color: rgba(37, 40, 48, 0.9);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.artist-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 8px;
}

.artist-info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 49px;
}

.chinese-name {
  color: var(--token-color-7);
  white-space: nowrap;
  font-family: "PingFangTC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 12px;
  line-height: 24px;
  margin-bottom: 4px;
}

.english-name {
  color: var(--token-color-1);
  white-space: nowrap;
  font-family: "PingFangSC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px;
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
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-bar-item:hover {
  transform: translateY(-2px);
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

/* 隐藏横向滚动条 */
.artist-list::-webkit-scrollbar {
  display: none;
}

.artist-list {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

/* 响应式设计 */
@media (min-width: 376px) {
  .artist-page {
    max-width: 100%;
  }

  .tab-bar {
    max-width: 100%;
  }

  .category-selector {
    padding: 20px 5%;
    justify-content: center;
  }

  .section-header {
    padding: 4px 5%;
  }

  .artist-list {
    padding: 10px 5%;
  }

  .artist-card {
    width: 160px;
    height: 220px;
  }

  .artist-avatar {
    width: 120px;
    height: 120px;
  }
}

@media (min-width: 768px) {
  .artist-page {
    max-width: 768px;
  }

  .category-selector {
    padding: 30px 10%;
  }

  .category-button {
    width: 120px;
    height: 56px;
    font-size: 16px;
  }

  .section-header {
    padding: 6px 10%;
    height: 40px;
  }

  .title-text {
    font-size: 20px;
    line-height: 28px;
  }

  .artist-list {
    padding: 15px 10%;
    height: 240px;
  }

  .artist-card {
    width: 180px;
    height: 240px;
    padding: 24px;
  }

  .artist-avatar {
    width: 132px;
    height: 132px;
  }

  .chinese-name {
    font-size: 14px;
    line-height: 26px;
  }

  .english-name {
    font-size: 13px;
    line-height: 18px;
    max-width: 130px;
  }
}

@media (min-width: 1024px) {
  .artist-page {
    max-width: 1024px;
  }

  .category-selector {
    padding: 40px 15%;
  }

  .category-button {
    width: 140px;
    height: 64px;
    font-size: 18px;
  }

  .section-header {
    padding: 8px 15%;
    height: 45px;
  }

  .title-text {
    font-size: 22px;
    line-height: 30px;
  }

  .artist-list {
    padding: 20px 15%;
    height: 280px;
  }

  .artist-card {
    width: 200px;
    height: 260px;
    padding: 28px;
  }

  .artist-avatar {
    width: 144px;
    height: 144px;
  }

  .chinese-name {
    font-size: 16px;
    line-height: 28px;
  }

  .english-name {
    font-size: 14px;
    line-height: 19px;
    max-width: 150px;
  }
}
</style>
