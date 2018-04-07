<template>
  <div id="app">
    <!-- 视图层 -->
    <transition name="router-fade" mode="out-in">
      <!--此处是要做缓存用，数据加载过多的页面使用 keepAlive-->
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <!-- 底部选项卡 -->
    <tabbar @on-index-change="onIndexChange" v-if="tabbarShow">
      <tabbar-item selected link="/home">
        <img slot="icon" src="./assets/img/ic_tab_home_normal.png">
        <img slot="icon-active" src="./assets/img/ic_tab_home_active.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item badge="2" link="/mine">
        <img slot="icon" src="./assets/img/ic_tab_profile_normal.png">
        <img slot="icon-active" src="./assets/img/ic_tab_profile_active.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  // 引入 vux tabbar 组件
  import { Tabbar, TabbarItem } from 'vux'
  // 引入 vuex 的两个方法
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'app',
    components:{
      Tabbar,
      TabbarItem
    },
    data() {
      return {
        //
      }
    },
    // 计算属性
    computed:mapGetters([
      // 从 getters 中获取值
      'tabbarShow'
    ]),
    // 监听,当路由发生变化的时候执行
    watch:{
      $route(to,from){
        if(to.path == '/' || to.path == '/home' || to.path == '/audioBook' || to.path == '/mine'){
          /**
           * $store来自Store对象
           * dispatch 向 actions 发起请求
           */
          this.$store.dispatch('showTabBar');
        }else{
          this.$store.dispatch('hideTabBar');
        }
      }
    },
    methods: {
      onIndexChange (newIndex, oldIndex) {
        // console.log(newIndex, oldIndex);
      }
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    height: 100%;
  }
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }
</style>
