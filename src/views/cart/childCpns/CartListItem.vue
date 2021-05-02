<template>
  <div class="cart-list-item">
    <!-- {{cartItem}}
     -->
    <!-- <div class="checkbox">
    
    </div> -->
    <check-button
      class="check-box"
      :is-checked="checked"
      @click.native="checkClick"
    ></check-button>
    <p class="image">
      <img :src="cartItem.image" alt="" @load="cartImgLoad" />
    </p>
    <div class="item-info">
      <div class="title">
        {{ cartItem.title }}
      </div>
      <div class="desc">
        {{ cartItem.desc }}
      </div>
      <div class="num">
        <div class="price">￥{{ cartItem.price }}</div>
        <div class="count">×{{ cartItem.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "cpns/content/checkButton/CheckButton";


export default {
  name: "CartListItem",
  props: {
    cartItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      checked: this.cartItem.checked
    }
  },
  computed: {
  },
  components: {
    CheckButton,
  },
  mounted() {
    // 监听全选中点击事件
    this.$bus.$on('checkedChange', this.checkedFixed);
  },
  methods: {
    cartImgLoad() {
      this.$emit("cartImgLoad");
    },  
    checkClick() {
      // console.log("check");
      // console.log(this.$refs.checkimg.src);
      // console.log(this.buttonPath.check_blank);
      // console.log(this.$refs.checkimg.src.indexOf(this.buttonPath.check_blank));
      // console.log('checked');
      // this.cartItem.checked = !this.cartItem.checked
      
      this.$store.commit('checkCartItem', this.cartItem)
      // console.log(this.cartItem.checked);
      this.checkedFixed()
    },
    checkedFixed() {
      this.checked = this.cartItem.checked
    }
  },
};
</script>

<style scoped>
.cart-list-item {
  display: flex;
  flex-direction: row;
  height: 150px;
  padding: 15px;
  gap: 15px;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid rgb(184, 176, 176);
}

.image img {
  /* width: 30%; */
  height: 120px;
  width: 90px;
  border-radius: 5px;
}

.item-info {
  align-self: flex-start;
  overflow: hidden;
  width: 100%;
}

.title {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 15px;
}
.desc {
  height: 48px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.num {
  width: 100%;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
}
.price {
  font-size: 1.7rem;
  color: var(--color-tint);
}
</style>
