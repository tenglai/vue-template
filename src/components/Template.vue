<!-- 组件 模板 -->
<template>
  <div>
    <div></div>
    <div></div>
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

<style lang="less" scoped>
  //
</style>
