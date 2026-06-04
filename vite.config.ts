import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // 1. 引入 path 模块

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 2. 定义别名：把 @ 映射到项目根目录下的 src 文件夹
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
