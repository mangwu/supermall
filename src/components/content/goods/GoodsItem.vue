<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImage" alt="" @load="imageLoad" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ showPrice }} </span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img
    },
    showPrice() {
      return this.goodsItem.orgPrice || ('￥' + this.goodsItem.price)
    }
  },
  methods: {
    imageLoad() {
      // 通过事件总线发送事件 图片加载完毕
      // 发送给home
      this.$bus.$emit("itemImageLoad");
    },
    itemClick() {
      // 跳转到详情页
      // console.log('详情页');
      // this.$router.push('/detail')
      // 传递参数
      this.$bus.$emit("goodItemClick");
      this.$router.push({
        path: "/detail",
        query: {
          iid: this.goodsItem.iid || this.goodsItem.item_id
        },
      });
      
    },
  },
};
</script>

<style scoped>
.goods-item {
  position: relative;
  padding-bottom: 50px;
  width: 48%;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 13px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  /* 隐藏溢出 */
  overflow: hidden;
  /* 移除部分变为…… */
  text-overflow: ellipsis;
  /* 设置只展示一行 */
  white-space: nowrap;
  font-weight: bolder;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background-image: url("~@/assets/img/home/collect.svg");
  background-size: 14px 14px;
}
</style>
