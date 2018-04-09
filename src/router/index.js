/**
 * 路由配置
 */
import Vue from 'vue'
import Router from 'vue-router'

// // 引入其他页面
// import Login from '../pages/Login/Login' // 登录页
// import Home from '../pages/Home/Home' // 首页
// import Mine from '../pages/Mine/Mine' // 我的
// import Error from '../components/error' // 请求失败 error页面
// import NotFound from '../components/404' // 404页面

//分页面异步加载文件
const Login = r => require.ensure([], () => r(require('@/pages/Login/Login')), 'Login')
const Home = r => require.ensure([], () => r(require('@/pages/Home/Home')), 'Home')
const Mine = r => require.ensure([], () => r(require('@/pages/Mine/Mine')), 'Mine')
const Error = r => require.ensure([], () => r(require('@/components/error')), 'Error')
const NotFound = r => require.ensure([], () => r(require('@/components/404')), 'NotFound')

Vue.use(Router)

export default new Router({
  routes: [
    // 首页(默认)
    {
      path: '/',
      component: Home
    },
    // 登录页
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    // 首页
    {
      path: '/home',
      name: 'Home',
      component: Home,
      // meta: { keepAlive: true }
    },
    // 我的
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    // 请求失败页面
    {
      path: '/error',
      name: 'Error',
      component: Error
    },
    // 404页面
    {
      path: '/notFound',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
