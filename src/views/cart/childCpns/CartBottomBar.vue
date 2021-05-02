<template>
  <div class="cart-bottom-bar">
    <div class="check-all">
      <check-button
        :isChecked="checkedAll"
        class="check-button"
        @click.native="checkAllClick"
      ></check-button>
      <span class="check-text">全选</span>
    </div>
    <div class="total-price">合计：￥ {{ totalPrice }}</div>
    <div class="calculate">去计算({{ checkedLength }})</div>
  </div>
</template>

<script>
import CheckButton from "cpns/content/checkButton/CheckButton";

import { mapGetters } from "vuex";
export default {
  name: "CartBottomBar",
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters({
      totalPrice: "totalPrice",
      checkedLength: "checkedLength",
      checkedAll: "checkedAll",
    }),
  },
  methods: {
    checkAllClick() {
      // console.log('---');
      // 购物栏有商品时点击执行
      if (this.$store.state.cartList.length != 0) {
        this.$store.commit("checkItemAll");
        this.$bus.$emit('checkedChange');
      }
    },
  },
};
</script>

<style scoped>
.cart-bottom-bar {
  display: flex;
  height: 40px;
  border-bottom: 1px solid rgba(123, 123, 123, 0.2);
  box-shadow: 0 -4px 5px rgba(123, 123, 123, 0.1);
  /* justify-content: center; */
  align-items: center;
}
.check-all {
  width: 60px;
  /* height: 30px; */
  display: flex;
  /* line-height: 40px; */
  align-items: center;
  justify-content: space-around;
  /* margin-left: 10px; */
  /* padding-top: 10px; */
  position: relative;
  left: 10px;
}
.check-button {
  display: inline;
  height: 20px;
}
.check-text {
  line-height: 20px;
}
.total-price {
  width: 50%;
  text-align: center;
}
.calculate {
  color: white;
  background-color: rgba(240, 123, 123);
  width: calc(50% - 60px);
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 1.6rem;
}
</style>
