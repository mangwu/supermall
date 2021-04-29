<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="detail-info">
    <div class="info-desc">
      <div class="start">
      </div>
      <div class="desc">
        {{desc}}
      </div>
      <div class="end">

      </div>
    </div>
    <div class="info-key">
      {{key}}
    </div>
    <div class="info-list">
      <img v-for="(item, index) in list" :key="index" :src="item" alt="" @load="imgLoad">
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailInfo',
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      counter: 0,
    }
    
  },
  computed: {
    desc() {
      return this.detailInfo.desc
    },
    key() {
      return this.detailInfo.detailImage[0].key
    },
    list() {
      return this.detailInfo.detailImage[0].list
    },
    imgLength() {
      return this.detailInfo.detailImage[0].list.length
    }
  },
  methods: {
    imgLoad() {
      // console.log('load');
      if (++this.counter === this.imgLength) {
        this.$emit('imageLoad')
        // console.log('load');
      }
    }
  }

}

</script>

<style scoped>
.detail-info {
  margin: 1em auto;
}
.info-list img {
  width: 100%;
}

.start {
  width: 100px;
  border: 1px solid rgb(39, 38, 38);
  margin-bottom: 2em;
}
.end {
  position: absolute;
  right: 0;
  width: 100px;
  margin-top: 2em;
  border: 1px solid rgb(39, 38, 38);
}
.desc {
  padding: 3px;
}
.info-key {
  margin-top: 2em;
  margin-bottom: 0.5em;
  text-align: center;
  font-size: 1.6rem;
  font-weight: bold;
} 
</style>