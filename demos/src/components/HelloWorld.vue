<template>
  <div class="hello">
    <h3>{{title}}</h3>
    <!-- 轮播图 -->
    <div class="swiper-container">
      <!-- 引入轮播组件 -->
      <swiper :options="swiperOption">
        <swiper-slide
        v-for="(item, index) in imgList"
        :key="index">
          <!-- 动态绑定图片地址 -->
          <img class="" :src="item"/>
        </swiper-slide>
        <!-- 分页必须写在swiper标签里 -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="swiper-button-prev" slot="button-prev"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
      <div class="swiper-button-next" slot="button-next"></div><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
    </div>
  </div>
</template>

<script >
// 局部引入 或者 全局引入 都可以
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'HelloWorld',
  data () {
    return {
      title: '轮播图演示效果',
      swiperOption: {
        // 轮播可循环
        loop : true,
        // 轮播自动滑动
        autoplay: true,
        // 轮播分页小点
        pagination: {
          el: '.swiper-pagination',
        },
        // 轮播左右按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      },
      // 图片列表
      imgList: [
        'https://i1.mifile.cn/a4/xmad_1564584687704_fIYFd.jpg',
        'https://i1.mifile.cn/a4/xmad_15632000838536_bfVMh.jpg',
        'https://i1.mifile.cn/a4/xmad_15604776623629_bRHhl.jpg'
      ]
    }
  },
  // 注册组件，引用上面的组件
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 图片样式 */
.img-item{
  width: 100%;
  object-fit: cover;
}
/* 分页定位居中 */
/* .el-center{
  left: 50%;
  margin-left: -12px;
  bottom: 10px;
} */
</style>
