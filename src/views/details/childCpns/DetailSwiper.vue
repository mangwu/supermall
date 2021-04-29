<template>
  <swiper class="swiper" :options="swiperOption" ref="mySwiper">
    <swiper-slide
      v-for="(item, index) in imageBanners"
      :key="index"
      class="swiper-slide"
    >
      <a :href="item">
        <img :src="item" alt="" srcset="" @load="bannerImageLoad" />
      </a>
    </swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "DetailSwiper",
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
    imageBanners: {
      get() {
        return this.banners
      },
      set() {
        this.banners = []
      }
    },
  },
  methods: {
    bannerImageLoad() {
      if (!this.isLoad) {
        // 只发送一次事件
        this.$emit("bannerImageLoad");
        this.isLoad = true;
      }
    },
    setImageSlide() {
      return setInterval(() => {
        if (this.swiper && this.swiper.params) {
          this.swiper.slideTo(
            ++this.swiper.activeIndex % this.banners.length,
            1000
          );
        }
      }, 5000)
    },
  },
  mounted() {
    // console.log('Current Swiper instance object', this.swiper){
    this.interval = this.setImageSlide()
  },
  activated() {
    /*
    由于Detail组件不是keepalive的了，activated钩子函数不再被执行
    */ 
    // 组件激活后生成interval
    // console.log('activated');
    // this.interval = this.setImageSlide()
  },
  deactivated() {
    // 组件未激活消除interval
    clearInterval(this.interval);
    // console.log('deactivated');
    // this.imageBanners.set()
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
.swiper-slide {
  height: 300px;
  overflow: hidden;
}
</style>
