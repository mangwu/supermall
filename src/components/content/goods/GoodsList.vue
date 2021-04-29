<template>
  <div class="goods-list">
    <!-- 遍历{{goods}} -->
    <goods-item v-for="(item, index) in goods" :key="index" :goods-item="item" class="goods"></goods-item>
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem"

export default {
  name: 'GoodsList',
  components: {
    GoodsItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}

</script>

<style scoped>
.goods-list {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

</style>