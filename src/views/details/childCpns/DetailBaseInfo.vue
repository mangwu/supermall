<template>
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
  <!-- <div class="base-info"> -->
    <div class="title">
      {{goods.title}}
    </div>
    <div class="price">
      <span class="realPrice">￥{{goods.realPrice}}</span>
      <span class="oldPrice">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="columns">
      <div v-for="(item, index) in goods.columns" :key="index">
        {{item}}
      </div>
    </div>
    <div class="services">
      <div v-for="(item, index) in goods.services" :key="index" class="service-item" v-show="(index !== 3)">
        <img :src="item.icon" alt="" srcset="">{{item.name}}
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}

</script>

<style scoped>
.base-info {
  width: 97%;
  margin: 0 auto;
}
.title {
  font-size: 1.2em;
  padding: 1rem 0;
  font-weight: bold;
}
.price {
  padding: 5px 0;
}
.realPrice {
  color: var(--color-tint);
  font-size: 2.0rem;
  font-weight: bold;
}
.oldPrice {
  text-decoration: line-through rgba(123, 123, 123, 0.5) 2px;
  color: rgba(123, 123, 123, 0.5);
  margin-left: 10px;

}
.discount {
  display: inline-block;
  color: white;
  background-color: var(--color-tint);
  padding: 2px;
  font-size: 1.5rem;
  border-radius: 5px;
  margin-left: 10px;
  transform: translateY(-5px);
}
.columns {
  margin: 1rem auto;
  display: flex;
  color: rgba(123, 123, 123, 0.5);
  padding-bottom: 1rem;
  border-bottom: 3px solid rgba(123, 123, 123, 0.2);
  justify-content: space-between;
}
.services {
  margin: 1rem auto;
  display: flex;
  padding: 1rem 0;
  justify-content: space-between;
}
.services img {
  width: 14px;
  height: 14px;
}


/* .service-item */

</style>