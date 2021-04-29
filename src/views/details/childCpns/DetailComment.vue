<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="info-head">
      <div class="title">
        用户评价
      </div>
      <div class="more">更多（{{ commentInfo.commentCount }}）</div>
    </div>
    <div class="user-info">
      <div class="user-avatar">
        <img :src="commentInfo.userAvatar" alt="" srcset="" />
      </div>
      <div class="user-name">
        {{ commentInfo.userId }}
      </div>
    </div>
    <div class="info-content">
      <div class="comment-content">
        {{ commentInfo.content }}
      </div>
      <div class="info-style">
        {{ commentInfo.time | showTime }} {{ commentInfo.userStyle }}
      </div>
      <div class="extra-info">
        <div v-for="(item, index) in commentInfo.extraInfo" :key="index">
          <div>{{ item }}</div>
        </div>
      </div>
      <div class="info-img">
        <div v-for="(item, index) in commentInfo.images" :key="index">
          <img :src="item" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from 'common/utils/utils'
export default {
  name: "DetailComment",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    timeTemp(value) {
      // 时间戳是秒，乘以毫秒传入date
      const date = new Date(value * 1000);
      // 将date进行格式化
      let datetime =
        date.getFullYear() +
        "-" +
        date.getMonth() +
        "-" +
        date.getDate() +
        " " +
        date.getHours() +
        ":" +
        date.getMinutes();
      return datetime;
    },
    showTime(value) {
      // 时间戳是秒，乘以毫秒传入date
      const date = new Date(value * 1000);
      // 将date进行格式化
      return formatDate(date, 'yy/MM/dd hh:mm:ss')
    }
  },
};
</script>

<style scoped>
.comment-info {
  padding: 1rem;
  border-bottom: 4px solid rgba(123, 123, 123, 0.2);
  margin-bottom: 1em;
}

.info-head,
.user-info {
  display: flex;
  padding: 1em 0;
  margin-bottom: 1em;
  align-items: center;
}
.info-head {
  border-bottom: 2px solid rgba(123, 123, 123, 0.2);
  justify-content: space-between;
  font: 1.9rem;
  color: rgb(30, 30, 30);
}
.user-info {
  padding: 0;
}

.user-info img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.user-name {
  font: 1.9rem;
  color: rgb(30, 30, 30);
  margin-left: 10px;
}

.comment-content {
  padding-bottom: 1rem;
}

.info-style,
.extra-info {
  color: rgba(123, 123, 123, 0.95);
  margin: 1rem 0;
}

.extra-info {
  display: flex;
  gap: 5px;
  color: rgba(255, 80, 80, 0.75);
}
.info-img {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.info-img img {
  width: 100%;
}
.info-img div {
  width: 80px;
  height: 80px;
  overflow: hidden;
}
</style>
