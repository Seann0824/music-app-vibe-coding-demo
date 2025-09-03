import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  // GitHub Pages 部署配置
  base: process.env.NODE_ENV === "production" ? "/music-app-vibe-coding-demo/" : "/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    // 确保静态资源正确引用
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["vue"],
        },
      },
    },
  },
  server: {
    port: 3001,
    open: true,
  },
  // 确保 public 目录下的静态资源能正确访问
  publicDir: "public",
  define: {
    // 定义全局变量，让组件可以访问正确的 base URL
    __BASE_URL__: JSON.stringify(process.env.NODE_ENV === "production" ? "/music-app-vibe-coding-demo/" : "/"),
  },
});
