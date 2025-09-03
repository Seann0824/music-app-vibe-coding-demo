<template>
  <div class="vinyl-page">
    <!-- 状态栏 -->
    <div class="status-bar">
      <div class="left-side">
        <div class="time">9:41</div>
      </div>
      <img class="right-side" :src="$getAssetUrl('/assets/battery-status.svg')" alt="信号状态" />
    </div>

    <!-- 顶部标题栏 -->
    <div class="title-bar">
      <div class="title-section">
        <div class="title-text">淘碟</div>
      </div>
      <img class="search-icon" :src="$getAssetUrl('/assets/search-icon.svg')" alt="搜索" />
    </div>

    <!-- Banner区域 -->
    <div class="banner-section">
      <img
        class="banner-image"
        :src="$getAssetUrl('/assets/vinyl-banner.png')"
        alt="淘碟横幅"
        @click="clickBanner"
      />
    </div>

    <!-- 筛选区域 -->
    <div class="filter-section">
      <div class="filter-options">
        <div class="filter-text">最新</div>
        <div class="filter-divider">|</div>
        <div class="filter-text">价格</div>
      </div>
      <div class="filter-button" @click="showFilter">
        <img class="filter-icon" :src="$getAssetUrl('/assets/filter-icon.svg')" alt="筛选" />
        <div class="filter-label">筛选</div>
      </div>
    </div>

    <!-- 唱片列表 -->
    <div class="vinyl-list">
      <div
        class="vinyl-item"
        v-for="(vinyl, index) in vinyls"
        :key="index"
        @click="selectVinyl(vinyl)"
      >
        <div class="vinyl-cover">
          <img
            class="cover-image"
            :src="vinyl.cover"
            :alt="vinyl.description"
          />
          <img
            class="play-button"
            :src="vinyl.playIcon"
            alt="播放"
            @click.stop="playVinyl(vinyl)"
          />
        </div>
        <div class="vinyl-info">
          <div class="vinyl-description">{{ vinyl.description }}</div>
          <div class="vinyl-tags">
            <div class="tag artist-tag">
              <span class="tag-label">唱品：</span>
              <span class="tag-value">{{ vinyl.artist }}</span>
            </div>
            <div class="tag album-tag">
              <span class="tag-label">封品：</span>
              <span class="tag-value">{{ vinyl.album }}</span>
            </div>
          </div>
          <div class="vinyl-price">
            <span class="price-symbol">￥</span>
            <span class="price-amount">{{ vinyl.price }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// 当前激活的标签页
const activeTab = ref("唱片");

// 定义 emit 事件
const emit = defineEmits<{
  switchPage: [page: string];
}>();

// 获取资源路径的辅助函数
const getAssetUrl = (path: string) => {
  const cleanPath = path.replace(/^\/+/, '');
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

// 唱片数据
const vinyls = ref([
  {
    id: 1,
    cover: getAssetUrl("/assets/vinyl-1.png"),
    playIcon: getAssetUrl("/assets/play-btn-1.svg"),
    description:
      "还真别说，我幻想过，假如我脑子里有个大容量硬盘，我把维基百科或者百度百科的镜像缓存到脑子里，一定帅呆了。",
    artist: "李冬",
    album: "宇宙预报员",
    price: "255",
  },
  {
    id: 2,
    cover: getAssetUrl("/assets/vinyl-2.png"),
    playIcon: getAssetUrl("/assets/play-btn-2.svg"),
    description:
      "我倒不是说他是个坏人——他不是坏人。可是不一定是坏人才能让人心烦——你可以是个好人，却同时让人心烦。",
    artist: "李子强",
    album: "不如自成宇宙",
    price: "329",
  },
  {
    id: 3,
    cover: getAssetUrl("/assets/vinyl-3.png"),
    playIcon: getAssetUrl("/assets/play-btn-3.svg"),
    description:
      "那我的也就差不多，老子只要往那儿一站，王霸之气辐射方圆数百里。",
    artist: "苏迪",
    album: "冬天才去跳海",
    price: "490",
  },
  {
    id: 4,
    cover: getAssetUrl("/assets/vinyl-4.png"),
    playIcon: getAssetUrl("/assets/play-btn-4.svg"),
    description: "不过，我却摇了摇头，居然还在乎白不白的问题？",
    artist: "黎楠",
    album: "樱桃肉肉丸",
    price: "792",
  },
  {
    id: 5,
    cover: getAssetUrl("/assets/vinyl-5.png"),
    playIcon: getAssetUrl("/assets/play-btn-5.svg"),
    description: "闻言，我当即清楚，这是小黑的声音。",
    artist: "郭文",
    album: "二号葫芦娃",
    price: "891",
  },
]);

// 切换标签页
const switchTab = (tab: string) => {
  console.log("VinylPage - 切换标签页到:", tab);
  activeTab.value = tab;
  if (tab !== "唱片") {
    console.log("VinylPage - 发送switchPage事件:", tab);
    emit("switchPage", tab);
  }
};

// 点击Banner
const clickBanner = () => {
  console.log("点击Banner横幅");
};

// 显示筛选
const showFilter = () => {
  console.log("显示筛选选项");
};

// 选择唱片
const selectVinyl = (vinyl: any) => {
  console.log("选择唱片:", vinyl.album, "by", vinyl.artist);
};

// 播放唱片
const playVinyl = (vinyl: any) => {
  console.log("播放唱片:", vinyl.album);
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

.vinyl-page {
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

/* 顶部标题栏 */
.title-bar {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 4px 16px 0;
  background-color: var(--token-color-4);
  height: 30px;
}

.title-section {
  display: flex;
  width: 44px;
  height: 22px;
}

.title-text {
  color: var(--token-color-7);
  white-space: nowrap;
  font-family: "PingFangSC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  width: 32px;
  height: 22px;
  padding: 0 6px;
}

.search-icon {
  width: 22px;
  height: 22px;
}

/* Banner区域 */
.banner-section {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  padding: 20px;
  width: 375px;
  height: 180px;
}

.banner-image {
  border-radius: 4px;
  object-fit: cover;
  width: 335px;
  height: 140px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.banner-image:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

/* 筛选区域 */
.filter-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 4px 20px;
  background-color: var(--token-color-6);
  width: 375px;
  height: 30px;
}

.filter-options {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  width: 65px;
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
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-text:hover {
  color: var(--token-color-8);
}

.filter-divider {
  color: var(--token-color-1);
  white-space: nowrap;
  font-family: "PingFangSC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  width: 33px;
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

/* 唱片列表 */
.vinyl-list {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 40px;
  padding: 20px 0;
  width: 375px;
  min-height: 750px;
}

.vinyl-item {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  padding: 0 20px;
  background-color: var(--token-color-4);
  width: 375px;
  height: 110px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.vinyl-item:hover {
  background-color: rgba(26, 29, 37, 0.9);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.vinyl-cover {
  position: relative;
  width: 122px;
  height: 110px;
  flex-shrink: 0;
}

.cover-image {
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 110px;
  height: 110px;
  border-radius: 4px;
}

.play-button {
  position: absolute;
  top: 76px;
  left: 76px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.play-button:hover {
  transform: scale(1.1);
}

.vinyl-info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
  flex-grow: 1;
  width: 193px;
  height: 109px;
}

.vinyl-description {
  color: var(--token-color-7);
  font-family: "PingFangTC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 14px;
  line-height: 16px;
  position: relative;
  overflow: hidden;
  width: 193px;
  height: 33px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.vinyl-tags {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 4px;
}

.tag {
  border-radius: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  padding: 4px 8px;
  background-color: var(--token-color-3);
  height: 22px;
}

.artist-tag {
  width: 68px;
}

.album-tag {
  width: 98px;
}

.tag-label {
  color: var(--token-color-1);
  white-space: nowrap;
  font-family: "PingFangSC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  width: 30px;
  height: 14px;
}

.tag-value {
  color: var(--token-color-1);
  white-space: nowrap;
  font-family: "PingFangSC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
}

.vinyl-price {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
  padding: 4px 0 0;
  width: 44px;
  height: 20px;
}

.price-symbol {
  color: var(--token-color);
  white-space: nowrap;
  font-family: "PingFangTC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 14px;
  line-height: 16px;
  width: 14px;
  height: 16px;
}

.price-amount {
  color: var(--token-color);
  white-space: nowrap;
  font-family: "PingFangTC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
}

/* 响应式设计 */
@media (min-width: 376px) {
  .vinyl-page {
    max-width: 100%;
  }

  .banner-section {
    width: 100%;
    padding: 20px 5%;
  }

  .banner-image {
    width: 90%;
    max-width: 500px;
    height: 160px;
  }

  .filter-section {
    width: 100%;
    padding: 4px 5%;
  }

  .vinyl-list {
    width: 100%;
    padding: 20px 0;
  }

  .vinyl-item {
    width: 100%;
    padding: 0 5%;
    height: 120px;
  }

  .vinyl-cover {
    width: 132px;
    height: 120px;
  }

  .cover-image {
    width: 120px;
    height: 120px;
  }

  .play-button {
    top: 85px;
    left: 85px;
    width: 32px;
    height: 32px;
  }

  .vinyl-info {
    width: calc(100% - 152px);
    height: 119px;
  }

  .vinyl-description {
    width: 100%;
    height: 36px;
    font-size: 15px;
    line-height: 18px;
  }
}

@media (min-width: 768px) {
  .vinyl-page {
    max-width: 768px;
  }

  .banner-section {
    padding: 30px 8%;
    height: 200px;
  }

  .banner-image {
    height: 180px;
  }

  .vinyl-list {
    gap: 45px;
    padding: 30px 0;
  }

  .vinyl-item {
    padding: 0 8%;
    height: 140px;
    gap: 25px;
  }

  .vinyl-cover {
    width: 152px;
    height: 140px;
  }

  .cover-image {
    width: 140px;
    height: 140px;
  }

  .play-button {
    top: 100px;
    left: 100px;
    width: 36px;
    height: 36px;
  }

  .vinyl-info {
    width: calc(100% - 177px);
    height: 139px;
  }

  .vinyl-description {
    height: 40px;
    font-size: 16px;
    line-height: 20px;
  }

  .tag {
    height: 24px;
    padding: 5px 10px;
  }

  .tag-label,
  .tag-value {
    font-size: 11px;
    line-height: 15px;
  }

  .vinyl-price {
    width: 50px;
    height: 22px;
  }

  .price-symbol,
  .price-amount {
    font-size: 16px;
    line-height: 18px;
  }
}

@media (min-width: 1024px) {
  .vinyl-page {
    max-width: 1024px;
  }

  .banner-section {
    padding: 40px 10%;
    height: 220px;
  }

  .banner-image {
    height: 200px;
  }

  .vinyl-list {
    gap: 50px;
    padding: 40px 0;
  }

  .vinyl-item {
    padding: 0 10%;
    height: 160px;
    gap: 30px;
  }

  .vinyl-cover {
    width: 172px;
    height: 160px;
  }

  .cover-image {
    width: 160px;
    height: 160px;
  }

  .play-button {
    top: 115px;
    left: 115px;
    width: 40px;
    height: 40px;
  }

  .vinyl-info {
    width: calc(100% - 202px);
    height: 159px;
  }

  .vinyl-description {
    height: 44px;
    font-size: 18px;
    line-height: 22px;
  }

  .tag {
    height: 26px;
    padding: 6px 12px;
  }

  .tag-label,
  .tag-value {
    font-size: 12px;
    line-height: 16px;
  }

  .vinyl-price {
    width: 56px;
    height: 24px;
  }

  .price-symbol,
  .price-amount {
    font-size: 18px;
    line-height: 20px;
  }
}
</style>
