<template>
  <div id="app">
    <router-link to="/">灯光演示</router-link>|
    <router-link to="/List">输入显示演示</router-link>|
    <router-link to="/Handling">高亮演示</router-link>|
    <router-link to="/Carousel">轮播图演示</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
