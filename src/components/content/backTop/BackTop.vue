<template>
  <div class="back-top">
    <img src="@/assets/img/common/top.svg" alt="向上">
  </div>
</template>

<script>

export default {
  name: 'BackTop',
  methods: {
    // backClick() {
    //   // console.log('顶部');
    //   // 发送事件给Home组件（父组件）
    //   this.$emit('backClick')
    // }
    
  }
}

</script>

<style scoped>
.back-top {
  position: fixed;
  bottom: 81px;
  right: 20px;
  z-index: 5;
  width: 48px;
  background-color: white;
  height: 48px;
  border-radius: 50%;
  box-shadow: 1px 5px 10px rgba(25, 25, 25, 0.2);
}

.back-top img {
  width: 48px;
  height: 48px;
}

</style>