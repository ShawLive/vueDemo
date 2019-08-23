import Vue from 'vue'// 引入vue
import Vuex from 'vuex'// 引入vuex

// 使用vuex
Vue.use(Vuex)

// 声明一个常量对象state的count状态
const state = {
  count: 1
}

// 声明我们的getters属性
const getters = {
  count: function (state) {
    return (state.count += 100)
  }
}

// 同步 mutations是固定的写法，意思是改变的
const mutations = {
  add (state, n) {
    state.count += n
  },
  reduce (state) {
    state.count--
  }
}
// 异步
const actions = {
  // context：上下文对象，这里你可以理解称store本身
  addActions (context) {
    context.commit('add', 10)
    // 异步效果检验，增加一个计时器（setTimeOut）延迟执行
    setTimeout(() => { context.commit('reduce') }, 3000)
    console.log('我比reduce提前执行了')
  },
  // {commit}：直接把commit对象传递过来
  reduceActions ({commit}) {
    commit('reduce')
  }
}

// 声明模块组
const moduleA = {
  state,
  mutations,
  getters,
  actions
}

// 用export default封装代码，让外部可以引用
export default new Vuex.Store({
  // state,
  // mutations,
  // getters,
  // actions
  modules: {a: moduleA}
})
