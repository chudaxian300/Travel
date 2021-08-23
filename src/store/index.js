import Vue from 'vue'
import Vuex from 'vuex'
import states from './state'
import mutations from './mutations'

Vue.use(Vuex)

// 创建vuex区域
export default new Vuex.Store({
  states,
  // actions: {
  //   changeCity (ctx, city) {
  //     // 为action调用mutations的changeCity
  //     ctx.commit('changeCity', city)
  //   }
  // },
  // 以下为组件直接调用mutations情况
  mutations
})
