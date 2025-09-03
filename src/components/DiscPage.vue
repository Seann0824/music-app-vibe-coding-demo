<template>
  <div class="disc-page">
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

    <!-- 唱片分类横滑区域 -->
    <div class="category-section">
      <div
        class="category-item"
        v-for="(category, index) in categories"
        :key="index"
        @click="selectCategory(category.name)"
      >
        <img
          class="category-image"
          :src="category.image"
          :alt="category.name"
        />
        <div class="category-overlay"></div>
        <div class="category-text">{{ category.name }}</div>
      </div>
    </div>

    <!-- 唱片列表 -->
    <div class="disc-list">
      <div
        class="disc-item"
        v-for="(disc, index) in discList"
        :key="index"
        @click="playDisc(disc)"
      >
        <div class="disc-cover-container">
          <div class="disc-background"></div>
          <img class="disc-cover" :src="disc.cover" :alt="disc.title" />
          <img
            class="play-button"
            :src="disc.playIcon"
            alt="播放"
            @click.stop="playDisc(disc)"
          />
        </div>
        <div class="disc-info">
          <div class="disc-title">{{ disc.title }}</div>
          <div class="disc-description">{{ disc.description }}</div>
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
        <div class="tab-bar-item active" @click="switchTab('唱片')">
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
const activeTab = ref("唱片");

// 标签页数据
const tabs = ref(["推荐", "唱片", "艺术家", "唱片公司", "榜单"]);

// 分类数据
const categories = ref([
  { name: "LP黑胶", image: "/assets/category-lp.png" },
  { name: "CD", image: "/assets/category-cd.png" },
  { name: "SACD", image: "/assets/category-sacd.png" },
  { name: "XXXX", image: "/assets/category-xxxx1.png" },
  { name: "XXXX", image: "/assets/category-xxxx2.png" },
]);

// 唱片列表数据
const discList = ref([
  {
    cover: "/assets/disc-1.png",
    playIcon: "/assets/play-icon-1.svg",
    title:
      "还真别说，我幻想过，假如我脑子里有个大容量硬盘，我把维基百科或者百度百科的镜像缓存到脑子里，一定帅呆了。",
    description:
      "你出生的时候，你哭着，周围的人笑着；你逝去的时候，你笑着，而周围的人在哭！",
  },
  {
    cover: "/assets/disc-2.png",
    playIcon: "/assets/play-icon-2.svg",
    title:
      "一个不成熟男子的标志是他愿意为某种事业英勇地死去，一个成熟男子的标志是他愿意为某种事业卑贱地活着。",
    description:
      '哈利波特里的"阿尼玛格斯"—会自己变形的巫师。整个魔法世界唯一能变成虎鲸的男人。',
  },
  {
    cover: "/assets/disc-3.png",
    playIcon: "/assets/play-icon-3.svg",
    title:
      "我通过镜子向一颗心脏展示一些妙不可言的磨镜视频，心脏吃不消这么香艳刺激的场面，坏掉了。",
    description:
      "我遇见过很多当年很红但是后来不红的人，再遇见她们的时候，能明显在她们身上看到时代的痕迹。",
  },
  {
    cover: "/assets/disc-4.png",
    playIcon: "/assets/play-icon-4.svg",
    title:
      "你不管做什么事，如果做得太好了，一不警惕，就会在无意中卖弄起来。那样的话，你就不再那么好了。",
    description:
      "我遇见过很多当年很红但是后来不红的人，再遇见她们的时候，能明显在她们身上看到时代的痕迹。",
  },
  {
    cover: "/assets/disc-5.png",
    playIcon: "/assets/play-icon-5.svg",
    title:
      "我也和你一样，一样的帽子，一样的衣服，一样的动作。可是哈克，你可以和我一样吗？在麦田自由的奔跑……",
    description:
      "我的骄傲被爹妈看出来了，我没在收假最后一天才写完作业，我知道，这是我的我骄傲，也是其他小朋友的恨。",
  },
  {
    cover: "/assets/disc-6.png",
    playIcon: "/assets/play-icon-6.svg",
    title: "你千万别跟任何人谈任何事情。你只要一谈起，就会想念起每一个人来。",
    description: "不过，我却摇了摇头，居然还在乎白不白的问题？",
  },
]);

// 定义 emit 事件
const emit = defineEmits<{
  switchPage: [page: string];
}>();

// 切换标签页
const switchTab = (tab: string) => {
  console.log("DiscPage - 切换标签页到:", tab);
  activeTab.value = tab;
  if (tab !== "唱片") {
    console.log("DiscPage - 发送switchPage事件:", tab);
    emit("switchPage", tab);
  }
};

// 选择分类
const selectCategory = (category: string) => {
  console.log("选择分类:", category);
};

