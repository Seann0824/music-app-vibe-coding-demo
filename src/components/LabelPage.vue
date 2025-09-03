<template>
  <div class="label-page">
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

    <!-- 标题区域 -->
    <div class="title-section">
      <div class="title-text">全部唱片公司</div>
      <div class="count">{{ labels.length }}</div>
    </div>

    <!-- 筛选区域 -->
    <div class="filter-section">
      <div class="filter-info">
        <div class="filter-text">全部</div>
        <div class="filter-hint">A开头</div>
      </div>
      <div class="filter-button" @click="showFilter">
        <img class="filter-icon" :src="$getAssetUrl('/assets/filter-icon.svg')" alt="筛选" />
        <div class="filter-label">筛选</div>
      </div>
    </div>

    <!-- 唱片公司网格 -->
    <div class="label-grid">
      <div
        class="label-card"
        v-for="(label, index) in labels"
        :key="index"
        @click="selectLabel(label)"
      >
        <img
          class="label-avatar"
          :src="label.avatar"
          :alt="label.englishName"
        />
        <div class="label-info">
          <div class="english-name">{{ label.englishName }}</div>
          <div class="chinese-name">{{ label.chineseName }}</div>
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
const activeTab = ref("唱片公司");

// 标签页数据
const tabs = ref(["推荐", "唱片", "艺术家", "唱片公司", "榜单"]);

// 定义 emit 事件
const emit = defineEmits<{
  switchPage: [page: string];
}>();

