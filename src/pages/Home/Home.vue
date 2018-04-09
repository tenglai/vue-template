<!-- 首页  -->
<template>
  <div>
    <!-- 头部 -->
    <x-header :left-options="{showBack: false}" title="首页"></x-header>
    <!-- 内容部分 -->
    <mSearch
      v-on:currentSearchTxt="getSearchTxt"
      :placeholder="placeholder"
    ></mSearch>
    <!-- 滚动列表 -->
    <scroller
      class="wrapper"
      :data="bookList"
      :pulldown="pulldown"
      @pulldown="fetchData"
      :pullup="pullup"
      @pullup="loadMore"
      >
      <ul class="content">
        <!-- 内容(列表)部分 -->
        <home-cell v-for="(item,index) in bookList" :key="index">
          <span slot="title">{{item.title}}</span>
          <span slot="price">{{item.price}}</span>
        </home-cell>
      </ul>
      <div class="loading-wrapper"></div>
    </scroller>
  </div>
</template>

<script>
  import { XHeader } from 'vux'
  // 引入 封装的请求方法
  import { homeData } from '../../http/getData'
  // 引入 输入框组件
  import mSearch from '../../components/Search'
  // 引入 子组件
  import HomeCell from '../../components/HomeCell'
  // 引入下拉刷新组件
  import Scroller from '../../components/Scroll'

  export default {
    components: {
      XHeader,
      mSearch,
      HomeCell,
      Scroller,
    },
    data () {
      return {
        placeholder: '请输入书籍名称', // 输入框提示语
        count: 20, // 数量
        keywords: 'java', // 关键字
        bookList: [], // 书籍数据
        pulldown: true, // 下拉刷新
        pullup: true // 上拉加载更多
      }
    },
    mounted(){
      //获取首页数据
      this.fetchData();
    },
    methods: {
      // 获取输入框内容
      getSearchTxt(data){
        this.keywords = data;
        this.initHome();
      },
      // 请求数据
      async fetchData() {
        console.log('刷新操作!');
        // 参数
        let params = {
          count: this.count,
          keywords: this.keywords
        }
        // 发起请求
        await homeData(params).then(res => {
          this.bookList = res.books;
        }).catch(err => {
          console.log(err)
        });
      },
      // 加载更多
      loadMore(){
        console.log('加载更多操作!');
        // 参数
        // let params = {
        //   count: this.count,
        //   keywords: this.keywords
        // }
        // homeData(params).then(res => {
        //   this.bookList = this.bookList.concat(res.books);
        // }).catch(err => {
        //   console.log(err)
        // });
      }
    }
  }
</script>

<style lang="less" scoped>
  .wrapper{
    position: absolute;
    top: 91px;
    left: 0px;
    right: 0px;
    bottom: 53px;
    overflow: hidden;
  }
  /*隐藏 滚动条*/
  ::-webkit-scrollbar{
    display:none;
  }
</style>
