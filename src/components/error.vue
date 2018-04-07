<!-- 请求失败页 -->
<template>
  <div class="error">
    <!-- 头部 -->
    <x-header :left-options="{showBack: false}" title="错误" ></x-header>
    <!-- 内容部分 -->
    <img class="get-apply" src="../assets/img/net.gif" alt="错误" />
    <p class="apply-info">网络异常，请重试</p>
    <p class="font12">Wi-Fi和移动数据已关闭，请联网后再来查看</p>
    <a class="reload" @click="reload">点击重新加载</a>
  </div>
</template>

<script>
  import { XHeader } from 'vux'
  export default{
    components: {
      XHeader
    },
    methods:{
      reload(){
        window.history.go(-1);
      }
    }
  }
</script>

<style lang="less" scoped>
  .error{
    .get-apply{
      display: block;
      margin: 100px auto 0px;
    }
    .apply-info{
      margin-top: 30px;
      text-align: center;
    }
    .font12{
      margin-top: 20px;
      text-align: center;
    }
    .reload{
      display: block;
      text-align: center;
      margin: 30px auto 0px;
    }
  }
</style>
