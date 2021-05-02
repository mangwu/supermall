<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="cart-nav-bar">
      <template v-slot:center> 购物车({{ cartNum }}) </template>
    </nav-bar>
    <!-- 购物车列表 -->
    <cart-list :cartList="cartList"></cart-list>
    <!-- 底部汇总 -->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "cpns/common/navbar/NavBar";
import CartList from "./childCpns/CartList";
import CartBottomBar from "./childCpns/CartBottomBar";
// 直接使用getters中的计算属性，不自己定义
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    // 对vuex中的getters对象的解构
    // 第一种语法：指定getters中需要转化的计算属性
    // ...mapGetters([
    //   'cartCount',
    // ]),

    // 第二种写法，指定转化的计算属性的key值
    ...mapGetters({
      cartNum: "cartCount",
      cartList: "cartList"
    }),
  },
};
</script>

<style scoped>
.cart {
  /* position: absolute; */
  height: calc(100vh - 49px);
  overflow: hidden; 
}

.cart-nav-bar {
  color: white;
  background: var(--color-tint);
  font-size: 1.6rem;
}
</style>
