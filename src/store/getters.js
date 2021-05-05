export default {
  cartCount(state) {
    if (state.cartList.length === 0) {
      return 0
    } else {
      let count = 0
      for (let item of state.cartList) {
        count += item.count
      }
      return count
    }
  },
  cartList(state) {
    return state.cartList
  },
  // 总价格
  totalPrice(state) {
    return state.cartList.filter((item) => {
      return item.checked
    }).reduce((preValue, item) => {
      return preValue + item.price * item.count
    }, 0).toFixed(2)
  },
  // 总购物数
  checkedLength(state) {
    return state.cartList.filter(item => {
      return item.checked
    }).reduce((preValue, item) => {
      return preValue + item.count
    }, 0)
  },
  // 是否全选中
  checkedAll(state) {
    return state.cartList.filter(item => {
      return item.checked
    }).length === state.cartList.length && (state.cartList.length !== 0)
  },
  // 是否有选中商品
  hasNoItem(state) {
    return state.cartList.filter(item => {
      return !item.checked
    }).length === state.cartList.length
  }
  

}