#!/bin/bash

# 构建和预览脚本
echo "🚀 开始构建 Music App..."

# 清理之前的构建
if [ -d "dist" ]; then
  echo "🧹 清理之前的构建文件..."
  rm -rf dist
fi

# 安装依赖（如果需要）
if [ ! -d "node_modules" ]; then
  echo "📦 安装依赖..."
  npm install
fi

# 构建项目
echo "🔨 构建项目..."
npm run build

if [ $? -eq 0 ]; then
  echo "✅ 构建成功！"
  echo "📁 构建文件位于: ./dist"
  
  # 询问是否要预览
  read -p "🔍 是否要启动预览服务器？(y/n): " -n 1 -r
  echo
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🌐 启动预览服务器..."
    npm run preview
  fi
else
  echo "❌ 构建失败！请检查错误信息。"
  exit 1
fi