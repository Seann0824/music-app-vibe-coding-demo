<template>
  <div class="activity-page">
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

    <!-- 动态内容 -->
    <div class="activity-content">
      <div
        class="activity-card"
        v-for="(activity, index) in activities"
        :key="index"
      >
        <!-- 用户信息 -->
        <div class="user-info">
          <img
            class="user-avatar"
            :src="activity.avatar"
            :alt="activity.username"
          />
          <div class="user-details">
            <div class="user-line">
              <div class="username">{{ activity.username }}</div>
              <div class="action-text">发布了视频</div>
            </div>
            <div class="publish-time">{{ activity.publishTime }}</div>
          </div>
        </div>

        <!-- 动态文字 -->
        <div class="activity-text">
          <div class="text-content">{{ activity.content }}</div>
          <div class="ellipsis">...</div>
        </div>

        <!-- 视频预览 -->
        <div class="video-preview" @click="playVideo(activity)">
          <img
            class="video-cover"
            :src="activity.videoCover"
            :alt="activity.content"
          />
          <img
            class="play-button"
            :src="activity.playIcon"
            alt="播放"
            @click.stop="playVideo(activity)"
          />
          <div class="video-duration">{{ activity.videoDuration }}</div>
        </div>

        <!-- 交互按钮 -->
        <div class="interaction-bar">
          <div class="left-actions">
            <img
              class="like-group"
              :src="activity.likeIcon"
              alt="点赞"
              @click="toggleLike(activity)"
            />
            <div class="collect-action" @click="toggleCollect(activity)">
              <img
                class="collect-icon"
                :src="activity.collectIcon"
                alt="收藏"
              />
              <div class="collect-count">{{ activity.collectCount }}</div>
              <div class="collect-text">人收藏</div>
            </div>
          </div>
          <div class="right-actions">
            <div class="comment-action" @click="showComments(activity)">
              <img
                class="comment-icon"
                :src="activity.commentIcon"
                alt="评论"
              />
              <div class="comment-count">{{ activity.commentCount }}</div>
            </div>
            <img
              class="share-icon"
              :src="activity.shareIcon"
              alt="分享"
              @click="shareActivity(activity)"
            />
          </div>
        </div>

        <!-- 评论区 -->
        <div class="comments-section">
          <div
            class="comment-item"
            v-for="(comment, idx) in activity.comments"
            :key="idx"
          >
            <div class="comment-username">{{ comment.username }}</div>
            <div class="comment-colon">：</div>
            <div class="comment-content">{{ comment.content }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// 当前激活的标签页
const activeTab = ref("最新发布");

// 标签页数据
const tabs = ref(["最新发布", "最新出售"]);

// 定义 emit 事件
const emit = defineEmits<{
  switchPage: [page: string];
}>();

// 动态数据
const activities = ref([
  {
    id: 1,
    username: "动感光波",
    avatar: "/assets/activity-avatar-1.svg",
    publishTime: "12-01 23:51",
    content: "哪怕是野火焚烧，哪怕是冰雪覆盖，依然是志向不改，依然是信念不衰。",
    videoCover: "/assets/activity-video-1.png",
    playIcon: "/assets/activity-play-1.svg",
    videoDuration: "22:50",
    likeIcon: "/assets/activity-like-1.svg",
    collectIcon: "/assets/collect-icon.svg",
    collectCount: "167",
    commentIcon: "/assets/comment-icon.svg",
    commentCount: "200",
    shareIcon: "/assets/share-icon.svg",
    comments: [
      {
        username: "宇宙预报员",
        content:
          "的确如此。石猴很聪明，需要如来佛承诺。否则取完经，只落得一个什么使者，岂不是白干一场？",
      },
      {
        username: "全世界爱自己第一名",
        content: "SMIC的数据分析是写脚本么？",
      },
    ],
  },
  {
    id: 2,
    username: "樱桃肉肉丸",
    avatar: "/assets/activity-avatar-2.svg",
    publishTime: "11-29 01:38",
    content:
      "我没回答他，我只是起身走到窗口往外眺望，一霎时，我觉得寂寞极了，我简直希望自己已经死了。",
    videoCover: "/assets/activity-video-2.png",
    playIcon: "/assets/activity-play-2.svg",
    videoDuration: "12:03",
    likeIcon: "/assets/activity-like-2.svg",
    collectIcon: "/assets/collect-icon-2.svg",
    collectCount: "259",
    commentIcon: "/assets/comment-icon-2.svg",
    commentCount: "358",
    shareIcon: "/assets/share-icon-2.svg",
    comments: [
      {
        username: "超级凶鸭",
        content:
          "哈哈哈我们当时都是撕卷子，合到一起，听到撕卷子的声音就知道大家做到完形填空了[飙泪笑]",
      },
      {
        username: "不如自成宇宙",
        content:
          '当然好啦，国家大力扶植产业。"选择"是人各有志，无论怎么选，想清楚了选了就是最好的。',
      },
    ],
  },
  {
    id: 3,
    username: "全世界爱自己第一名",
    avatar: "/assets/activity-avatar-3.svg",
    publishTime: "12-04 23:29",
    content:
      "我是说不到你开始做的时候，你怎么知道自己打算怎么做？回答是，你没法知道。",
    videoCover: "/assets/activity-video-3.png",
    playIcon: "/assets/activity-play-3.svg",
    videoDuration: "17:09",
    likeIcon: "/assets/activity-like-3.svg",
    collectIcon: "/assets/collect-icon-3.svg",
    collectCount: "362",
    commentIcon: "/assets/comment-icon-3.svg",
    commentCount: "601",
    shareIcon: "/assets/share-icon-3.svg",
    comments: [
      {
        username: "小熊出击",
        content: "SMIC的数据分析是写脚本么？",
      },
      {
        username: "前任三秒",
        content: "这两网站算不得魔法部，顶多就是个预言家日报",
      },
    ],
  },
  {
    id: 4,
    username: "团子不加冰",
    avatar: "/assets/activity-avatar-4.svg",
    publishTime: "12-08 08:52",
    content:
      "你出生的时候，你哭着，周围的人笑着；你逝去的时候，你笑着，而周围的人在哭！",
    videoCover: "/assets/activity-video-4.png",
    playIcon: "/assets/activity-play-4.svg",
    videoDuration: "02:16",
    likeIcon: "/assets/activity-like-4.svg",
    collectIcon: "/assets/collect-icon-4.svg",
    collectCount: "686",
    commentIcon: "/assets/comment-icon-4.svg",
    commentCount: "766",
    shareIcon: "/assets/share-icon-4.svg",
    comments: [
      {
        username: "小熊吹奶盖",
        content: "能力是通用的！很棒！",
      },
      {
        username: "キスを月",
        content: "笑死我了[飙泪笑][飙泪笑][飙泪笑]",
      },
    ],
  },
]);

// 切换标签页
const switchTab = (tab: string) => {
  console.log("ActivityPage - 切换标签页到:", tab);
  activeTab.value = tab;
};

// 切换页面
const switchPage = (page: string) => {
  console.log("ActivityPage - 切换页面到:", page);
  if (page !== "动态") {
    emit("switchPage", page);
  }
};

// 播放视频
const playVideo = (activity: any) => {
  console.log("播放视频:", activity.username, activity.videoDuration);
};

// 点赞
const toggleLike = (activity: any) => {
  console.log("点赞动态:", activity.username);
};

// 收藏
const toggleCollect = (activity: any) => {
  console.log("收藏动态:", activity.username);
};

// 显示评论
const showComments = (activity: any) => {
  console.log("查看评论:", activity.username, activity.commentCount);
};

// 分享
const shareActivity = (activity: any) => {
  console.log("分享动态:", activity.username);
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

.activity-page {
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
  justify-content: center;
  width: 128px;
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
  width: 56px;
  height: 20px;
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
  width: 48px;
  height: 17px;
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

/* 动态内容 */
.activity-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  padding: 20px 0;
  width: 375px;
  min-height: calc(100vh - 160px); /* 减去状态栏、导航栏、底部栏的高度 */
}

.activity-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  background-color: var(--token-color-3);
  width: 375px;
  height: 422px;
  transition: all 0.3s ease;
}

.activity-card:hover {
  background-color: rgba(37, 40, 48, 0.9);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

/* 用户信息 */
.user-info {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  width: 335px;
  height: 40px;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.user-details {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-shrink: 0;
  height: 34px;
}

.user-line {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  height: 17px;
}

.username {
  color: var(--token-color-7);
  white-space: nowrap;
  font-family: "PingFangSC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 12px;
  line-height: 17px;
}

.action-text {
  color: var(--token-color-1);
  font-family: "PingFangSC-Regular", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 10px;
  line-height: 16px;
  width: 55px;
  height: 17px;
}

.publish-time {
  color: var(--token-color-1);
  font-family: "PingFangSC-Regular", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 10px;
  line-height: 16px;
  width: 100%;
  height: 17px;
}

/* 动态文字 */
.activity-text {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 12px 0 8px;
  width: 335px;
  height: 40px;
}

.text-content {
  color: var(--token-color-7);
  font-family: "PingFangSC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 14px;
  line-height: 20px;
  position: relative;
  overflow: hidden;
  width: 323px;
  height: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  flex-shrink: 0;
}

.ellipsis {
  color: var(--token-color-7);
  white-space: nowrap;
  font-family: "PingFangSC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  width: 12px;
  height: 20px;
  flex-shrink: 0;
}

/* 视频预览 */
.video-preview {
  position: relative;
  width: 335px;
  height: 200px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.video-preview:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.video-cover {
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 335px;
  height: 200px;
  border-radius: 4px;
}

.play-button {
  position: absolute;
  top: 76px;
  left: 144px;
  width: 48px;
  height: 48px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.play-button:hover {
  transform: scale(1.1);
}

.video-duration {
  color: var(--token-color-7);
  font-family: "PingFangSC-Regular", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 10px;
  line-height: 16px;
  text-align: right;
  position: absolute;
  right: 8px;
  bottom: 4px;
  width: 55px;
  height: 17px;
}

/* 交互按钮 */
.interaction-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0 4px;
  width: 335px;
  height: 52px;
}

.left-actions {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  height: 28px;
}

.like-group {
  width: 65px;
  height: 28px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.like-group:hover {
  transform: scale(1.1);
}

.collect-action {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 69px;
  height: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.collect-action:hover {
  transform: translateY(-1px);
}

.collect-icon {
  width: 20px;
  height: 20px;
  margin-right: 4px;
}

.collect-count {
  color: var(--token-color-1);
  white-space: nowrap;
  font-family: "PingFangSC-Regular", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 10px;
  line-height: 16px;
  margin-right: 4px;
}

.collect-text {
  color: var(--token-color-1);
  white-space: nowrap;
  font-family: "PingFangSC-Regular", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 10px;
  line-height: 16px;
  width: 30px;
  height: 16px;
}

.right-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  height: 20px;
}

.comment-action {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  height: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.comment-action:hover {
  transform: translateY(-1px);
}

.comment-icon {
  width: 20px;
  height: 20px;
}

.comment-count {
  color: var(--token-color-1);
  white-space: nowrap;
  font-family: "PingFangSC-Regular", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 10px;
  line-height: 16px;
}

.share-icon {
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.share-icon:hover {
  transform: scale(1.1);
}

/* 评论区 */
.comments-section {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 335px;
  height: 50px;
}

.comment-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4px 0;
  width: 335px;
  height: 25px;
}

.comment-username {
  color: var(--token-color-7);
  white-space: nowrap;
  font-family: "PingFangSC-Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 12px;
  line-height: 17px;
  flex-shrink: 0;
}

.comment-colon {
  color: var(--token-color-1);
  font-family: "PingFangSC-Regular", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 10px;
  line-height: 16px;
  width: 6px;
  height: 16px;
  flex-shrink: 0;
}

.comment-content {
  color: var(--token-color-1);
  font-family: "PingFangSC-Regular", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 10px;
  line-height: 16px;
  position: relative;
  overflow: hidden;
  flex-grow: 1;
  height: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

/* 响应式设计 */
@media (min-width: 376px) {
  .activity-page {
    max-width: 100%;
  }

  .activity-content {
    width: 100%;
    padding: 20px 0;
  }

  .activity-card {
    width: 100%;
    padding: 20px 5%;
    height: 450px;
  }

  .user-info {
    width: 90%;
    height: 44px;
  }

  .user-avatar {
    width: 44px;
    height: 44px;
  }

  .activity-text {
    width: 90%;
    height: 44px;
  }

  .video-preview {
    width: 90%;
    height: 220px;
  }

  .video-cover {
    width: 100%;
    height: 220px;
  }

  .play-button {
    top: 86px;
    left: calc(50% - 24px);
    width: 52px;
    height: 52px;
  }

  .interaction-bar {
    width: 90%;
    height: 56px;
  }

  .comments-section {
    width: 90%;
    height: 54px;
  }

  .comment-item {
    width: 100%;
    height: 27px;
  }
}

@media (min-width: 768px) {
  .activity-page {
    max-width: 768px;
  }

  .activity-content {
    padding: 30px 0;
    gap: 25px;
  }

  .activity-card {
    padding: 25px 8%;
    height: 500px;
  }

  .user-info {
    height: 48px;
  }

  .user-avatar {
    width: 48px;
    height: 48px;
  }

  .username {
    font-size: 13px;
    line-height: 18px;
  }

  .action-text,
  .publish-time {
    font-size: 11px;
    line-height: 17px;
  }

  .activity-text {
    height: 48px;
  }

  .text-content {
    font-size: 15px;
    line-height: 22px;
    height: 22px;
  }

  .ellipsis {
    font-size: 15px;
    line-height: 22px;
    height: 22px;
  }

  .video-preview {
    height: 250px;
  }

  .video-cover {
    height: 250px;
  }

  .play-button {
    top: 101px;
    width: 56px;
    height: 56px;
  }

  .interaction-bar {
    height: 60px;
  }

  .like-group {
    width: 70px;
    height: 30px;
  }

  .collect-action {
    width: 75px;
    height: 22px;
  }

  .collect-icon,
  .comment-icon,
  .share-icon {
    width: 22px;
    height: 22px;
  }

  .comments-section {
    height: 58px;
  }

  .comment-item {
    height: 29px;
  }

  .comment-username {
    font-size: 13px;
    line-height: 18px;
  }

  .comment-content {
    font-size: 11px;
    line-height: 17px;
    height: 17px;
  }
}

@media (min-width: 1024px) {
  .activity-page {
    max-width: 1024px;
  }

  .activity-content {
    padding: 40px 0;
    gap: 30px;
  }

  .activity-card {
    padding: 30px 10%;
    height: 550px;
  }

  .user-info {
    height: 52px;
  }

  .user-avatar {
    width: 52px;
    height: 52px;
  }

  .username {
    font-size: 14px;
    line-height: 19px;
  }

  .action-text,
  .publish-time {
    font-size: 12px;
    line-height: 18px;
  }

  .activity-text {
    height: 52px;
  }

  .text-content {
    font-size: 16px;
    line-height: 24px;
    height: 24px;
  }

  .ellipsis {
    font-size: 16px;
    line-height: 24px;
    height: 24px;
  }

  .video-preview {
    height: 280px;
  }

  .video-cover {
    height: 280px;
  }

  .play-button {
    top: 116px;
    width: 60px;
    height: 60px;
  }

  .interaction-bar {
    height: 64px;
  }

  .like-group {
    width: 75px;
    height: 32px;
  }

  .collect-action {
    width: 80px;
    height: 24px;
  }

  .collect-icon,
  .comment-icon,
  .share-icon {
    width: 24px;
    height: 24px;
  }

  .comments-section {
    height: 62px;
  }

  .comment-item {
    height: 31px;
  }

  .comment-username {
    font-size: 14px;
    line-height: 19px;
  }

  .comment-content {
    font-size: 12px;
    line-height: 18px;
    height: 18px;
  }
}
</style>
