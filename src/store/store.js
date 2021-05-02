import Vue from 'vue'
import Vuex from 'vuex'

// 导入封装
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 安装插件
Vue.use(Vuex)

// 定义共享状态
const state = {
  // 添加商品
  cartList: []
}

// 创建store对象
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})

// 挂载Vue实例上
export default store