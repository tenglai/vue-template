/**
 * 路由配置
 */
import Vue from 'vue'
import Router from 'vue-router'
// 引入其他页面
import Home from '../pages/Home/Home' // 首页
import Mine from '../pages/Mine/Mine' // 我的

Vue.use(Router)

export default new Router({
  routes: [
    // 首页(默认)
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // 首页
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    // 我的
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
