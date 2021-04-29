<template>
  <div class="shop-info" v-if="Object.keys(shopInfo).length !== 0">
    <div class="shop">
      <img :src="shopInfo.logo" alt="" srcset="" />
      <span class="name">{{ shopInfo.name }}</span>
      <span class="fans">粉丝：{{ shopInfo.fans }}</span>
    </div>
    <div class="info">
      <div class="base-info">
        <div class="sells">
          <div>
            {{ shopInfo.sells }}
          </div>
          <div>总销量</div>
        </div>
        <div class="counts">
          <div>
            {{ shopInfo.goodsCount }}
          </div>
          <div>
            宝贝
          </div>
        </div>
      </div>
      <div class="scores">
        <div v-for="(item, index) in shopInfo.score" :key="index">
          <span>
            {{ item.name }} 
          </span>
          <span class="score"> {{ item.score }} </span>
          <span v-if="item.isBetter" class="high">高</span>
          <span v-else class='low'>低</span>
        </div>
      </div>
    </div>
    <div class="link">
      <button>进店逛逛</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.shop-info {
  background: white;
  padding: 1.8em 10px;
  border-bottom: 3px solid rgba(123, 123, 123, 0.2);
  border-top: 3px solid rgba(123, 123, 123, 0.2);
}
.shop {
  height: 60px;
  position: relative;
}
.shop span.name {
  position: absolute;
  top: 20px;
  left: 60px;
  /* font-size: 1.6rem; */
}
.shop span.fans {
  position: absolute;
  top: 20px;
  left: 160px;
}
.shop img {
  width: 50px;
  height: 50px;
}

.info {
  display: flex;
  text-align: center;
  align-items: center;
}
.info div {
  flex: 1;
}

.base-info {
  display: flex;
  font-size: 1.6rem;
  color: rgb(51, 51, 51);
  border-right: 1px solid rgba(123, 123, 123, 0.3);
}
.sells div, 
.counts div{
  padding-bottom: 10px;
}

.scores {
  text-align: center;
  /* padding-left: 10px; */
}
.scores div {
  width: 75%;
  margin: 0 auto;
  text-align: left;
  margin-bottom: 5px;
}
.score {
  display: inline-block;
  width: 40px;
}
.high {
  background: rgb(240, 150, 150);
  color: white;
  padding: 1px;
}
.low {
  background: greenyellow;
  color: white;
  padding: 1px;

}
.link {
  margin-top: 15px;
  text-align: center;
}
.link button {
  border: none;
  padding: 2px 2.0em;
  border-radius: 3px;
}
</style>
