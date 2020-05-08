<template>
  <div id="datall">
    <detalnavbar></detalnavbar>
    <scroll class="content" ref="scroll">
      <detailswiper :topimage="topimage"></detailswiper>
      <datailbaseinfo :goods="goods"></datailbaseinfo>
      <datailshopinfo :shop="shop" class="shop"></datailshopinfo>
      <datailcomment :detailInfo="detailInfo" @imageload="imageload"></datailcomment>
    </scroll>
  </div>
</template>
<script>
import detalnavbar from "./childcomps/detallnavbar";
import detailswiper from "./childcomps/detailswiper";
import datailbaseinfo from "./childcomps/datailbaseinfo";
import datailshopinfo from "./childcomps/datailshopinfo";
import datailcomment from "./childcomps/datailcomment";
import { getdedail, Goods, shop, chima } from "../../network/dedail";

import scroll from "../../components/common/scroll/scroll"; //滚动

export default {
  name: "datall",
  data() {
    return {
      iid: null,
      topimage: [],
      goods: {},
      shop: {},
      detailInfo: {},
      chima: {}
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getdedail(this.iid).then(res => {
      const data = res.result;
      this.topimage = data.itemInfo.topImages;
      console.log(res);
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo);
      this.shop = new shop(data.shopInfo);
      this.chima = new chima(data.itemParams);

      this.detailInfo = data.detailInfo;
      console.log(this.chima);
    });
  },
  methods: {
    imageload() {
      this.$refs.scroll.scroll.refresh();
    }
  },

  components: {
    detalnavbar,
    detailswiper,
    datailbaseinfo,
    datailshopinfo,
    scroll,
    datailcomment
  }
};
</script>
<style scoped>
#datall {
  position: relative;
  background-color: #fff;
  z-index: 22;
  height: 100vh;
}
.content {
  height: calc(100% -44px);
}
</style>