<template>
  <div id="app">
    <!-- 显示的是当前路由地址所对应的内容 -->
    <!-- keepalive可以使同页面资源重复访问不重复加载 -->
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
