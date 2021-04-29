import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false

// Vue实例作为事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// commonJS 不建议写在这，Vue实例时会渲染App.vue
// require('./assets/css/base.css')