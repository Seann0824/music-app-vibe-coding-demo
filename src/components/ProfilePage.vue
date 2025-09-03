<template>
  <div class="profile-page">
    <!-- 状态栏 -->
    <div class="status-bar">
      <div class="time">9:41</div>
      <div class="status-icons">
        <img src="/assets/Rightside.svg" alt="状态图标" class="status-right" />
      </div>
    </div>

    <!-- 顶部背景和头像区域 -->
    <div class="profile-header">
      <img src="/assets/profile-bg.png" alt="背景" class="background-image" />
      <div class="header-controls">
        <img
          src="/assets/settings-icon.svg"
          alt="设置"
          class="control-icon"
          @click="openSettings"
        />
        <img
          src="/assets/search-icon.svg"
          alt="搜索"
          class="control-icon"
          @click="openSearch"
        />
      </div>
      <img
        src="/assets/profile-avatar.svg"
        alt="用户头像"
        class="profile-avatar"
        @click="editProfile"
      />
    </div>

    <!-- 统计卡片区域 -->
    <div class="stats-section">
      <div class="stat-card" @click="viewSales">
        <div class="stat-label">出售</div>
        <div class="stat-content">
          <img src="/assets/sell-icon.svg" alt="出售" class="stat-icon" />
          <div class="stat-number">175</div>
        </div>
      </div>
      <div class="stat-card" @click="viewPublished">
        <div class="stat-label">发布</div>
        <div class="stat-content">
          <img src="/assets/publish-icon.svg" alt="发布" class="stat-icon" />
          <div class="stat-number">312</div>
        </div>
      </div>
      <div class="stat-card" @click="viewFavorites">
        <div class="stat-label">收藏</div>
        <div class="stat-content">
          <img src="/assets/favorite-icon.svg" alt="收藏" class="stat-icon" />
          <div class="stat-number">806</div>
        </div>
      </div>
    </div>

    <!-- 功能菜单区域 -->
    <div class="menu-section">
      <div class="menu-item" @click="viewOrders">
        <img src="/assets/order-icon.svg" alt="订单" class="menu-icon" />
        <div class="menu-text">我的订单</div>
      </div>
      <div class="menu-item" @click="viewComments">
        <img src="/assets/comment-icon.svg" alt="评论" class="menu-icon" />
        <div class="menu-text">我的评论</div>
      </div>
      <div class="menu-item" @click="viewDrafts">
        <img src="/assets/draft-icon.svg" alt="草稿" class="menu-icon" />
        <div class="menu-text">我的草稿</div>
      </div>
      <div class="menu-item" @click="viewDataGuide">
        <img src="/assets/data-icon.svg" alt="数据" class="menu-icon" />
        <div class="menu-text">数据指南</div>
      </div>
      <div class="menu-item" @click="viewHelp">
        <img src="/assets/help-icon.svg" alt="帮助" class="menu-icon" />
        <div class="menu-text">帮助中心</div>
      </div>
      <div class="menu-item" @click="giveFeedback">
        <img src="/assets/feedback-icon.svg" alt="反馈" class="menu-icon" />
        <div class="menu-text">我要反馈</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const emit = defineEmits<{
  switchPage: [page: string];
}>();

// 功能方法
const openSettings = () => {
  console.log("打开设置");
  // 实现设置页面逻辑
};

const openSearch = () => {
  console.log("打开搜索");
  // 实现搜索逻辑
};

const editProfile = () => {
  console.log("编辑个人资料");
  // 实现编辑个人资料逻辑
};

const viewSales = () => {
  console.log("查看出售");
  // 实现查看出售逻辑
};

const viewPublished = () => {
  console.log("查看发布");
  // 实现查看发布逻辑
};

const viewFavorites = () => {
  console.log("查看收藏");
  // 实现查看收藏逻辑
};

const viewOrders = () => {
  console.log("查看我的订单");
  // 实现查看订单逻辑
};

const viewComments = () => {
  console.log("查看我的评论");
  // 实现查看评论逻辑
};

const viewDrafts = () => {
  console.log("查看我的草稿");
  // 实现查看草稿逻辑
};

