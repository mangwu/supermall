<template>
  <div class="wrapper" ref="mywrapper">
    <ul class="content">
      <li><button @click='clickBtn'>按钮</button></li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
      <li>类别</li>
    </ul>
  </div>
</template>

<script>
// 引入第三方滚动条
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";

BScroll.use(Pullup);

export default {
  name: "Category",
  data() {
    return {};
  },
  mounted() {
    let bs = new BScroll('.wrapper', {
      // 配置参数
      // 监听实时滚动位置
      probeType: 3,
      click: true,
      pullUpLoad: true
    });
    bs.on('scroll', (position) => {
      // console.log(position);
    })
    bs.on('pullingUp', () => {
      console.log('上拉加载更多');
      // 请求更多数据

      // 数据请求完成并将数据展示完成后
      // 下一次上拉加载，结束上拉加载行为。
      setTimeout(() => {
        bs.finishPullUp()
      }, 1000)
    })
  },
  methods: {
    clickBtn() {
      console.log('btn');
    }
  }
};
</script>

<style scoped>
.wrapper {
  height: 150px;
  background: red;
  margin: 0;
  overflow: hidden;
  /* 局部滚动 */
  /* overflow-y: scroll; */
}
</style>
