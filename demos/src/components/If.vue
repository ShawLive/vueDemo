<template>
  <div>
    <h3>{{title}}</h3>
    <!-- 运用 v-if 和 v-else -->
    <div v-if="isShow">现在效果是开灯</div>
    <div v-else>现在效果是关灯</div>
    <!-- 添加按钮事件 -->
    <button @click="handleClick ()">点击控制灯</button>
  </div>
</template>

<script >
export default {
  name: 'If',
  data () {
    return {
      title: '灯光演示页面',
      isShow: true
    }
  },
  methods: {
    handleClick () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
