import Vue from 'vue'
import Router from 'vue-router'
import All from '@/components/all'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'All',
      component: All,
    },
  ],
})
