<template>
  <div>
    <h2>{{msg}}</h2>
    <hr />
    <!-- <h3>{{$store.state.count}}={{count}}</h3> -->
    <h3>{{$store.state.a.count}}={{count}}</h3>
    <div>
      <button @click="$store.commit('add',10)">+10</button>
      <button @click="reduce">-1</button>
    </div>
    <div>
      <button @click="addActions">+10</button>
      <button @click="reduceActions">-1</button>
    </div>
  </div>
</template>

<script>
import store from '@/vuex/store'
// 方法二：通过mapState的对象来赋值
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      msg: 'Hello Vuex'
    }
  },
  // 改造我们的methods方法，用扩展运算符
  // methods: mapMutations([
  //   'add',
  //   'reduce'
  // ]),
  methods: {
    ...mapMutations(['add', 'reduce']),
    ...mapActions(['addActions', 'reduceActions'])
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
  // computed: mapState(['count'])
  // vue的构造器里只能有一个computed属性，现在我们对computed属性进行改造
  computed: {
    // 改造时我们使用ES6中的展开运算符”…”
    // ...mapState(['count']),
    // count () {
    //   return this.$store.getters.count;
    // }
    // 编码进行简化
    // ...mapGetters(['count'])
    count () {
      return this.$store.state.a.count
    }
  }
}
</script>