// 获取资源路径的辅助函数
const getAssetUrl = (path: string) => {
  const cleanPath = path.replace(/^\/+/, '');
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

// 唱片公司数据
const labels = ref([
  {
    englishName: "Esther Mike",
    chineseName: "银河造梦机",
    avatar: getAssetUrl("/assets/label-1.svg"),
  },
  {
    englishName: "Freda Betty",
    chineseName: "派大星的海洋裤",
    avatar: getAssetUrl("/assets/label-2.svg"),
  },
  {
    englishName: "Henry Arthur",
    chineseName: "小熊吹奶盖",
    avatar: getAssetUrl("/assets/label-3.svg"),
  },
  {
    englishName: "Maud Betsy",
    chineseName: "白雪公主的后妈",
    avatar: getAssetUrl("/assets/label-4.svg"),
  },
  {
    englishName: "Fisher Marjorie",
    chineseName: "討厌和人归類",
    avatar: getAssetUrl("/assets/label-5.svg"),
  },
  {
    englishName: "Hawkins Ted",
    chineseName: "有薄雾的夏日",
    avatar: getAssetUrl("/assets/label-6.svg"),
  },
  {
    englishName: "Myra Stuart",
    chineseName: "内只松鼠好眼熟",
    avatar: getAssetUrl("/assets/label-7.svg"),
  },
  {
    englishName: "Glenn Bartholomew",
    chineseName: "来一份甜豆",
    avatar: getAssetUrl("/assets/label-8.svg"),
  },
  {
    englishName: "Shirley Grote",
    chineseName: "脑袋困掉了嗷",
    avatar: getAssetUrl("/assets/label-9.svg"),
  },
  {
    englishName: "Jeffrey Tracy",
    chineseName: "比基尼小熊",
    avatar: getAssetUrl("/assets/label-10.svg"),
  },
  {
    englishName: "Cora Middleton",
    chineseName: "元气少女李逵",
    avatar: getAssetUrl("/assets/label-11.svg"),
  },
  {
    englishName: "Kristin Dickey",
    chineseName: "偷摘天上云",
    avatar: getAssetUrl("/assets/label-12.svg"),
  },
]);

// 切换标签页
const switchTab = (tab: string) => {
  console.log("LabelPage - 切换标签页到:", tab);
  activeTab.value = tab;
  if (tab !== "唱片公司") {
    console.log("LabelPage - 发送switchPage事件:", tab);
    emit("switchPage", tab);
  }
};

// 显示筛选
const showFilter = () => {
  console.log("显示筛选选项");
};

// 选择唱片公司
const selectLabel = (label: any) => {
  console.log("选择唱片公司:", label.englishName, label.chineseName);
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

.label-page {
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
  width: 224px;
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

/* 标题区域 */
.title-section {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 0 4px 20px;
  height: 37px;
}

.title-text {
  color: var(--token-color-7);
  white-space: nowrap;
  font-family: "PingFangSC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 18px;
  line-height: 25px;
  width: 108px;
  height: 25px;
}

.count {
  color: var(--token-color-1);
  white-space: nowrap;
  font-family: "PingFangSC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  width: 22px;
  height: 17px;
}

/* 筛选区域 */
.filter-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 4px 20px;
  background-color: var(--token-color-6);
  height: 30px;
}

.filter-info {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 59px;
  height: 17px;
}

.filter-text {
  color: var(--token-color-7);
  white-space: nowrap;
  font-family: "PingFangSC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  width: 24px;
  height: 17px;
}

.filter-hint {
  color: var(--token-color-1);
  white-space: nowrap;
  font-family: "PingFangSC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  width: 27px;
  height: 14px;
}

.filter-button {
  border-radius: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  padding: 4px 8px;
  background-color: var(--token-color-3);
  width: 52px;
  height: 22px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-button:hover {
  background-color: rgba(37, 40, 48, 0.8);
  transform: scale(1.05);
}

.filter-icon {
  width: 14px;
  height: 14px;
}

.filter-label {
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

/* 唱片公司网格 */
.label-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px 15px;
  padding: 10px 20px;
  min-height: calc(
    100vh - 219px
  ); /* 减去状态栏、导航栏、标题、筛选、底部栏的高度 */
}

.label-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 30px;
  background-color: var(--token-color-3);
  width: 160px;
  height: 189px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 6px;
}

.label-card:hover {
  transform: translateY(-4px);
  background-color: rgba(37, 40, 48, 0.9);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.label-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 8px;
}

.label-info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 49px;
}

.english-name {
  color: var(--token-color-7);
  white-space: nowrap;
  font-family: "PingFangTC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 12px;
  line-height: 24px;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px;
}

.chinese-name {
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

/* 响应式设计 */
@media (min-width: 376px) {
  .label-page {
    max-width: 100%;
  }

  .tab-bar {
    max-width: 100%;
  }

  .label-grid {
    padding: 15px 5%;
    gap: 20px 20px;
  }

  .label-card {
    width: 180px;
    height: 220px;
  }

  .label-avatar {
    width: 120px;
    height: 120px;
  }

  .english-name,
  .chinese-name {
    max-width: 120px;
  }
}

@media (min-width: 768px) {
  .label-page {
    max-width: 768px;
  }

  .label-grid {
    grid-template-columns: repeat(3, 1fr);
    padding: 20px 8%;
    gap: 25px 25px;
  }

  .label-card {
    width: 200px;
    height: 240px;
    padding: 24px 32px;
  }

  .label-avatar {
    width: 136px;
    height: 136px;
  }

  .english-name {
    font-size: 14px;
    line-height: 26px;
    max-width: 136px;
  }

  .chinese-name {
    font-size: 13px;
    line-height: 18px;
    max-width: 136px;
  }
}

@media (min-width: 1024px) {
  .label-page {
    max-width: 1024px;
  }

  .label-grid {
    grid-template-columns: repeat(4, 1fr);
    padding: 30px 10%;
    gap: 30px 30px;
  }

  .label-card {
    width: 220px;
    height: 260px;
    padding: 28px 36px;
  }

  .label-avatar {
    width: 148px;
    height: 148px;
  }

  .english-name {
    font-size: 16px;
    line-height: 28px;
    max-width: 148px;
  }

  .chinese-name {
    font-size: 14px;
    line-height: 19px;
    max-width: 148px;
  }
}
</style>
