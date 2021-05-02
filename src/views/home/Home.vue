<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <!-- 滚动重构 -->
    <tab-control
      :titles="['流行', '新款', '精选']"
      @clickItem="clickItem"
      ref="tabControlCopy"
      class="tab-control-copy"
      v-show="isTabFixed"
    ></tab-control>
    <scroll
      class="content"
      ref="homescroll"
      :probe-type="3"
      :pull-up-load="true"
      @scrolling="contentScroll"
      @pullingUp="loadMore"
    >
      <carrousel
        :banners="banners"
        @bannerImageLoad="bannerImageLoad"
      ></carrousel>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <home-character></home-character>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @clickItem="clickItem"
        ref="tabControl"
      ></tab-control>
      <goods-list :goods="showGoods"> </goods-list>
    </scroll>
    <!-- native修饰符，监听组件的原生事件 -->
    <back-top @click.native="backClick" v-show="isShowBT"></back-top>
  </div>
</template>

<script>
import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from "common/utils/utils";
import { backTopMixin } from "common/mixin/mixin";


import NavBar from "cpns/common/navbar/NavBar";
import Carrousel from "cpns/common/swiper/Carrousel";
import TabControl from "cpns/content/tabControl/TabControl";
import GoodsList from "cpns/content/goods/GoodsList";
import GoodsItem from "cpns/content/goods/GoodsItem";
import Scroll from "cpns/common/scroll/Scroll";
import BackTop from "cpns/content/backTop/BackTop";

import HomeRecommendView from "./childcpns/HomeRecommendView";
import HomeCharacter from "./childcpns/HomeCharacter";

export default {
  name: "Home",
  components: {
    NavBar,
    Carrousel,
    HomeRecommendView,
    HomeCharacter,
    TabControl,
    GoodsList,
    GoodsItem,
    Scroll,
  },
  data() {
    return {
      results: null,
      banners: null,
      recommends: null,
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      // isShowBT: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
      homeItemListener: null,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  // 发送网络请求
  created() {
    // 1. 请求主页相关数据
    this.getHomeMultidata();
    // 2. 请求商品数据 使用方法封装可以进行多次请求
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    // 3. 监听item中图片加载完成 不要在created中做 DOM可能没有
    // 改事件发送过多需要进行防抖节流（debounce/throttle）
    // 将refresh()函数传入防抖动函数中，减少执行次数
    const refresh = debounce(this.$refs.homescroll.refresh, 500);

    //  监听回调函数保存
    this.homeItemListener = () => {
      // console.log('图片加载完成');
      // 如果500ms内事件再次发送，不会进行scroll.refresh
      refresh();
    };
    this.$bus.$on("itemImageLoad", this.homeItemListener);

    this.$bus.$on("goodItemClick", () => {
      console.log("点击商品");
    });
  },
  activated() {
    this.$refs.homescroll.scrollTo(0, this.saveY, 0);
    this.$refs.homescroll.refresh();
  },
  deactivated() {
    // 保存Y值
    this.saveY = this.$refs.homescroll.getCurrentY();
    // 未激活状态取消监听itemImageLoad
    this.$bus.$off("itemImageLoad", this.homeItemListener);
  },
  mixins: [backTopMixin],
  // 封装方法
  methods: {
    /*
     * 事件监听相关方法
     */
    // 变化商品
    clickItem(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      // 让两个tabcontorl保存一致
      this.$refs.tabControlCopy.currentIndex = index;
      this.$refs.tabControl.currentIndex = index;
      // 点击时跳转到tabControl顶部
      this.$refs.homescroll.scrollTo(0, -this.tabOffsetTop, 800);
    },
    // 滚动条content位置
    contentScroll(pos) {
      // console.log(pos);
      // if (pos.y <= -1000) {
      //   this.isShowBT = true
      // } else if (pos.y > -1000) {
      //   this.isShowBT = false
      // }
      // 1. 判断backTop是否显示
      this.isShowBT = -pos.y > 1000;

      // 根据滚动位置决定tabControl的位置
      // 2. 决定tabControl是否吸顶（fixed）
      // 大于tabOffsetTop是吸顶
      this.isTabFixed = -pos.y > this.tabOffsetTop;
    },
    bannerImageLoad() {
      // 4. 获取tabControl的offsetTop(可能因为图片加载的快慢而变化)
      // console.log(this.$refs.tabControl.$el.offsetTop);
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
    },
    /*
     * 网络请求相关方法
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res.data.banner.list);
        // console.log(res.data.recommend.list);
        this.results = res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        // 不能直接赋值，因为之后会有其他数据进入数组
        // this.goods[type].list = res.data.list
        // 编译比较麻烦
        // for (n of res.data.list) {
        //   this.goods[type].list.push(n)
        // }
        // ...array 解析后一个个塞入新数组中
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // 完成上拉加载更多
        this.$refs.homescroll.finishPullUp();
      });
    },
    // 上拉加载更多
    // loadMore() {
    //   // console.log('上拉加载更多');
    //   this.getHomeGoods(this.currentType)
    //   // this.$refs.homescroll.scroll.refresh()
    //   // 前提是监听图片什么时候能加载完成
    //   this.$refs.homescroll.refresh()
    // }
    loadMore() {
      this.getHomeGoods(this.currentType);
    },

    /*
     * 防抖函数 封装到工具中
     **/
    // debounce(func, delay=100) {
    //   let timer = null
    //   return function (...args) {
    //     if (timer) clearTimeout(timer)
    //     timer = setTimeout(() => {
    //       func.apply(this, args)
    //     }, delay)
    //   }
    // },
  },
  destroyed() {
    // 跳转到其他页面后会被销毁
    console.log("destroyed");
  },
};
</script>

<style scoped>
/* scoped作用域，只在本组件中生效 */
#home {
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  font-size: 1.6rem;
  /* position: sticky;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
.content {
  /* 100% 是home的高度  */
  /* height: calc(100% - 93px); */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tab-control-copy {
  position: relative;
  z-index: 9;
}
</style>
