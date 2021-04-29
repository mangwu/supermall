<template>
  <!-- ref绑定给子组件 -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// 封装滚动

import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import ObserveImage from "@better-scroll/observe-image";

import { debounce } from "common/utils/utils"

BScroll.use(Pullup);
BScroll.use(ObserveImage);

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    // 父组件决定是否监听滚动
    probeType: {
      type: Number,
      default() {
        return 0;
      },
    },
    pullUpLoad: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  mounted() {
    // 通过ref拿到的元素肯定是本组件中的wrapper，避免使用query拿到其他地方的wrapper
    this.scroll = new BScroll(this.$refs.wrapper, {
      pullUpLoad: this.pullUpLoad,
      probeType: this.probeType,
      click: true,
      observeImage: true,
    });
    // 监听滚动位置
    if ((this.probeType === 2 || 3)) {
      // const scrolling = debounce(this.$emit, 50)
      this.scroll.on("scroll", (pos) => {
        // console.log(pos);
        // 传递pos
        this.$emit("scrolling", pos);
        // scrolling("scrolling", pos)
      });
    }

    // // 监听上拉事件
    // this.scroll.on('pullingUp', ()=> {
    //   console.log('上拉加载更多');
    //   this.$emit('pullingUp')
    // })
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        // console.log('上拉加载更多');
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    // 封装 向上移动方法
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    getCurrentY() {
      return this.scroll.y
    }
  },
};
</script>

<style scoped></style>
