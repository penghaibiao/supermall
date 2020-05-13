<template>
  <div id="datall">
    <detalnavbar @titleclick="titleclick" ref="detalnavbar"></detalnavbar>
    <scroll class="content" ref="scroll" @scroll="contentscroll" :probeType="3">
      <detailswiper :topimage="topimage"></detailswiper>
      <datailbaseinfo :goods="goods"></datailbaseinfo>
      <datailshopinfo :shop="shop" class="shop"></datailshopinfo>
      <!--  -->
      <datailcomment :detailInfo="detailInfo" @imageload="imageload"></datailcomment>
      <!-- 商品详情组件 -->
      <datailparameter :chima="chima" ref="params"></datailparameter>
      <!-- 商品参数组件 -->
      <datailCommentary :Commentary="Commentary" ref="commoent"></datailCommentary>
      <div class="datailconnent">
        <div class="Effect">推荐</div>
      </div>
      <goodslist :goods="recommend" ref="tuijian"></goodslist>
    </scroll>
    <backtop @click.native="backclick" v-show="isshow"></backtop>

    <detailbottom @addCart="addCart"></detailbottom>
    <toast v-show="dian" :text="text"></toast>
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
import detailbottom from "./childcomps/detailbottom";

import goodslist from "../../components/content/goods/goodslist";
import toast from "../../components/common/toast/toast";
import { itemmixin, backTopMixin } from "../../components/common/mixin";
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
      recommend: {},
      themeTopYs: [],
      curr: 0,
      isshow: false,
      dian: false,
      text: String
    };
  },
  mixins: [itemmixin, backTopMixin],
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

    getrecommend().then(res => {
      this.recommend = res.data.list;
    });
  },
  mounted() {},
  methods: {
    imageload() {
      this.$refs.scroll.scroll.refresh();
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.commoent.$el.offsetTop);
      this.themeTopYs.push(this.$refs.tuijian.$el.offsetTop);
      console.log(this.themeTopYs);
    },
    titleclick(index) {
      console.log(this.themeTopYs);

      this.$refs.scroll.scroll.scrollTo(0, -this.themeTopYs[index], 1000);
    },
    contentscroll(position) {
      const positionY = -position.y;
      let length = this.themeTopYs.length;
      for (let i = 0; i < length; i++) {
        if (
          (this.curr !== i &&
            i < length - 1 &&
            positionY >= this.themeTopYs[i] &&
            positionY < this.themeTopYs[i + 1]) ||
          (i === length - 1 && positionY > this.themeTopYs[parseInt(i)])
        ) {
          this.curr = i;
          this.$refs.detalnavbar.currentindex = this.curr;
          console.log(this.$refs.detalnavbar.currentindex);
        }
      }
      this.listshowbackTop(position);
    },
    addCart() {
      const duct = {};
      duct.image = this.topimage[0];
      duct.title = this.goods.title;
      duct.desc = this.goods.desc;
      duct.realPrice = this.goods.realPrice;
      duct.iid = this.iid;
      this.$store.commit("addCat", duct);
      console.log("点");
      this.dian = true;
      this.text = "商品已经提交到购物车...";
      setTimeout(() => {
        this.dian = false;
      }, 1100);
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
    goodslist,
    detailbottom,
    toast
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
  height: calc(100% - 44px - 49px);
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