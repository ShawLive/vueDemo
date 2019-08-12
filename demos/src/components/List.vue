<template>
  <div>
    <h3>{{title}}</h3>
    <input type="text" v-model="msg" placeholder="请输入">
    <button @click="handleClick ()">确认</button>
    <ol>
      <li v-for="(item, index) in list" :key="index+item">{{item}}</li>
    </ol>
  </div>
</template>

<script >
export default {
  name: 'List',
  data () {
    return {
      title: '输入显示演示页面',
      list: [],
      msg: ''
    }
  },
  methods: {
    handleClick () {
      this.list.push(this.msg)
      this.msg = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
