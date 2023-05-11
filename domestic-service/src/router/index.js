import {createRouter,createWebHashHistory} from 'vue-router'

// 2. 定义一些路由
const routes = [
  { path: '/', component: ()=> import('../pages/Home.vue') },
  { path: '/about', component: ()=> import('../pages/About.vue') },
  { path: '/login', component: ()=> import('../pages/Login.vue') },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

export default router

