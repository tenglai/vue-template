<!-- 组件 模板 -->
<template>
  <div class="cell">
    <div class="title"><slot name="title"></slot></div>
    <div class="price"><slot name="price"></slot></div>
  </div>
</template>

<script>
  export default {
    // 接收父组件传值
    props: {
      obj: { // 对象
        type: Object,
        default(){
          return {}
        }
      },
      arr: { // 数组
        type: Array,
        default(){
          return []
        }
      },
      str: { // 字符串
        type: String,
        default: ''
      }
    },
    // 初始化数据
    data () {
      return {
        //
      }
    },
    // 计算属性
    computed: {
      reversedMessage:function() {
        //
      }
    },
    // 生命周期
    created() { // 组件实例创建完成
      //
    },
    mounted(){ // 模板编译/挂载之后
      //
    },
    // 监听
    watch:{
      //
    },
    // 函数
    methods: {
      //
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/css/app.scss';
  .cell{
    border-bottom: 1px solid #eee;
    height: px2rem(100px);
    div{
      height: px2rem(50px);
      line-height: px2rem(50px);
      text-indent: 1em;
      &.title{
        @include font-dpr(16px);
      }
      &.price{
        @include font-dpr(14px);
        color: red;
      }
    }
  }
</style>
