import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), dts({ insertTypesEntry: true, copyDtsFiles: false })],
  resolve: {
    //别名
    alias: {
      '@hooks': resolve(__dirname, './hooks'),
    },
  },
  // 打包配置
  build: {
    lib: {
      entry: './index.ts', // 设置入口文件
      name: 'element-plus-easy', // 起个名字，安装、引入用
      fileName: (format) => `vite-lib.${format}.js`, // 打包后的文件名
    },
    sourcemap: true, // 输出.map文件
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'element-plus'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          'element-plus': 'element-plus',
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      sass: {
        javascriptEnabled: true,
        additionalData: '@import "index.scss";',
      },
    },
  },
})
