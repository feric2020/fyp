import Vue from 'vue'
import Router from 'vue-router'
import index_app from '@/components/index_app'
import cateList from '@/components/cateList'
import ChoppingCart from '@/components/ChoppingCart'
import personal from '@/components/personal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index_app',
      component: index_app
    },
    {
      path: '/cateList',
      name: 'cateList',
      component: cateList
    },
    {
      path: '/ChoppingCart',
      name: 'ChoppingCart',
      component: ChoppingCart
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    }
  ]
})
