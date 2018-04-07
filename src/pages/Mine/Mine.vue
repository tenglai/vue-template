<!-- 我的 -->
<template>
  <div>
    <!-- 头部 -->
    <x-header :left-options="{showBack: false}" title="我的"></x-header>
    <!-- 内容部分 -->
    <!-- 图片懒加载-->
    <img class="item-pic" v-lazy="picUrl" />
  </div>
</template>

<script>
  import { XHeader } from 'vux'

  export default {
    components: {
      XHeader,
    },
    data () {
      return {
        picUrl: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1873072157,405780895&fm=27&gp=0.jpg"
      }
    }
  }
</script>

<style lang="less" scoped>
  .item-pic{
    width: 100%;
  }
</style>
