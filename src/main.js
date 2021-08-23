// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// fastclick:解决移动端click事件延迟问题
// reset.css:重置页面样式表,使不同设备样式统一
// border.css:解决移动端1像素边框问题
// vue-awesome-swiper:vue轮播图插件
// 13-16 styles来源见:travel\build\webpack.base.conf.js 39:7
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/swiper-bundle.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
