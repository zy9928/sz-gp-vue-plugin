import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {ZZHeaderCom} from './components/zz-header'

Vue.component(ZZHeaderCom.name, ZZHeaderCom);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


// 全局引入
// import Plugin from 'sz-gp-vue-pulgin'
// Vue.use(Plugin);

// 按需引入
// import {ZZLabel} from 'sz-gp-vue-plugin'
// Vue.use(ZZLabel);