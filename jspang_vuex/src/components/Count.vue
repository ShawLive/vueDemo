<template>
  <div>
    <h2>{{msg}}</h2>
    <hr>
    <h3>{{$store.state.count}}</h3>
    <div>
      <button @click="$store.commit('add')">+1</button>
      <button @click="$store.commit('reduce')">-1</button>
    </div>
  </div>
</template>

<script>
import store from '@/vuex/store'
export default {
  data () {
    return {
      msg: 'Hello Vuex'
    }
  },
  store
}
</script>
