<template>
  <div class="toast" v-show="show">
    <div >{{message}}</div>
  </div>
</template>

<script>

export default {
  name: 'Toast',
  props: {
    message: {
      type: String,
      default() {
        return ''
      }
    },
    show: {
      type: Boolean,
      default() {
        return false
      }
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
    z-index: 5;
  }
</style>