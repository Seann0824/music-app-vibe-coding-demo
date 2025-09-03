<template>
  <div class="ranking-page">
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

    <!-- 榜单内容 -->
    <div class="ranking-content">
      <div
        class="ranking-card"
        v-for="(ranking, index) in rankings"
        :key="index"
        @click="selectRanking(ranking)"
      >
        <div class="ranking-image">
          <img class="cover-image" :src="ranking.cover" :alt="ranking.title" />
          <div class="count-badge">
            <div class="count-number">{{ ranking.count }}</div>
            <div class="count-unit">张</div>
          </div>
        </div>
        <div class="ranking-text">
          <div
            class="text-item"
            v-for="(item, idx) in ranking.topics"
            :key="idx"
          >
            <div class="bullet">·</div>
            <div class="content">{{ item }}</div>
            <div class="ellipsis">...</div>
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
const activeTab = ref("榜单");

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

// 榜单数据
const rankings = ref([
  {
    title: "职场话题",
    cover: getAssetUrl("/assets/ranking-1.png"),
    count: "129",
    topics: [
      "今年大四，已经拿到了腾讯的 offer，但在毕业前一个月被学校开除了，我该怎么办？",
      "为什么消费主义容易给部分女性洗脑而对部分男性影响力相对较小？",
      "为什么很多人认为脂肪在格斗中比肌肉重要？",
    ],
  },
  {
    title: "学习话题",
    cover: getAssetUrl("/assets/ranking-2.png"),
    count: "473",
    topics: [
      "有什么相见恨晚的背单词方法？",
      "非物理专业的学生想自学理论物理有没有推荐的教材？",
      "28岁在深圳到手15000过的怎么样？",
    ],
  },
  {
    title: "阅读话题",
    cover: getAssetUrl("/assets/ranking-3.png"),
    count: "629",
    topics: [
      "你读过哪些令你有跪感的书？",
      "东野圭吾的小说中，哪些值得推荐？为什么？",
      "如果你是地球，想对人类说什么让他们不要摧毁你？",
    ],
  },
  {
    title: "生活话题",
    cover: getAssetUrl("/assets/ranking-4.png"),
    count: "711",
    topics: [
      "浙江发现一户人家厨房，那叫一个干净，人性化收纳细节超多！",
      "30年前未曾发行的任天堂红白机游戏，被这个团队从21张软盘恢复了",
      "什么事情让你觉得智商被侮辱？",
    ],
  },
  {
    title: "设计话题",
    cover: getAssetUrl("/assets/ranking-5.png"),
    count: "733",
    topics: [
      "你见过最反人类的设计是什么？",
      "如何看待周杰伦推出全套14张专辑黑胶唱片版？",
      "别瞎搞橱柜了，橱柜这样设计，多用10年没问题！",
    ],
  },
  {
    title: "科技话题",
    cover: getAssetUrl("/assets/ranking-6.png"),
    count: "825",
    topics: [
      "3位物理学家意外发现基础数学新方法，数学天才陶哲轩：我开始压根不相信",
      "当国语歌被粤语改编，民谣女声吉他弹唱一人搞定男女对唱情歌",
      "健身小白如何利用好新手福利期？",
    ],
  },
  {
    title: "健身话题",
    cover: getAssetUrl("/assets/ranking-7.png"),
    count: "884",
    topics: [
      "工作能力强的人有哪些共同特征？",
      "硬拉完第二天下背肌肉没太大感觉，这正常吗？",
      "无伤跑了2600KM后，我总结出了这7个跑姿动作要点[跑姿干货]",
    ],
  },
  {
    title: "美食话题",
    cover: getAssetUrl("/assets/ranking-8.png"),
    count: "955",
    topics: [
      "今天做了鲜香麻辣口水鸡，在线求夸",
      "太难了！霍华德突遭噩耗！明白了，这就是他拼命打球的原因……",
      "建筑防火规范至尊宝典！速查汇总表 3/5 · 小平面篇",
    ],
  },
]);

// 切换标签页
const switchTab = (tab: string) => {
  console.log("RankingPage - 切换标签页到:", tab);
  activeTab.value = tab;
  if (tab !== "榜单") {
    console.log("RankingPage - 发送switchPage事件:", tab);
    emit("switchPage", tab);
  }
};

