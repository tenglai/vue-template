<!-- 首页 -->
<template>
  <div>
    <!-- 头部 -->
    <x-header :left-options="{showBack: false}" title="首页"></x-header>
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
        //
      }
    }
  }
</script>

<style>
  /**/
</style>
