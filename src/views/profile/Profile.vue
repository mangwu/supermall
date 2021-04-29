<template>
  <div>
    <scroll class="content" :probe-type='0'>
      <ul >
        <li v-for="item in 50" :key="item">
          {{item}}
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script>

import Scroll from 'cpns/common/scroll/Scroll'

export default {
  name: 'Profile',
  components: {
    Scroll,
  }
}

</script>

<style scoped>
  .content {
    height: 300px;
    background: red;
    overflow: hidden;
  }
</style>