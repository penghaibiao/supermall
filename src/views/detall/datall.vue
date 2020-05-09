<template>
  <div id="datall">
    <detalnavbar></detalnavbar>
    <scroll class="content" ref="scroll">
      <detailswiper :topimage="topimage"></detailswiper>
      <datailbaseinfo :goods="goods"></datailbaseinfo>
      <datailshopinfo :shop="shop" class="shop"></datailshopinfo>
      <!--  -->
      <datailcomment :detailInfo="detailInfo" @imageload="imageload"></datailcomment>
      <!-- 商品详情组件 -->
      <datailparameter :chima="chima"></datailparameter>
      <!-- 商品参数组件 -->
      <datailCommentary :Commentary="Commentary"></datailCommentary>
      <div class="datailconnent">
        <div class="Effect">推荐</div>
      </div>
      <goodslist :goods="recommend"></goodslist>
    </scroll>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
    </ul>
  </div>
</template>
<script>
import detalnavbar from "./childcomps/detallnavbar";
import detailswiper from "./childcomps/detailswiper";
import datailbaseinfo from "./childcomps/datailbaseinfo";
import datailshopinfo from "./childcomps/datailshopinfo";
import datailcomment from "./childcomps/datailcomment";
import datailparameter from "./childcomps/datailparameter";
import datailCommentary from "./childcomps/datailCommentary";
import goodslist from "../../components/content/goods/goodslist";
import {
  getdedail,
  Goods,
  shop,
  chima,
  getrecommend
} from "../../network/dedail";

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
      chima: {},
      Commentary: {},
      recommend: {}
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getdedail(this.iid).then(res => {
      const data = res.result;
      this.topimage = data.itemInfo.topImages;
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo);
      this.shop = new shop(data.shopInfo);
      this.chima = new chima(data.itemParams);

      this.detailInfo = data.detailInfo;
      if (data.rate.cRate != 0) {
        this.Commentary = data.rate.list[0];
      }
    });
    console.log("a");

    getrecommend().then(res => {
      this.recommend = res.data.list;
      console.log(this.recommend);
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
    datailcomment,
    datailparameter,
    datailCommentary,
    goodslist
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
</style>