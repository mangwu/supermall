// 常量导入
import { ADD_CART_ITEM, ADD_COUNTER } from './mutation-types'

export default {
  addCart(context, payload) {
    // action为异步操作，detail需要取得反馈
    return new Promise((resolve, reject) => {
      // payload为新添加的商品
      const clength = context.state.cartList.length
      // 1. 判断商品是否已存在
      let flag = true
      for (let i = 0; i < clength; i++) {
        if (context.state.cartList[i].iid === payload.iid) {
          // item.count += 1
          // 通过mutation 修改
          // console.log('addCounter')
          context.commit(ADD_COUNTER, i)
          resolve('商品数量加一')
          flag = false
          break
        }
      }
      // 2. 商品不存在情况
      if (flag) {
        // console.log('addCartItem');
        context.commit(ADD_CART_ITEM, payload)
        resolve('添加新的商品')
      }
      // console.log(payload);


    })

    

  }
}