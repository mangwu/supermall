<template>
  <div class="cart-list">
    <scroll class="content" ref="cartscroll">
      <!-- <div v-for="(item, index) in cartList" :key="index">
        {{ item }}
      </div> -->
      <cart-list-item
        v-for="(item, index) in cartList"
        :key="index"
        :cartItem="item"
        @cartImgLoad="cartImgLoad"
      ></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from "cpns/common/scroll/Scroll";
import CartListItem from "./CartListItem";



export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem,
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    cartImgLoad() {
      // console.log('imageLoad');
      // 加载图片时更新高度
      this.$refs.cartscroll.scroll.refresh()
    }
  },
  activated() {
    // console.log('---');
    // 激活时更新高度
    this.$refs.cartscroll.refresh()
  }
};
</script>

<style scoped>
.cart-list {
  height: calc(100% - 49px - 40px);
  overflow: hidden;
}
.content {
  height: 100%;
  overflow: hidden;
}
</style>
