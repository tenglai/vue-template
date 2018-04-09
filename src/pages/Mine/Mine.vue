<!-- 我的 -->
<template>
  <div>
    <!-- 头部 -->
    <x-header :left-options="{showBack: false}" title="我的"></x-header>
    <!-- 内容部分 -->
    <!-- 轮播图 -->
    <div class="slider-wrapper" v-if="recommends.length">
      <slider>
        <div v-for="(item, index) in recommends" :key="index">
          <a>
            <img :src="item.picUrl">
          </a>
        </div>
      </slider>
    </div>
  </div>
</template>

<script>
  import { XHeader } from 'vux'
  // 轮播图组件
  import Slider from '../../components/Slider'

  export default {
    components: {
      XHeader,
      Slider,
    },
    data () {
      return {
        recommends: [
          {picUrl: require('../../assets/img/01.jpg')},
          {picUrl: require('../../assets/img/02.jpg')},
          {picUrl: require('../../assets/img/03.jpg')},
          {picUrl: require('../../assets/img/04.jpg')},
          {picUrl: require('../../assets/img/05.jpg')},
        ]
      }
    },
    methods: {
      //
    }
  }
</script>

<style lang="scss" scoped>
  .slider-wrapper{
    position: relative;
    width: 100%;
    overflow: hidden;
  }
</style>
