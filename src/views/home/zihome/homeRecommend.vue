<template>
  <div class="homeRecommend">
    <div v-for="item in recommends" class="nvrbar">
      <a :href="item.link">
        <img :src="item.image" />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style scoped>
.homeRecommend {
  display: flex;
  width: 100%;
  text-align: center;
  /* border-bottom: 8px solid #eee; */
  box-shadow: 0 3px 10px rgba(100, 100, 100, 0.1);
  margin-top: 6px;
  margin-bottom: 10px;
  font-size: 14px;
}
.nvrbar {
  flex: 1;
}
.nvrbar a {
  width: 40px;
  height: 40px;
}
.nvrbar img {
  width: 60px;
  margin-bottom: 6px;
}
.homeRecommend div {
  margin-bottom: 6px;
}
</style>