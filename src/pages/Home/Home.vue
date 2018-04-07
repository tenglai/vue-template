<!-- 首页 -->
<template>
  <div>
    <!-- 头部 -->
    <x-header :left-options="{showBack: false}" title="首页"></x-header>
    <!-- 内容部分 -->
    <mSearch v-on:currentSearchTxt="getSearchTxt" :placeholder="placeholder"></mSearch>
    <!-- 列表 -->
    <div class="wrapper" ref="wrapper">
      <home-cell v-for="(item,index) in bookList" :key="item.id">
        <span slot="title">{{item.title}}</span>
        <span slot="price">{{item.price}}</span>
      </home-cell>

      <div class="bottom-tip">
        <span class="loading-hook">查看更多</span>
      </div>
    </div>
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
  // better-scroll
  import BScroll from 'better-scroll'

  export default {
    components: {
      XHeader,
      mSearch,
      HomeCell,
    },
    data () {
      return {
        placeholder: '请输入书籍名称', // 输入框提示语
        count: 20, // 数量
        keywords: 'java', // 关键字
        bookList: [], // 书籍数据
        nomore: false,
      }
    },
    mounted(){
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper);
      });
      //获取首页数据
      this.initHome();
    },
    methods: {
      // 请求数据
      async initHome() {
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
      loadMore() {
        var self = this;
        homeData({count: this.count,keywords: this.keywords}).then((res) => {
          // 数组拼接
          this.bookList = res.books.concat(this.bookList);
          this.$nextTick(() => {
            if (!this.scroll) {
              this.scroll = new Bscroll(this.$refs.wrapper, {
                pullUpLoad:{
                  threshold: -30, // 负值是当上拉到超过低部 30px；正值是距离底部距离时，
                }
              })
              this.scroll.on('touchend', (pos) => {
                // 下拉动作
                if (pos.y > 50) {
                  self.loadData()
                }
              })
              this.scroll.on('pullingUp', (pos) => {
                document.querySelector('.loading-hook').innerText = '加载中...';
                setTimeout(function () {
                  // 恢复文本值
                  document.querySelector('.loading-hook').innerText = '查看更多';
                  // 向列表添加数据
                  self.loadMore();
                }, 1000);
              })
            } else {
              this.scroll.finishPullUp()
              this.scroll.refresh()
            }
          })
        })
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
  .wrapper{
    // position: absolute;
    // top: 91px;
    // left: 0px;
    // right: 0px;
    // bottom: 53px;
    overflow: hidden;
  }
  /*隐藏 滚动条*/
  ::-webkit-scrollbar{
    display:none;
  }
</style>
