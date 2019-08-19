import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // "/"表示绝对路径
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      // 子路由
      children: [
        {
          // 这里是路由路径
          path: 'list',
          name: 'list',
          // 组件路径   当访问路由时，它是惰性加载的。
          component: () => import(/* webpackChunkName: "list" */ '@/components/List.vue')
        },
        {
          // 这里是相对路径
          path: 'user',
          name: 'user',
          // 当访问路由时，它是惰性加载的。
          component: () => import(/* webpackChunkName: "user" */ '@/components/User.vue')
        }
      ]
    },
    {
      path: '/add',
      name: 'add',
      component: () => import(/* webpackChunkName: "add" */ '@/components/Add.vue')
    }
  ]
})
