<template>
  <div class="detailbottom">
    <div class="kefu">
      <i></i>
      <span>客服</span>
    </div>
    <div class="dianpu">
      <i></i>
      <span>店铺</span>
    </div>
    <div class="shoucang">
      <i></i>
      <span>收藏</span>
    </div>
    <div class="gouwuche" @click="addTocart">
      <span>加入购物车</span>
    </div>
    <div class="goumai">
      <span>购买</span>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    addTocart() {
      this.$emit("addCart");
    }
  }
};
</script>
<style scoped>
.detailbottom {
  text-align: center;
  display: flex;
  height: 49px;
  font-size: 14px;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
}
.detailbottom i {
  display: block;
  width: 25px;
  height: 25px;
  margin-top: 5px;
  margin-left: 50%;
  transform: translateX(-50%);
  background: url(../../../assets/img/detail/detail_bottom.png) no-repeat;
  background-size: 25px;
}
.dianpu i {
  background-position-y: -111px;
}
.kefu i {
  background-position-y: -60px;
}
.detailbottom div {
  flex: 1;
}
.detailbottom .gouwuche {
  flex: 2;
  line-height: 49px;
  background-color: yellow;
  color: black;
  opacity: 0.8;
}
.detailbottom .goumai {
  line-height: 49px;
  color: #fff;
  background-color: red;
  opacity: 0.8;
}
</style>