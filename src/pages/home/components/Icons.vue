<template>
    <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
            <div class="icon-img">
              <img class="icon-imgs" :src="item.imgUrl" />
            </div>
            <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>

    </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        loop: false,
      },
      iconList: [{
        id: '0001',
        imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
        desc: '酒店'
      }, {
        id: '0002',
        imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
        desc: '机票'
      }, {
        id: '0003',
        imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/train.png',
        desc: '火车票'
      }, {
        id: '0004',
        imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/package.png',
        desc: '度假'
      }, {
        id: '0005',
        imgUrl: 'https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png',
        desc: '海外酒店'
      }, {
        id: '0006',
        imgUrl: 'https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png',
        desc: '低价机票'
      }, {
        id: '0007',
        imgUrl: 'https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png',
        desc: '汽车票船票'
      }, {
        id: '0008',
        imgUrl: 'https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png',
        desc: '自由行'
      }, {
        id: '0009',
        imgUrl: 'https://picbed.qunarzz.com/c65b3bb7571a6bd62df669213e44b84d.png',
        desc: '一日游'
      }]
    }
  },
  computed: {
    pages () {
    // 二维数组实现
    // 二维数组实现分页
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scope>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
  .icons >>> .swiper-container.swiper-container-horizontal
    height: 0
    padding-bottom: 50%
  .icons
    overflow:hidden
    height: 0
    padding-bottom: 50%
    margin-top: .1rem
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-imgs
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>
