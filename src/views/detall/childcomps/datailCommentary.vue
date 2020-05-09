<template>
  <div>
    <div class="Commentary">
      <span class="Commentary-left">用户评论</span>
      <span class="Commentary-rigth">更多</span>
    </div>
    <div class="Commentary-user">
      <a href="javascript:;">
        <img :src="Commentary.user.avatar" alt />
      </a>
      <span>{{Commentary.user.uname}}</span>
      <p class="content">{{Commentary.content}}</p>
      <span>{{Commentary.created }}</span>
      <span>{{Commentary.style}}</span>
      <div class="images">
        <img :src="item" v-for="item in Commentary.images" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    Commentary: Object
  },
  filters: {
    shijian(value) {
      let data = new Date(value * 1000);
      let nian = data.FullYear();
      return 年;
    }
  }
};
</script>
<style scoped>
.Commentary {
  height: 44px;
  line-height: 44px;
  font-size: 15px;
  border-bottom: 1px solid darkgray;
  border-top: 1px solid darkgray;
}
.Commentary-left {
  margin-left: 7px;
  margin-bottom: 7px;
}
.Commentary-rigth {
  float: right;
  padding-right: 7px;
}
.Commentary-user {
  padding-top: 8px;
  margin-left: 7px;
  padding-bottom: 20px;
}
.Commentary-user a {
  display: inline-block;
  width: 40px;
  height: 40px;
  overflow: hidden;
  vertical-align: middle;
}
.Commentary-user a img {
  width: 100%;
}
.content {
  margin-bottom: 6px;
}
.images {
}
.images img {
  width: 100px;
  height: 100px;
  margin: 0 3px;
}
</style>