<template>
  <div class='tab-control'>
    <div v-for="(item, index) in titles" :key="item" class="tab-control-item" :class="{active: index===currentIndex}" @click="changeItem(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TabControl',
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    changeItem(index) {
      this.currentIndex = index
      // 传递给父组件
      this.$emit('clickItem', index)
    }
  }
}

</script>

<style scoped>
  .tab-control {
    display: flex;
    font-size: 15px;
    background: #fff;
  }
  .tab-control-item {
    flex: 1;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
  .tab-control-item span {
    padding: 5px;
  }
  .active {
    color: var(--color-high-text)
  }
  .active span {
    border-bottom: 3px solid var(--color-high-text);
  }
</style>