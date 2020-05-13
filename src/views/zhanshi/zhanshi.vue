<template>
  <div class="zhanshi">
    <Navbar class="gouwu">
      <div slot="nav-center">购物车({{$store.state.carList.length}})</div>
    </Navbar>
    <scroll class="content" ref="scroll">
      <xianqing :itemInfo="$store.state.carList"></xianqing>
    </scroll>
    <Settlementtoolbar></Settlementtoolbar>
  </div>
</template>
<script>
import Navbar from "../../components/common/navbar/NavBar";

import scroll from "../../components/common/scroll/scroll"; //滚动

import xianqing from "./zigouwu/xianqing";
import Settlementtoolbar from "./zigouwu/Settlementtoolbar";

export default {
  components: { Navbar, xianqing, scroll, Settlementtoolbar },
  activated() {
    this.$refs.scroll.scroll.refresh();
    console.log("----");
  }
};
</script>
<style scoped>
.zhanshi {
  position: relative;
  z-index: 22;
  height: 91vh;
}
.gouwu {
  width: 100%;
  background-color: #ff0077;
  color: aliceblue;
  font-weight: 700;
  position: relative;
  z-index: 1;
  overflow: hidden;
}
.content {
  height: calc(100% - 44px - 40px);
  overflow: hidden;
}
</style>