<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>

    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
import MainTabBar from "cpns/content/MainTabBar";
export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>
<style>
/* 导入公共样式 */
@import "assets/css/base.css";
</style>
