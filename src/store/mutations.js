// 常量导入
import { ADD_CART_ITEM, ADD_COUNTER, CHECK_CART_ITEM, CHECK_ITEM_ALL } from './mutation-types'

export default {
  // mutation 修改state状态
  // mutation 做的事情单一
  [ADD_COUNTER](state, payload) {
    // 商品数量加一
    state.cartList[payload].count++
    // console.log(state.cartList);
    // 商品在购物车初始被选中
  },
  [ADD_CART_ITEM](state, payload) {
    // 购物车条目加一
    state.cartList.push(payload)
    // console.log(state.cartList);
    payload.checked = true
  },
  [CHECK_CART_ITEM](state, payload) {
    // console.log('check_cart_item');
    payload.checked = !payload.checked
    // 修改数组中的对象属性值后，需要重新赋值，因为无法得知对象属性变化
    let list = state.cartList;
    state.cartList = null;
    state.cartList = list;
    // console.log(this.getters.totalPrice)
  },
  // 全选中条目，修改checked
  [CHECK_ITEM_ALL](state) {
    // 全部选中时修改全部不选中
    if (this.getters.checkedAll) {
      state.cartList.forEach(element => element.checked = false);
      let list = state.cartList;
      state.cartList = null;
      state.cartList = list;
    } else {
      // 全部不选中
      state.cartList.forEach(element => element.checked = true);
      let list = state.cartList;
      state.cartList = null;
      state.cartList = list;
    }
  }

}