// 播放唱片
const playDisc = (disc: any) => {
  console.log("播放唱片:", disc.title);
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

.disc-page {
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: var(--token-color-6);
  width: 100%;
  height: 100vh;
  max-width: 375px;
  margin: 0 auto;
  padding-bottom: 78px; /* 为底部Tab Bar留出空间 */
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

/* 分类横滑区域 */
.category-section {
  display: flex;
  gap: 10px;
  padding: 20px;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: var(--token-color-4);
  height: 88px;
  align-items: center;
  scroll-behavior: smooth;
  position: relative;
}

.category-section::after {
  content: "";
  position: absolute;
  top: 0;
  right: 20px;
  width: 20px;
  height: 100%;
  background: linear-gradient(to right, transparent, var(--token-color-4));
  pointer-events: none;
}

.category-item {
  position: relative;
  width: 90px;
  height: 48px;
  flex-shrink: 0;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.category-item:hover {
  transform: scale(1.05);
}

.category-image {
  object-fit: cover;
  width: 90px;
  height: 48px;
  border-radius: 4px;
}

.category-overlay {
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  width: 90px;
  height: 48px;
  border-radius: 4px;
}

.category-text {
  color: var(--token-color-7);
  font-family: "PingFangSC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  position: absolute;
  top: 14px;
  left: 0;
  width: 90px;
  height: 20px;
}

/* 唱片列表 */
.disc-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px 0;
}

.disc-item {
  display: flex;
  gap: 20px;
  padding: 0 20px;
  background-color: var(--token-color-4);
  height: 110px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.disc-item:hover {
  background-color: rgba(26, 29, 37, 0.8);
  transform: translateX(5px);
}

.disc-cover-container {
  position: relative;
  width: 122px;
  height: 110px;
  flex-shrink: 0;
}

.disc-background {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='201.49' height='201.49'%3E%3Ccircle cx='100.745' cy='100.745' r='100.745' fill='%23333'/%3E%3C/svg%3E");
  background-size: 201.49px 201.49px;
  background-position: -46.83px -43.02px;
  background-repeat: no-repeat;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 12px;
  right: 0;
  bottom: 0;
  width: 110px;
  height: 110px;
}

.disc-cover {
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 12px;
  bottom: 0;
  width: 110px;
  height: 110px;
  border-radius: 4px;
}

.play-button {
  position: absolute;
  top: 76px;
  left: 76px;
  right: 16px;
  bottom: 4px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.play-button:hover {
  transform: scale(1.2);
}

.disc-info {
  display: flex;
  flex-direction: column;
  gap: 44px;
  flex-grow: 1;
  width: 193px;
  height: 108px;
  padding-top: 1px;
}

.disc-title {
  position: relative;
  overflow: hidden;
  color: var(--token-color-7);
  font-family: "PingFangTC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 14px;
  line-height: 16px;
  width: 193px;
  height: 33px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}

.disc-description {
  position: relative;
  overflow: hidden;
  color: var(--token-color-1);
  font-family: "PingFangSC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 11px;
  line-height: 18px;
  width: 193px;
  height: 31px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
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
  .disc-page {
    max-width: 100%;
  }

  .tab-bar {
    max-width: 100%;
  }

  .category-section {
    padding: 20px 5%;
    justify-content: center;
  }

  .disc-list {
    padding: 30px 5%;
  }

  .disc-item {
    padding: 0 5%;
    max-width: 600px;
    margin: 0 auto;
  }
}

@media (min-width: 768px) {
  .disc-page {
    max-width: 768px;
  }

  .disc-item {
    height: 130px;
    padding: 0 8%;
  }

  .disc-cover-container {
    width: 140px;
    height: 130px;
  }

  .disc-cover {
    width: 130px;
    height: 130px;
  }

  .disc-background {
    width: 130px;
    height: 130px;
  }

  .disc-info {
    width: 250px;
    height: 128px;
  }

  .disc-title {
    width: 250px;
    font-size: 16px;
    line-height: 18px;
  }

  .disc-description {
    width: 250px;
    font-size: 12px;
  }
}

@media (min-width: 1024px) {
  .disc-page {
    max-width: 1024px;
  }

  .category-section {
    padding: 30px 10%;
  }

  .disc-list {
    padding: 40px 10%;
  }

  .disc-item {
    padding: 0 10%;
    height: 150px;
    max-width: 800px;
  }

  .disc-cover-container {
    width: 160px;
    height: 150px;
  }

  .disc-cover {
    width: 150px;
    height: 150px;
  }

  .disc-background {
    width: 150px;
    height: 150px;
  }

  .disc-info {
    width: 300px;
    height: 148px;
  }

  .disc-title {
    width: 300px;
    font-size: 18px;
    line-height: 20px;
    height: 40px;
  }

  .disc-description {
    width: 300px;
    font-size: 14px;
    height: 36px;
  }
}

/* 隐藏横向滚动条 */
.category-section::-webkit-scrollbar {
  display: none;
}

.category-section {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
