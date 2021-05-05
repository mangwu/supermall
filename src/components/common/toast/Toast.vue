<template>
  <div class="toast" v-show="isShow">
    <div >{{message}}</div>
  </div>
</template>

<script>

export default {
  name: 'Toast',
  // 局部组件传递数据
  // props: {
  //   message: {
  //     type: String,
  //     default() {
  //       return ''
  //     }
  //   },
  //   show: {
  //     type: Boolean,
  //     default() {
  //       return false
  //     }
  //   }
  // }
  data() {
    return {
      message: '',
      isShow: false
    } 
  },
  methods: {
    // 全局组件使用方法
    show(message, duration=1500) {
      // console.log('---');
      this.isShow = true;
      this.message = message

      setTimeout(() => {
        this.isShow = false;
        this.message = ''
      }, duration)
    }
  }
}

</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    color: white;
    font-size: 1.7rem;
    padding: 8px 15px;
    border-radius: 5px;
    background-color: rgba(12, 12, 12, 0.6);
    transform: translate(-50%, -50%);
    z-index: 999;
  }
</style>