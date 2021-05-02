<template>
  <div class="detail-tabbar">
    <!-- <h2>底部工具栏</h2> -->
    <div class="shop-op">
      <div class="tab-bar-item ">
        <div v-if="isActive">
          <img src="~@/assets/img/detail/server.svg" alt="" srcset="" />
        </div>
        <div v-else>
          <img src="~@/assets/img/detail/server.svg" alt="" />
        </div>
        <!-- 通过属性控制颜色 -->
        <div>
          客服
        </div>
      </div>
      <div class="tab-bar-item ">
        <div>
          <img src="~@/assets/img/detail/shop.svg" alt="" srcset="" />
        </div>
        <!-- 通过属性控制颜色 -->
        <div>
          店铺
        </div>
      </div>
      <div class="tab-bar-item " @click="collectClick">
        <div v-if="!isActive">
          <img src="~@/assets/img/detail/collect.svg" alt="" srcset="" />
        </div>
        <div v-else class="active">
          <img src="~@/assets/img/detail/collect_active.svg" alt="" />
        </div>
        <!-- 通过属性控制颜色 -->
        <div :style="activeStyle">
          收藏
        </div>
      </div>
    </div>
    <div class="op">
      <div class="cart" @click="addToCart">
        加入购物车
      </div>
      <div class="shopping">
        购买
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailTabBar",
  data() {
    return {
      isActive: false,
      activeStyle: {
        color: "inherit",
      },
    };
  },
  methods: {
    collectClick() {
      this.isActive = !this.isActive
      if (this.activeStyle.color == 'inherit') {
        this.activeStyle.color = "rgb(255, 120, 120)"
      } else {
        this.activeStyle.color = "inherit"
      }
      
    },
    addToCart() {
      // 点击添加到购物车
      // console.log('购物车');
      this.$emit('addToCart')
    }
  },
};
</script>

<style scoped>
.detail-tabbar {
  height: 49px;
  background: white;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 8;
  display: flex;
  box-shadow: 0 -5px 5px rgba(199, 196, 196, 0.2);
}
.detail-tabbar div {
  flex: 1;
}
.shop-op {
  display: flex;
  justify-content: center;
}
.tab-bar-item {
  /* 均匀分布 */
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 1.4rem;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

.op {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.op div {
  flex: 1;
}

.cart,
.shopping {
  height: 49px;
  line-height: 49px;
  font-size: 1.6rem;
}
.cart {
  background-color: rgb(255, 255, 85);
}
.shopping {
  background-color: rgb(255, 120, 120);
  color: white;
}

.active img {
  width: 32px;
  height: 32px;
  margin-top: -1.2px;
  vertical-align: middle;
  margin-bottom: -2px;
}
</style>
