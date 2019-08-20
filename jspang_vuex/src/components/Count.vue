<template>
  <div>
    <h2>{{msg}}</h2>
    <hr>
    <h3>{{$store.state.count}}={{count}}</h3>
    <div>
      <button @click="$store.commit('add')">+1</button>
      <button @click="$store.commit('reduce')">-1</button>
    </div>
  </div>
</template>

<script>
import store from '@/vuex/store'
// 方法二：通过mapState的对象来赋值
import {mapState} from 'vuex'
export default {
  data () {
    return {
      msg: 'Hello Vuex'
    }
  },
  store,
  // 方法一：通过computed的计算属性直接赋值
  // computed:{
  // count () {
  // 一定要写this，要不你会找不到$store的
  //     return this.$store.state.count;
  //   }
  // }
  // 方法二：通过mapState的对象来赋值
  // computed:mapState({
  //   // 使用ES6语法的箭头函数来给count赋值
  //   // count:state=>state.count
  //   // 使用ES5语法
  //   count: function (state) {
  //       return state.count
  //   }
  // })
  // 方法三：通过mapState的数值来赋值
  computed: mapState(['count'])

}
</script>
