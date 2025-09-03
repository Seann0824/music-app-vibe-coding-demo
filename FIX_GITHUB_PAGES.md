# 🔧 GitHub Pages 资源路径问题修复指南

## 🚨 问题描述

如果您的 GitHub Pages 网站出现白屏，并且浏览器控制台显示类似以下错误：

```
Failed to load resource: the server responded with a status of 404 (Not Found)
/music-app/assets/index-CrXeE5TX.js
```

这是因为 Vite 配置中的 `base` 路径与您的 GitHub 仓库名不匹配。

## ✅ 解决方案

### 步骤 1: 确认您的仓库名

查看您的 GitHub Pages 网址：

```
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/
```

例如：`https://seann0824.github.io/music-app-vibe-coding-demo/`
仓库名就是：`music-app-vibe-coding-demo`

### 步骤 2: 修改 vite.config.ts

打开 `vite.config.ts` 文件，修改 `base` 配置：

```typescript
export default defineConfig({
  plugins: [vue()],
  // 将 YOUR_REPOSITORY_NAME 替换为您的实际仓库名
  base: process.env.NODE_ENV === "production" ? "/YOUR_REPOSITORY_NAME/" : "/",
  // ... 其他配置
});
```

**具体示例**：

```typescript
// 如果仓库名是 music-app-vibe-coding-demo
base: process.env.NODE_ENV === "production" ? "/music-app-vibe-coding-demo/" : "/",

// 如果仓库名是 music-app
base: process.env.NODE_ENV === "production" ? "/music-app/" : "/",

// 如果仓库名是 my-vue-app
base: process.env.NODE_ENV === "production" ? "/my-vue-app/" : "/",
```

### 步骤 3: 重新构建和部署

```bash
# 本地测试构建
npm run build

# 提交修改
git add .
git commit -m "🔧 Fix: 修复GitHub Pages资源路径问题"
git push origin main
```

## 🎯 自动化解决方案

如果您想要一个更智能的配置，可以使用以下方式：

### 方案 1: 从 package.json 自动获取仓库名

```typescript
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { readFileSync } from "fs";

// 从 package.json 读取仓库信息
const packageJson = JSON.parse(readFileSync("package.json", "utf8"));
const repoName = packageJson.homepage
  ? new URL(packageJson.homepage).pathname.slice(1, -1)
  : "music-app";

export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === "production" ? `/${repoName}/` : "/",
  // ... 其他配置
});
```

然后在 `package.json` 中添加：

```json
{
  "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/"
}
```

### 方案 2: 使用环境变量

在 GitHub Actions 中设置环境变量：

```yaml
# .github/workflows/deploy.yml
- name: Build with Vite
  run: npm run build
  env:
    VITE_BASE_PATH: ${{ github.event.repository.name }}
```

然后在 `vite.config.ts` 中：

```typescript
export default defineConfig({
  plugins: [vue()],
  base:
    process.env.NODE_ENV === "production"
      ? `/${process.env.VITE_BASE_PATH || "music-app"}/`
      : "/",
  // ... 其他配置
});
```

## 🔍 验证修复

修复后，检查生成的 `dist/index.html` 文件，确认资源路径正确：

```html
<!-- 修复前（错误） -->
<script src="/music-app/assets/index-xxx.js"></script>

<!-- 修复后（正确） -->
<script src="/music-app-vibe-coding-demo/assets/index-xxx.js"></script>
```

## 📝 常见问题

### Q: 为什么需要设置 base 路径？

A: GitHub Pages 将项目部署在子路径下（如 `/repository-name/`），而不是根路径，所以需要告诉 Vite 正确的基础路径。

### Q: 本地开发时会受影响吗？

A: 不会。配置中使用了环境变量判断，本地开发时使用根路径 `/`。

### Q: 如果我更改了仓库名怎么办？

A: 重新按照步骤 2 修改 `vite.config.ts` 中的 base 路径即可。

## 🎉 成功标志

修复成功后，您的网站应该能正常加载，显示完整的音乐应用界面，包括：

- ✅ 首页推荐内容
- ✅ 底部导航栏
- ✅ 各个页面切换正常
- ✅ 图标和图片正常显示

现在访问 [https://seann0824.github.io/music-app-vibe-coding-demo/](https://seann0824.github.io/music-app-vibe-coding-demo/) 应该可以正常使用了！
