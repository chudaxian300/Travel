<template>
  <div class="wrapper">
<!-- :option: 功能注册(在data内) -->
<!-- list.length确保在ajax数据到达后再渲染 -->
    <swiper :options="swiperOption" v-if="showSwiper">
        <swiper-slide v-for="item of list" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl" />
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
   </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        // class名
        pagination: '.swiper-pagination',
        // 支持循环轮播
        loop: true,
        // 自动播放3s
        autoplay: 3000
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
// 因为此处样式data传给swiper,但根据scoped防穿透因此无法应用
// 需要使用>>>穿透swiper到目标类
.wrapper >>> .swiper-pagination-bullet-active
  background: #fff !important
.wrapper
  overflow: hidden
  width:100%
  height: 0
  padding-bottom: 31.25%
  background: #eee
  .swiper-img
    width: 100%
</style>
