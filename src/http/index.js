/**
 * 请求方式支持 get , post
 */

//HttpUtil.js
import Vue from 'vue'
import router from '../router'
import axios from 'axios'

import config from './api'
var qs = require('qs')

//页面刷新时，重新赋值token
if(window.localStorage.getItem('token')) {
  store.commit(types.LOGIN,window.localStorage.getItem('token'));
}

//axios默认配置请求的api基础地址
axios.defaults.baseURL = (process.env.NODE_ENV !=='production' ? config.dev.httpUrl : config.build.httpUrl);
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.timeout = 30000;    //超时设置30s
export default ((url = '', data = {}) => {
  return {
    get (url, data) {
      return new Promise((resolve, reject) => {
        axios.get(url, {
          params: data,
          withCredentials: true
        })
        .then(function (response) {
          if (response.data.code === 1010) {
            console.log('没有权限')
            router.push({ path: '/login' })
          } else if (response.data.code == 200) {
            /*20180120 修改返回值*/
            // resolve(response.data.data)
            if(response.data.data){
              resolve(response.data.data)
            }else{
              resolve(response.data)
            }
          }else{
            console.log(response.data);
          }
        })
        .catch(function (error) {
          console.log('进入错误处理')
          reject()
          console.log(error)
        })
      })
    },
    post (url, data, upload = false) {
      return new Promise((resolve, reject) => {
        axios.post(url, upload ? data : qs.stringify(data), {
          withCredentials: true,
          headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
        })
        .then(function (response) {
          if (response.data.code === 1010) {
            console.log('没有权限')
          } else if (response.data.code === 200) {
            // console.log(response)
            resolve(response.data.data)
          } else {
            console.log('接口返回状态码：' + response.data.code)
          }
        })
        .catch(function (error) {
          reject()
          console.log(error)
        })
      })
    }
  }
})()
