# 🚀 GitHub Pages 部署指南

本项目配置了自动部署到 GitHub Pages，每次推送到 `main` 分支时会自动构建和部署。

## 📋 部署步骤

### 1. 推送代码到 GitHub

```bash
# 初始化 git 仓库（如果还没有）
git init

# 添加所有文件
git add .

# 提交代码
git commit -m "Initial commit: Music App with Vue 3 + TypeScript"

# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/your-username/music-app.git

# 推送到 main 分支
git push -u origin main
```

### 2. 启用 GitHub Pages

1. 进入你的 GitHub 仓库
2. 点击 **Settings** 标签
3. 在左侧菜单中找到 **Pages**
4. 在 **Source** 部分，选择 **GitHub Actions**
5. 保存设置

### 3. 自动部署

- 每次推送到 `main` 分支时，GitHub Actions 会自动：
  - 安装依赖
  - 运行 TypeScript 类型检查
  - 构建 Vue 应用
  - 部署到 GitHub Pages

### 4. 访问网站

部署完成后，你的网站将在以下地址可访问：

```
https://your-username.github.io/music-app/
```

## 🔧 配置说明

### Vite 配置

- `base: '/music-app/'` - 设置正确的基础路径
- `outDir: 'dist'` - 构建输出目录
- `assetsDir: 'assets'` - 静态资源目录

### GitHub Actions 工作流

- **触发条件**: 推送到 `main` 分支或手动触发
- **构建环境**: Ubuntu 最新版本，Node.js 18
- **构建工具**: npm + Vite
- **部署目标**: GitHub Pages

## 📁 项目结构

```
music-app/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 工作流
├── src/
│   ├── components/             # Vue 组件
│   │   ├── HomePage.vue
│   │   ├── VinylPage.vue
│   │   ├── ArtistPage.vue
│   │   ├── LabelPage.vue
│   │   ├── RankingPage.vue
│   │   ├── ActivityPage.vue
│   │   ├── ProfilePage.vue
│   │   └── TabBar.vue
│   ├── App.vue                # 根组件
│   └── main.ts                # 入口文件
├── assets/                    # 静态资源
├── public/                    # 公共资源
├── dist/                      # 构建输出（自动生成）
├── vite.config.ts            # Vite 配置
├── package.json              # 项目配置
└── DEPLOYMENT.md             # 本文件
```

## 🛠️ 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 🎯 功能特性

- ✅ Vue 3 + TypeScript
- ✅ 响应式设计（移动端优先）
- ✅ 多页面应用（SPA）
- ✅ 共享底部导航栏
- ✅ SVG 图标支持颜色变化
- ✅ 原生 CSS（无 CSS 框架依赖）
- ✅ 自动化部署

## 🔍 故障排除

### 构建失败

- 检查 TypeScript 类型错误
- 确保所有依赖都已安装
- 验证 Vite 配置是否正确

### 部署失败

- 检查 GitHub Actions 日志
- 确认 GitHub Pages 设置正确
- 验证仓库权限设置

### 资源加载问题

- 检查 `base` 路径配置
- 确认静态资源路径正确
- 验证 GitHub Pages URL

## 📝 更新部署

要更新网站，只需：

```bash
# 修改代码后提交
git add .
git commit -m "Update: your changes"
git push origin main
```

GitHub Actions 会自动处理构建和部署！🎉
