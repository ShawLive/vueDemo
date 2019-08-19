<template>
  <div class="hello">
    <form v-if="isReg">
      用户名：
      <input type="text" v-model="name"/>
      密码：
      <input type="text" v-model="password"/>
      <button type="button" @click="login()">登录</button>
      <button type="button" @click="reg()">注册</button>
    </form>
    <form v-else>
      用户名：
      <input type="text" v-model="name"/>
      密码：
      <input type="text" v-model="password"/>
      确认密码：
      <input type="text" v-model="repeat"/>
      <button type="button" @click="addUser()">确定</button>
      <button type="button" @click="cancel()">取消</button>
    </form>

  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      isReg: true,
      name: '',
      password: '',
      repeat: ''
    }
  },
  methods: {
    login () {
      if (localStorage.getItem("name") === this.name && localStorage.getItem("password") === this.password) {
        this.$router.push('/home/list')
      }else {
        this.name = ''
        this.password = ''
        alert('用户名密码不正确!')
      }

    },
    reg () {
      this.isReg = false
    },
    cancel () {
      this.isReg = false
    },
    addUser () {
      if (this.password === this.repeat) {
        localStorage.setItem("name", this.name)
        localStorage.setItem("password", this.password)
        this.name = ''
        this.password = ''
        this.repeat = ''
        this.isReg = true
      }else {
        alert('两次密码不一致!')
      }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