// 选择榜单
const selectRanking = (ranking: any) => {
  console.log("选择榜单:", ranking.title);
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

.ranking-page {
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

/* 榜单内容 */
.ranking-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 20px 25px 0;
  width: 375px;
  min-height: calc(100vh - 160px); /* 减去状态栏、导航栏、底部栏的高度 */
}

.ranking-card {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 325px;
  height: 128px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.ranking-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.ranking-image {
  position: relative;
  width: 128px;
  height: 128px;
  flex-shrink: 0;
}

.cover-image {
  width: 128px;
  height: 128px;
  object-fit: cover;
  border-radius: 4px;
}

.count-badge {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0 5px;
  background-color: var(--token-color-8);
  position: absolute;
  top: 116px;
  right: 0;
  height: 12px;
  border-radius: 1px;
}

.count-number {
  white-space: nowrap;
  color: #000000;
  font-family: "PingFangTC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 8px;
  line-height: 12px;
  text-align: center;
}

.count-unit {
  white-space: nowrap;
  color: #000000;
  font-family: "PingFangTC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 8px;
  line-height: 12px;
  text-align: center;
  width: 8px;
  height: 12px;
}

.ranking-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  padding: 18px 13px 18px 12px;
  background-color: var(--token-color-3);
  flex-grow: 1;
  width: 197px;
  height: 128px;
  border-radius: 0 4px 4px 0;
}

.text-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 6px 0;
  overflow: hidden;
  width: 172px;
  height: 24px;
}

.bullet {
  color: var(--token-color-7);
  font-family: "PingFangTC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 12px;
  line-height: 12px;
  width: 10px;
  height: 12px;
  flex-shrink: 0;
}

.content {
  color: var(--token-color-7);
  font-family: "PingFangTC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 12px;
  line-height: 24px;
  flex-grow: 1;
  width: 152px;
  height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ellipsis {
  color: var(--token-color-7);
  white-space: nowrap;
  font-family: "PingFangTC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 12px;
  line-height: 12px;
  text-align: center;
  width: 10px;
  height: 12px;
  flex-shrink: 0;
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
  .ranking-page {
    max-width: 100%;
  }

  .tab-bar {
    max-width: 100%;
  }

  .ranking-content {
    width: 100%;
    padding: 20px 5%;
    gap: 25px;
  }

  .ranking-card {
    width: 90%;
    max-width: 500px;
    height: 140px;
  }

  .ranking-image {
    width: 140px;
    height: 140px;
  }

  .cover-image {
    width: 140px;
    height: 140px;
  }

  .count-badge {
    top: 126px;
  }

  .ranking-text {
    width: calc(100% - 140px);
    height: 140px;
    padding: 20px 15px 20px 14px;
  }

  .text-item {
    width: 100%;
    height: 26px;
    padding: 7px 0;
  }

  .content {
    font-size: 13px;
    line-height: 26px;
    width: calc(100% - 20px);
    height: 26px;
  }
}

@media (min-width: 768px) {
  .ranking-page {
    max-width: 768px;
  }

  .ranking-content {
    padding: 30px 8%;
    gap: 30px;
  }

  .ranking-card {
    width: 100%;
    max-width: 600px;
    height: 160px;
  }

  .ranking-image {
    width: 160px;
    height: 160px;
  }

  .cover-image {
    width: 160px;
    height: 160px;
  }

  .count-badge {
    top: 146px;
    padding: 0 6px;
    height: 14px;
  }

  .count-number,
  .count-unit {
    font-size: 9px;
    line-height: 14px;
  }

  .ranking-text {
    width: calc(100% - 160px);
    height: 160px;
    padding: 24px 18px 24px 16px;
  }

  .text-item {
    height: 30px;
    padding: 8px 0;
  }

  .bullet {
    font-size: 14px;
    line-height: 14px;
    width: 12px;
    height: 14px;
  }

  .content {
    font-size: 14px;
    line-height: 30px;
    height: 30px;
  }

  .ellipsis {
    font-size: 14px;
    line-height: 14px;
    width: 12px;
    height: 14px;
  }
}

@media (min-width: 1024px) {
  .ranking-page {
    max-width: 1024px;
  }

  .ranking-content {
    padding: 40px 10%;
    gap: 35px;
  }

  .ranking-card {
    max-width: 700px;
    height: 180px;
  }

  .ranking-image {
    width: 180px;
    height: 180px;
  }

  .cover-image {
    width: 180px;
    height: 180px;
  }

  .count-badge {
    top: 166px;
    padding: 0 7px;
    height: 16px;
  }

  .count-number,
  .count-unit {
    font-size: 10px;
    line-height: 16px;
  }

  .ranking-text {
    width: calc(100% - 180px);
    height: 180px;
    padding: 28px 20px 28px 18px;
  }

  .text-item {
    height: 34px;
    padding: 9px 0;
  }

  .bullet {
    font-size: 16px;
    line-height: 16px;
    width: 14px;
    height: 16px;
  }

  .content {
    font-size: 16px;
    line-height: 34px;
    height: 34px;
  }

  .ellipsis {
    font-size: 16px;
    line-height: 16px;
    width: 14px;
    height: 16px;
  }
}
</style>
