import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

// 导入第三方插件
import VueLazyLoad from 'vue-lazyload'
// 导入直接封装的插件
import toast from 'cpns/common/toast'

Vue.config.productionTip = false

// Vue实例作为事件总线
Vue.prototype.$bus = new Vue()
// 安装toast插件 (使用vue.use会自动执行导出对象的install函数)
Vue.use(toast)
// 使用懒加载插件 修改:src为v-lazy
Vue.use(VueLazyLoad, {
  // 传入option 见https://github.com/hilongjw/vue-lazyload#constructor-options
  loading: require('./assets/img/65123727_1.gif')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// commonJS 不建议写在这，Vue实例时会渲染App.vue
// require('./assets/css/base.css')