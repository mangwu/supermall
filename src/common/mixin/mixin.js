import { debounce }  from 'common/utils/utils';

// 混入，抽离组件中的生命周期函数
export const itemListenerMixin = {
  mounted() {
    const refresh = debounce(this.$refs.detailscroll.refresh, 500);
    const offsetTop = debounce(this.updateOffsetTop, 500);

    this.imgListener = () => {
      // console.log('图片加载完成');
      // 如果500ms内事件再次发送，不会进行scroll.refresh
      refresh();
      offsetTop();
    }
    this.$bus.$on("itemImageLoad", this.imgListener);
    // console.log('mixin');
  }
}

// 抽离topBack
import BackTop from "cpns/content/backTop/BackTop";

export const backTopMixin = {
  components: {
    BackTop,
  },
  data() {
    return {
      isShowBT: false
    }
  },
  methods: {
    backClick() {
      this.$refs.detailscroll && this.$refs.detailscroll.scrollTo(0, 0, 500)
      this.$refs.homescroll && this.$refs.homescroll.scrollTo(0, 0, 500)
    }
  }
}