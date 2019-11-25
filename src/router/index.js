import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/zz-label',
      name: 'zz-label',
      component: ()=>import('../example/ZZView')
    }
  ]
})
