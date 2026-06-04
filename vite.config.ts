import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // 1. 引入 path 模块

export default defineConfig({
  plugins: [react()],
  // 🚀 关键：改成你的 GitHub 仓库名称（前后都要有斜杠）
  base: '/guia/', 
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
