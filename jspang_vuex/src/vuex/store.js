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
    return state.count += 100;

  }
}

// mutations是固定的写法，意思是改变的
const mutations = {
  add (state, n) {
    state.count += n
  },
  reduce (state) {
    state.count--
  }
}

// 用export default封装代码，让外部可以引用
export default new Vuex.Store({
  state,
  mutations,
  getters
})
