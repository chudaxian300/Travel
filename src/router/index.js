import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      // 使可异步按需加载
      component: () => import('@/pages/home/Home')
    }, {
      path: '/city',
      name: 'City',
      component: () => import('@/pages/city/City')
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('@/pages/detail/Detail')
    }
  ],
  // 使路由切换时,先进入显示的页面初始xy轴都为0
  // 以此解决多页面滚动影响
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
