<template>
  <div>
    <div>
      <div class="datailconnent">
        <div class="Effect">宝贝详情</div>
      </div>
      <div class="tupian" v-for="item in detailInfo.detailImage[0].list">
        <img :src="item" alt @load="imgload" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    detailInfo: Object
  },
  data() {
    return {
      counter: 0,
      imglength: 0
    };
  },
  methods: {
    imgload() {
      if (++this.counter === this.imglength) {
        this.$emit("imageload");
      }
    }
  },
  watch: {
    detailInfo() {
      this.imglength = this.detailInfo.detailImage[0].list.length;
    }
  }
};
</script>
<style scoped>
.datailconnent {
  margin-left: 7px;
}
.Effect {
  position: relative;
  text-align: center;
  height: 44px;
  line-height: 60px;
}
.Effect::before {
  content: "";
  position: absolute;
  top: 30px;
  left: 80px;
  width: 60px;
  border: 1px solid rgba(100, 100, 100, 0.3);
}
.Effect::after {
  content: "";
  position: absolute;
  top: 30px;
  right: 80px;
  width: 60px;
  border: 1px solid rgba(100, 100, 100, 0.3);
}
.tupian {
  width: 100%;
  margin-top: 5px;
  overflow: hidden;
  background-color: #fff;
}
.tupian img {
  width: 100%;
}
</style>