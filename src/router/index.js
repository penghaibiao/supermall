import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('../views/home/home')
const fenlei = () => import('../views/fenlei/fenlei')
const xinxi = () => import('../views/xinxi/xinxi')
const zhanshi = () => import('../views/zhanshi/zhanshi')
const detail = () => import('../views/detall/datall')

// 1.安装VueRouter
Vue.use(VueRouter)

// 2.配置路由信息
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/fenlei',
    component: fenlei
  },
  {
    path: '/xinxi',
    component: xinxi
  },
  {
    path: '/zhanshi',
    component: zhanshi
  },
  {
    path: '/detail/:iid',
    component: detail
  }
]

// 3.创建路由对象
const router = new VueRouter({
  mode: 'history',
  routes
})

// 4.导出
export default router
