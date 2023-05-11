import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import { createPinia } from 'pinia'
// 测试接口函数
const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
