// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
// 请求数据
import http from './http'
// 不同dpr手机兼容
import './config/setView'
// 引入路由
import router from './router'
// 引入vuex
import store from './store'
/***图片模板等懒加载 start ***/
import VueLazyload from 'vue-lazyload'
// 404图片
import errImg from './assets/img/404.png'
// loading图片
import loadingImg from './assets/img/loading-spin.svg'

// 图片懒加载配置
Vue.use(VueLazyload, {
  preLoad: 1.3, // 预加载高度比例
  error: errImg, // 图片路径错误时加载图片
  loading: loadingImg, // 预加载图片
  attempt: 1, // 尝试加载图片数量
  // set observer to true
  observer: true,
  // optional
  observerOptions: {
    rootMargin: '0px',
    threshold: 0.1
  }
})
/***图片模板等懒加载 end ***/

// 全局引入 loading/toast/alert
import { LoadingPlugin, ToastPlugin, AlertPlugin } from 'vux'
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
