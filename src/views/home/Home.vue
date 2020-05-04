<template>
  <div id="c">
    <Navbar class="gouwu">
      <div slot="nav-center">默默购物城</div>
    </Navbar>
    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @scroll="contentscroll"
      :pullUpLoad="true"
      @pullingUp="loadMore"
    >
      <homeswiper :banners="banners" class="homeswiper"></homeswiper>
      <homeRecommends :recommends="recommends"></homeRecommends>
      <fashion></fashion>
      <tabc class="tabc" :hometitle="hometitle" @tabclick="tabclick"></tabc>
      <goodslist :goods="goods[goodstype].list"></goodslist>
    </scroll>
    <backtop @click.native="backclick" v-show="isshow"></backtop>
  </div>
</template>
<script>
import homeswiper from "./zihome/homeswiper";
import homeRecommends from "./zihome/homeRecommend";
import fashion from "./zihome/fashion"; //本周流行

import Navbar from "../../components/common/navbar/NavBar";
import scroll from "../../components/common/scroll/scroll"; //滚动
import backtop from "../../components/content/backtop/backtop"; //

import goodslist from "../../components/content/goods/goodslist";
import tabc from "../../components/content/tabcontrol/tabc";

import { gethome, gethomegood } from "../../network/home";

export default {
  data() {
    return {
      banners: [],
      recommends: [],
      hometitle: [],
      goods: {
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      },
      goodstype: "pop",
      isshow: false
    };
  },
  created() {
    this.gethome(),
      this.gethomegood("pop"),
      this.gethomegood("new"),
      this.gethomegood("sell");
  },
  components: {
    Navbar,
    homeswiper,
    homeRecommends,
    fashion,
    tabc,
    goodslist,
    scroll,
    backtop
  },
  methods: {
    // 网络请求

    gethome() {
      gethome().then(
        res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        },
        err => {
          console.log(err);
        }
      );
    },
    gethomegood(type) {
      const page = this.goods[type].page + 1;
      gethomegood(type, page).then(res => {
        this.hometitle = res.data.filter.list;
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        console.log(this.goods[type].list);
      });
    },
    //事件监听

    tabclick(index) {
      switch (index) {
        case 0:
          this.goodstype = "pop";
          break;
        case 1:
          this.goodstype = "new";
          break;
        case 2:
          this.goodstype = "sell";
          break;
      }
      console.log(index);
    },
    backclick() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 1000);
    },
    contentscroll(position) {
      if (Math.abs(position.y) >= 1000) {
        this.isshow = true;
      } else {
        this.isshow = false;
      }
    },
    loadMore() {
      this.gethomegood(this.goodstype);
      this.$refs.scroll.scroll.finishPullUp();
    }
  }
};
</script>
<style>
.gouwu {
  width: 100%;
  background-color: #ff0077;
  color: aliceblue;
  font-weight: 700;
  position: fixed;
  z-index: 1;
  overflow: hidden;
}

.tabc {
  position: sticky;
  z-index: 22;
  top: 46px;
}
.content {
  height: calc(100% - 93px);
  margin-top: 44px;
  overflow: hidden;
}
#c {
  border-top: 1px solid transparent;
  height: 100vh;
}
</style>