const viewDataGuide = () => {
  console.log("查看数据指南");
  // 实现数据指南逻辑
};

const viewHelp = () => {
  console.log("查看帮助中心");
  // 实现帮助中心逻辑
};

const giveFeedback = () => {
  console.log("我要反馈");
  // 实现反馈逻辑
};

// 生命周期
onMounted(() => {
  console.log("ProfilePage 组件已挂载");
});

onUnmounted(() => {
  console.log("ProfilePage 组件已卸载");
});
</script>

<style scoped>
/* CSS变量 */
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

.profile-page {
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: var(--token-color-4);
  width: 100%;
  height: 100vh;
  max-width: 375px;
  margin: 0 auto;
  box-sizing: border-box;
}

/* 状态栏 */
.status-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 14px 0 21px;
  z-index: 10;
  box-sizing: border-box;
}

.time {
  color: var(--label-color-dark-primary);
  font-family: "SFProText-Semibold", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  width: 54px;
  height: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
}

.status-right {
  width: 66.66px;
  height: 11.34px;
}

/* 顶部背景和头像区域 */
.profile-header {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.header-controls {
  position: absolute;
  top: 54px;
  left: 16px;
  right: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 22px;
  z-index: 5;
}

.control-icon {
  width: 22px;
  height: 22px;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.control-icon:hover {
  opacity: 0.8;
}

.profile-avatar {
  position: absolute;
  right: 20px;
  bottom: 20px;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s ease;
  z-index: 5;
}

.profile-avatar:hover {
  transform: scale(1.05);
}

/* 统计卡片区域 */
.stats-section {
  display: flex;
  justify-content: space-between;
  gap: 18px;
  padding: 24px 20px 0 20px;
  margin-top: 0;
}

.stat-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.stat-card:hover {
  transform: translateY(-2px);
}

.stat-label {
  color: var(--token-color-1);
  font-family: "PingFangSC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  white-space: nowrap;
}

.stat-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: var(--token-color-3);
  height: 100px;
  border-radius: 8px;
  transition: background-color 0.2s ease;
}

.stat-card:hover .stat-content {
  background-color: rgba(37, 40, 48, 0.8);
}

.stat-icon {
  width: 24px;
  height: 24px;
}

.stat-number {
  color: var(--token-color-7);
  font-family: "PingFangSC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  white-space: nowrap;
}

/* 功能菜单区域 */
.menu-section {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding-bottom: 78px;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 10px 16px;
  background-color: var(--token-color-4);
  height: 42px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  box-sizing: border-box;
}

.menu-item:hover {
  background-color: rgba(26, 29, 37, 0.8);
}

.menu-icon {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
}

.menu-text {
  color: var(--token-color-7);
  font-family: "PingFangSC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 14px;
  line-height: 20px;
  white-space: nowrap;
}

/* 响应式设计 */
@media (min-width: 768px) {
  .profile-page {
    max-width: 768px;
  }

  .stats-section {
    padding: 30px 8% 0 8%;
    gap: 25px;
  }

  .stat-content {
    height: 120px;
  }

  .stat-icon {
    width: 28px;
    height: 28px;
  }

  .stat-number {
    font-size: 14px;
  }

  .menu-item {
    padding: 12px 8%;
    height: 48px;
  }

  .menu-icon {
    width: 24px;
    height: 24px;
  }

  .menu-text {
    font-size: 16px;
  }

  .profile-avatar {
    width: 100px;
    height: 100px;
  }
}

@media (min-width: 1024px) {
  .profile-page {
    max-width: 1024px;
  }

  .stats-section {
    padding: 40px 10% 0 10%;
    gap: 30px;
  }

  .stat-content {
    height: 140px;
  }

  .stat-icon {
    width: 32px;
    height: 32px;
  }

  .stat-number {
    font-size: 16px;
  }

  .menu-item {
    padding: 15px 10%;
    height: 54px;
  }

  .menu-icon {
    width: 26px;
    height: 26px;
  }

  .menu-text {
    font-size: 18px;
  }

  .profile-avatar {
    width: 110px;
    height: 110px;
  }
}
</style>
