<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-image" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe692;</span>{{this.gallaryImgs.length}}</div>
      </div>
    </div>
    <!-- <fade-animation>代表fade里的slot -->
    <fade-animation>
      <common-gallary :imgs="gallaryImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
    </fade-animation>
   </div>
</template>

<script>
// 路径源于travel\build\webpack.base.conf.js第40行
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/Fade'
export default {
  name: 'Detail',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  components: {
    CommonGallary,
    FadeAnimation
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow:hidden
    height: 0
    padding-bottom: 55%
    .banner-image
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      color: #fff
      line-height: .6rem
      // linear-gradient() 函数用于创建一个表示两种或多种颜色线性渐变的图片
      background-image: linear-gradient(top, rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        padding: 0 .4rem
        height: .32rem
        line-height: .32rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        margin-top: .14rem
        .banner-icon
          font-size: .24rem
</style>
