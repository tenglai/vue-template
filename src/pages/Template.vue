<!-- 页面 模板 -->
<template>
  <div>
    <!-- 头部 -->
    <x-header title="模板"></x-header>
    <!-- 内容部分-->
  </div>
</template>

<script>
  import { XHeader } from 'vux'

  export default {
    // 当前页面名称
    name: 'Template',
    // 组件
    components: {
      XHeader,
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
  //
</style>
