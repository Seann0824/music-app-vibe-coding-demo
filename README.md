# 音乐 App 首页

基于 Vue 3 + TypeScript 实现的音乐 app 首页，完全还原设计图效果。

## 功能特点

- 🎵 完全基于设计图实现的音乐 app 首页
- 🎨 深色主题设计，符合现代移动端审美
- 📱 移动端优先的响应式布局
- ⚡ Vue 3 Composition API + TypeScript
- 🧩 组件化架构，代码结构清晰
- 🎭 流畅的交互动画效果

## 页面结构

### 组件架构

```
HomePage
├── StatusBar (状态栏)
├── HeaderNavigation (顶部导航)
├── BannerSection (推荐Banner)
├── PlaylistHeader (歌单推荐标题)
├── FeaturedPlaylist (特色歌单卡片)
├── PlaylistGrid (歌单网格)
│   └── PlaylistCard (歌单卡片)
└── TabBar (底部标签栏)
```

### 主要功能区域

1. **顶部状态栏** - 显示时间和系统状态
2. **导航标签** - 推荐、唱片、艺术家、唱片公司、榜单
3. **推荐 Banner** - 主要推荐内容展示
4. **歌单推荐** - 特色歌单卡片展示
5. **歌单网格** - 3x3 网格布局的歌单列表
6. **底部 Tab Bar** - 首页、淘碟、搜索、动态、我的

## 技术栈

- **Vue 3** - 现代化的渐进式框架
- **TypeScript** - 类型安全的 JavaScript
- **Vite** - 快速的构建工具
- **CSS3** - 现代 CSS 特性
- **组件化设计** - 高度可维护的代码结构

## 设计特色

- **深色主题**: 使用现代深色设计语言
- **响应式布局**: 适配不同尺寸的移动设备
- **流畅动画**: 页面交互具有流畅的过渡效果
- **组件抽象**: 高度组件化的代码结构

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 浏览器兼容

- Chrome >= 87
- Firefox >= 78
- Safari >= 14
- Edge >= 88

## 项目结构

```
music-app/
├── assets/                 # 静态资源
│   ├── *.png              # 歌单封面图片
│   └── *.svg              # 图标文件
├── src/
│   ├── components/        # Vue组件
│   │   ├── HomePage.vue
│   │   ├── StatusBar.vue
│   │   ├── HeaderNavigation.vue
│   │   ├── BannerSection.vue
│   │   ├── PlaylistHeader.vue
│   │   ├── FeaturedPlaylist.vue
│   │   ├── PlaylistGrid.vue
│   │   ├── PlaylistCard.vue
│   │   └── TabBar.vue
│   ├── App.vue           # 根组件
│   ├── main.ts          # 应用入口
│   ├── style.css        # 全局样式
│   └── vite-env.d.ts    # TypeScript定义
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 开发说明

本项目严格按照设计图还原，采用组件化开发模式：

1. **组件设计原则**：每个组件职责单一，便于复用和维护
2. **样式管理**：使用 CSS 变量统一管理主题色彩
3. **类型安全**：全面使用 TypeScript 确保代码质量
4. **响应式设计**：适配不同尺寸的移动设备

欢迎贡献代码和提出改进建议！
