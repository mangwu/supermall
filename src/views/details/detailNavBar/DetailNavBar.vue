<template>
  <div>
    <nav-bar class="detail-nav">
      <template v-slot:left>
        <div class="back" @click="backClick">
          <img src="~@/assets/img/common/back.svg" alt="back" srcset="">
        </div>
        
      </template>
      <template v-slot:center>
        <div class="detailcenter">
          <div
            v-for="(item, index) in detailTitle"
            :key="item"
            :class="{ active: currentIndex == index }"
            @click="navItemClick(index)"
          >
            {{ item }}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "cpns/common/navbar/NavBar"

export default {
  name: 'DetailNavBar',
  data() {
    return {
      detailTitle: [
        '商品', '参数', '评论', '推荐'
      ],
      currentIndex: 0,
    }
  },
  components: {
    NavBar
  },
  methods: {
    navItemClick(index) {
      this.currentIndex = index
      // 发送给父组件
      this.$emit('titleClick', index)
    },
    backClick() {
      this.$router.back()
    }
  }

}
</script>

<style scoped>
/* .detail-nav {
  background-color: white;
  color: black;
  font-size: 1.4rem;
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
} */

.detailcenter {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  /* justify-content: space-evenly; */

}

.detailcenter div {
  flex: 1;
}

div.active {
  color: var(--color-tint);
  border-bottom: 3px solid var(--color-tint);
}

.back img {
  width: 30px;
  height: 30px;
  line-height: 30px;
  /* margin-top: 7px; */
  vertical-align: middle;
}
</style>
