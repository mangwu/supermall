<template>
  <swiper class="swiper" :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" srcset="" @load="bannerImageLoad" />
      </a>
    </swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "Carrousel",
  title: "Pagination",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        },
      },
      interval: null,
      isLoad: false,
    };
  },
  props: {
    banners: {
      type: Array,
    },
  },
  computed: {
    swiper() {
      if (this.$refs.mySwiper) {
        return this.$refs.mySwiper.$swiper;
      }
    },
  },
  methods: {
    bannerImageLoad() {
      if (!this.isLoad) {
        // 只发送一次事件
        this.$emit('bannerImageLoad')
        this.isLoad = true
      }
      
    }
  },
  mounted() {
    // console.log('Current Swiper instance object', this.swiper){
    this.interval = setInterval(() => {
      if (this.swiper && this.swiper.params) {
        this.swiper.slideTo(
          ++this.swiper.activeIndex % this.banners.length,
          1000
        );
      }
    }, 5000);
  },
  beforeDestroy() {
    // 组件销毁前删除interval
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
/* // .swiper {
//   height: 300px;
//   width: 100%;

//   .swiper-slide {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     text-align: center;
//     font-weight: bold;
//     font-size: 50px;
//     background-color: white;
//   }
// } */
img {
  width: 100%;
}
</style>
