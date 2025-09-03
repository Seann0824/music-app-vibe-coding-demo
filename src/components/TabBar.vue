<template>
  <div class="tab-bar-container">
    <!-- 主导航栏 -->
    <div class="tab-bar">
      <!-- 首页 -->
      <div 
        class="tab-item"
        :class="{ active: activeTab === '推荐' }"
        @click="switchTab('推荐')"
      >
        <img src="/assets/tabbar-home-icon.svg" alt="首页" class="tab-icon" />
        <div class="tab-label">首页</div>
      </div>
      
      <!-- 淘碟 -->
      <div 
        class="tab-item"
        :class="{ active: activeTab === '唱片' }"
        @click="switchTab('唱片')"
      >
        <img src="/assets/tabbar-vinyl-icon.svg" alt="淘碟" class="tab-icon" />
        <div class="tab-label">淘碟</div>
      </div>
      
      <!-- 中间特殊按钮 -->
      <div class="tab-center">
        <img src="/assets/Tabbaritem2.svg" alt="中心按钮" class="center-button" />
      </div>
      
      <!-- 动态 -->
      <div 
        class="tab-item"
        :class="{ active: activeTab === '动态' }"
        @click="switchTab('动态')"
      >
        <img src="/assets/tabbar-activity-icon.svg" alt="动态" class="tab-icon" />
        <div class="tab-label">动态</div>
      </div>
      
      <!-- 我的 -->
      <div 
        class="tab-item"
        :class="{ active: activeTab === '我的' }"
        @click="switchTab('我的')"
      >
        <img src="/assets/tabbar-my-icon.svg" alt="我的" class="tab-icon" />
        <div class="tab-label">我的</div>
      </div>
    </div>
    
    <!-- 底部指示器 -->
    <div class="home-indicator">
      <div class="indicator"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  activeTab: string;
}>();

const emit = defineEmits<{
  switchTab: [tab: string];
}>();

const switchTab = (tab: string) => {
  console.log("TabBar - 切换标签页到:", tab);
  emit("switchTab", tab);
};
</script>

<style scoped>
/* CSS变量 - 根据设计图定义 */
:root {
  --token-color: rgba(247, 108, 90, 1);
  --token-color-1: rgba(129, 131, 135, 1);
  --token-color-2: rgba(73, 76, 82, 1);
  --token-color-3: rgba(37, 40, 48, 1);
  --token-color-4: rgba(26, 29, 37, 1);
  --label-color-dark-primary: rgba(255, 255, 255, 1);
  --token-color-5: linear-gradient(180deg, rgba(232, 205, 168, 1) 0%, rgba(244, 230, 207, 1) 100%);
  --token-color-6: rgba(26, 29, 37, 1);
  --token-color-7: rgba(255, 255, 255, 1);
  --token-color-8: rgba(232, 205, 167, 1);
}

/* TabBar容器 */
.tab-bar-container {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 375px;
  height: 78px;
  display: flex;
  flex-direction: column;
  z-index: 100;
}

/* 主导航栏 */
.tab-bar {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 5px 0 0 0;
  background-color: var(--token-color-6);
  height: 51px;
  width: 100%;
}

/* 导航项 */
.tab-item {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  padding: 2px 24px;
  width: 72.6px;
  height: 46px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tab-item:hover {
  opacity: 0.8;
}

/* 图标 */
.tab-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

/* 标签文字 */
.tab-label {
  color: var(--token-color-2);
  white-space: nowrap;
  font-family: "SFProText-Medium", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  width: 20px;
  height: 14px;
  flex-shrink: 0;
}

/* 选中状态 */
.tab-item.active .tab-label {
  color: var(--token-color-7);
}

/* 中间特殊按钮 */
.tab-center {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 84.6px;
  height: 38px;
}

.center-button {
  width: 84.6px;
  height: 38px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.center-button:hover {
  transform: scale(1.05);
}

/* 底部指示器 */
.home-indicator {
  position: relative;
  background-color: var(--token-color-4);
  height: 27px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 8px;
}

.indicator {
  border-radius: 100px;
  background-color: var(--label-color-dark-primary);
  width: 134px;
  height: 5px;
}

/* 响应式设计 */
@media (min-width: 768px) {
  .tab-bar-container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .tab-bar-container {
    max-width: 1024px;
  }
}
</style>
