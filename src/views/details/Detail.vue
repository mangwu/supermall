<template>
  <div id="detail">
    <!-- 导航栏 -->
    <detail-nav-bar
      class="detail-nav"
      @titleClick="titleClick"
      ref="detailnavbar"
    ></detail-nav-bar>
    <scroll
      class="content"
      :pull-up-load="false"
      @bannerImageLoad="bannerImageLoad"
      ref="detailscroll"
      @scrolling="contentScroll"
      :probeType='3'
    >
      <detail-swiper :banners="topImages"></detail-swiper>
      <detail-base-info :goods="goodsInfo"></detail-base-info>
      <detail-shop-info :shop-info="shopInfo"></detail-shop-info>
      <detail-info
        :detail-info="detailInfo"
        @imageLoad="imageLoad"
      ></detail-info>
      <detail-Params
        :item-params="detailParams"
        ref="itemParams"
      ></detail-Params>
      <detail-comment
        :comment-info="detailComment"
        ref="comment"
      ></detail-comment>
      <goods-list :goods="recommend" ref="recommend"></goods-list>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./detailNavBar/DetailNavBar";
import DetailSwiper from "./childCpns/DetailSwiper";
import DetailBaseInfo from "./childCpns/DetailBaseInfo";
import DetailShopInfo from "./childCpns/DetailShopInfo";
import DetailInfo from "./childCpns/DetailInfo";
import DetailParams from "./childCpns/DetailParams";
import DetailComment from "./childCpns/DetailComment";
import GoodsList from "cpns/content/goods/GoodsList";

import {
  getDetail,
  GoodsInfo,
  ShopInfo,
  ItemComment,
  getRecommend,
} from "@/network/detail";
import { debounce } from "common/utils/utils";
import { itemListenerMixin } from "common/mixin/mixin";

import Scroll from "cpns/common/scroll/Scroll";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailInfo,
    DetailParams,
    DetailComment,
    GoodsList,
  },
  data() {
    return {
      iid: null,
      topImages: null,
      goodsInfo: {},
      shopInfo: {},
      detailInfo: {},
      detailParams: {},
      detailComment: {},
      recommend: [],
      imgListener: null,
      themeTopYs: [],
      offsetTop: 0,
    };
  },
  created() {
    //1. 接收商品iid
    this.iid = this.$route.query.iid;

    getDetail(this.iid).then((res) => {
      // console.log(res);
      const data = res.result;
      // console.log(data);
      this.topImages = data.itemInfo.topImages;
      // 2. 获取商品信息
      this.goodsInfo = new GoodsInfo(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // console.log(this.goodsInfo);
      // 3. 获取商户信息
      this.shopInfo = new ShopInfo(data.shopInfo);
      // console.log(this.shopInfo);

      // 4. 获取商品详情数据
      this.detailInfo = data.detailInfo;
      // console.log(this.detailInfo);

      // 5. 获取商品参数
      this.detailParams = data.itemParams;
      // console.log(this.detailParams);

      // 6. 获取商品评论信息
      if (data.rate.cRate !== 0) {
        this.detailComment = new ItemComment(data.rate);
        // console.log(this.detailComment);
      }
    });
    // 7. 获取推荐商品
    getRecommend().then((res) => {
      this.recommend = res.data.list;
      // console.log(this.recommend);
    });

    // 8. 更新页面control offsetTop

    // 渲染回调函数，等到渲染完后再获取offsetTop
    this.$nextTick(() => {
      
    });
  },
  methods: {
    // 更新offsetTop 
    updateOffsetTop() {
      // 空一次，防止多次更新修改数组
      this.themeTopYs = [];
      // this.$refs.itemParams.$el.offsetTop
      this.themeTopYs.push(0);
      // console.log(this.$refs.itemParams.$el.offsetTop);
      this.$refs.itemParams && this.themeTopYs.push(this.$refs.itemParams.$el.offsetTop - 44);
      this.$refs.comment && this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44);
      this.$refs.recommend && this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 44);
      console.log(this.themeTopYs);
    },
    goodItemClick() {
      console.log("iid");
    },
    bannerImageLoad() {
      this.$refs.detailscroll.refresh();
      this.updateOffsetTop()
    },
    imageLoad() {
      this.$refs.detailscroll.refresh();
      this.updateOffsetTop()
    },
    titleClick(index) {
      // console.log(index);
      // 滚动到指定位置
      this.$refs.detailscroll.scrollTo(0, -(this.themeTopYs[index]), 300);
    },
    contentScroll(pos) {
      // console.log(pos);
      this.offsetTop = -pos.y
      if (-pos.y >= this.themeTopYs[0]) {
        this.$refs.detailnavbar.currentIndex = 0
      }
      if (-pos.y >= this.themeTopYs[1]) {
        this.$refs.detailnavbar.currentIndex = 1
      }
      if (-pos.y >= this.themeTopYs[2]) {
        this.$refs.detailnavbar.currentIndex = 2
      }
      if (-pos.y >= this.themeTopYs[3]) {
        this.$refs.detailnavbar.currentIndex = 3
      }
      
    }

  },
  activated() {},
  mixins: [itemListenerMixin],
  mounted() {
    // 通过minxins混入
  },
  updated() {},
  beforeDestroy() {
    this.$bus.$off("itemImageLoad", this.imgListener);
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background: white;
  height: 100vh;
  overflow: hidden;
}

.content {
  height: calc(100% - 44px);
  overflow: hidden;
}
.detail-nav {
  position: relative;
  z-index: 10;
  background: white;
}
</style>
