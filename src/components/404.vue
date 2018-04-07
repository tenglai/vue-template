<!-- 404 页面 -->
<template>
  <div class="noFound">
    <div class="img">
      <img src="../assets/img/no_found.png" />
    </div>
    <div class="tip">{{tip}}</div>
    <div class="btn" @click="goBack">返回首页</div>
  </div>
</template>

<script>
export default{
  data(){
    return {
      style:{
        width:'100%',
        height:''
      },
      tip:'抱歉，您所查找的页面不存在，可能已被删除或连接网址有误！'
    }
  },
  created() {
    // 获取屏幕高度
    // this.style.height = document.documentElement.clientHeight + 'px';
  },
  methods: {
    goBack(){
      // window.history.go(-1);
      // 页面跳转
      this.$router.push({name:'Home'});
    }
  }
}
</script>

<style lang="less" scoped>
  .noFound{
    padding-top: 100px;
    .img{
      // margin-top: 100px;
      img{
        width: 100%;
      }
    }
    .tip{
      font-size: 20px;
      padding: 0px 10px;
      text-align: center;
      margin: 50px 0px;
      line-height: 40px;
    }
    .btn{
      width: 150px;
      height: 40px;
      line-height: 40px;
      margin: 0px auto;
      font-size: 20px;
      text-align: center;
      border-radius: 10px;
      background-color: #3A68CA;
      color: #fff;
    }
  }
</style>
