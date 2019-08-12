<template>
  <div>
    <h3>{{title}}</h3>
    <button class="default"
    v-for="(item, index) in 9" :key="index+item" 
    @click="handleClick (index+item)"
    :class="{red : handling == index+item}">{{item}}</button>
  </div>
</template>

<script >
export default {
  name: 'Handling',
  data () {
    return {
      title: '高亮演示页面',
      list: ['wo', 'xi', 'huan', 'yao', 'yao'],
      handling: ''
    }
  },
  methods: {
    handleClick (index) {
        this.handling = index
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.default{
    background: gold
}
.red{
    background: red
}
</style>