<!-- 首页 -->
<template>
  <div>
    <!-- 头部 -->
    <x-header :left-options="{showBack: false}" title="首页"></x-header>
    <!-- 内容部分 -->
    <mSearch v-on:currentSearchTxt="getSearchTxt" :placeholder="placeholder"></mSearch>
  </div>
</template>

<script>
  import { XHeader } from 'vux'
  // 引入 封装的请求方法
  import { homeData } from '../../http/getData'
  // 引入 输入框组件
  import mSearch from '../../components/Search'

  export default {
    components: {
      XHeader,
      mSearch,
    },
    data () {
      return {
        placeholder: '请输入书籍名称', // 输入框提示语
        count: 20, // 数量
        keywords: 'java' // 关键字
      }
    },
    mounted(){
      //获取首页数据
      this.initHome();
    },
    methods: {
      // 请求数据
      async initHome() {
        let params = {
          count: this.count,
          keywords: this.keywords
        }

        await homeData(params).then(res => {
          console.log(res);
        }).catch(err => {
          console.log(err)
        });
      },
      // 获取输入框内容
      getSearchTxt(data){
        this.keywords = data;
        this.initHome();
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
