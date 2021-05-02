<template>
  <div class="check-button">
    <img :src="checkImg" alt="" ref="checkimg" />
  </div>
</template>

<script>
import check_blank from "@/assets/img/cart/check-box-outline-blank.svg";
import check_it from "@/assets/img/cart/check-box-outline.svg";

export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    checkImg() {
      // 根据模型判断M，默认为选中
      if (this.isChecked) {
        return this.buttonPath.check_it
      } else {
        return this.buttonPath.check_blank
      }
    }
  },
  data() {
    return {
      buttonPath: {
        check_blank,
        check_it,
      },
    };
  },
  methods: {
    
  },
};
</script>

<style scoped>
img {
  width: 20px;
  height: 20px;
}
</style>
