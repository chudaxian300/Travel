<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.currentCity}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of hot" :key="item.id" @click="handleCityClick(item.name)">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">
                        {{innerItem.name}}
                    </div>
                </div>
                </div>
            </div>
        </div>
</template>

<script>
// Bscroll:实现手机端般的拖拽效果
// city.json里的cities是用存着数组对象存
// hotCities是用对象数组存
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    // 从vuex中获取city属性,存储在名叫currentCity的计算属性中
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      // 调用store/index.js的vuex里的action方法changeCity
      // this.$store.dispatch('changeCity', city)
      // 以下为组件直接调用mutations跳过action情况
      // this.$store.commit('changeCity', city)
      // 进一步优化后
      this.changeCity(city)
      // 点击变更城市后跳回首页
      this.$router.push('/')
    },
    // 从vuex中=mutations里获取叫changeCity的方法
    // 映射在组件里一个叫changeCity的方法里
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true
    })
  },
  updated () {
    this.scroll.refresh()
  },
  watch: {
    letter () {
      if (this.letter) {
        // 此处this.$refs为整个字母的数组,如:A:...,B:...,因此[this.letter]可定位
        // this.$refs[this.letter][0]指向对应div.area
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
// &表示当前层级 &:before = .border-topbottom:before
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
         margin: .1rem
         padding: .1rem 0
         text-align: center
         border: .02rem solid #ccc
         border-redius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>
