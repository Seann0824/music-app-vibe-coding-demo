import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);

// 添加全局属性，用于获取正确的资源路径
app.config.globalProperties.$getAssetUrl = (path: string) => {
  // 移除开头的斜杠
  const cleanPath = path.replace(/^\/+/, '');
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

app.mount("#app");
