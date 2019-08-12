import Vue from 'vue'
import Router from 'vue-router'
import If from '@/components/If'
import List from '@/components/List'
import Handling from '@/components/Handling'
import Carousel from '@/components/Carousel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'If',
      component: If
    },
    {
      path: '/List',
      name: 'List',
      component: List
    },
    {
      path: '/Handling',
      name: 'Handling',
      component: Handling
    },
    {
      path: '/Carousel',
      name: 'Carousel',
      component: Carousel
    }
  ]
})
