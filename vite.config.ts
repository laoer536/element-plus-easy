import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    //别名
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './packages/components'),
      '@store': resolve(__dirname, './src/store'),
      '@views': resolve(__dirname, './src/views'),
      '@assets': resolve(__dirname, './src/assets'),
      '@hooks': resolve(__dirname, './src/hooks'),
    },
  },
  // 打包配置
  build: {
    lib: {
      entry: 'packages/index.ts', // 设置入口文件
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
        additionalData: '@import "./packages/index.less";',
      },
    },
  },
})
