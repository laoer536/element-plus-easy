import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import elementPlusEasy from '../packages/index'
import 'element-plus/dist/index.css'
import App from './App.vue'

createApp(App).use(ElementPlus).use(elementPlusEasy).mount('#app')
