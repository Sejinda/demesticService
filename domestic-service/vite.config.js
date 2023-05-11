import { defineConfig } from 'vite'

//配置elementplusUI按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
   Components({
      resolvers: [
        // 1. 配置elementPlus采用sass样式配色系统
        ElementPlusResolver({ importStyle: "sass" }),
      ],
    }),],
})
