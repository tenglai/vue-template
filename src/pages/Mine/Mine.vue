<!-- 我的 -->
<template>
  <div>
    <!-- <scroll :data="su" class="scroll">
      <div>
        <div class="slider-wrapper">
          <slider>
            <div v-for='item in slider'>
              <a href="">
                <img :src="item.url" alt="">
              </a>
            </div>
          </slider>
        </div>
        <ul v-for='item in su'>
          <li>{{item}}</li>
        </ul>
      </div>
    </scroll> -->
    <banner :loop='loop' :autoPlay='autoPlay'>
      <img v-for="(item,index) in slider" :key="item.id" :src="item.url" />
    </banner>
  </div>
</template>

<script>
  // 轮播图组件
  import Slider from '../../components/Slider'
  import Banner from '../../components/Banner'
  // 加载更多组件
  import Scroll from '../../components/Scroll'

  export default {
    components: {
      Slider,
      Banner,
      Scroll,
    },
    data () {
      return {
        slider: [
          {url: 'http://upload-images.jianshu.io/upload_images/7932253-54c81df0beed405b.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1080/q/50'},
          {url: 'https://y.gtimg.cn/music/photo_new/T003R720x288M000004ERTpn1UBu2f.jpg?max_age=2592000&max_age=2592000'},
          {url: 'https://y.gtimg.cn/music/photo_new/T003R720x288M00000077s7P0HaZpc.jpg?max_age=2592000&max_age=2592000'},
          {url: 'https://y.gtimg.cn/music/photo_new/T003R720x288M000001QL1Si05yMPq.jpg?max_age=2592000&max_age=2592000'},
          {url: 'https://y.gtimg.cn/music/photo_new/T003R720x288M000002ke7OC3ooZ5g.jpg?max_age=2592000&max_age=2592000'},
        ],
        loop:true,
        autoPlay:true
      }
    },
    methods: {
      //
    }
  }
</script>

<style>
  .slider-wrapper{
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  .scroll{
    height: 500px;
  }
</style>
