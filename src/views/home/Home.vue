<template>
  <div id="c">
    <tabc :hometitle="hometitle" @tabclick="tabclick" ref="tabc1" v-show="fiexd1" class="tabcc"></tabc>

    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @scroll="contentscroll"
      :pullUpLoad="true"
      @pullingUp="loadMore"
    >
      <Navbar class="gouwu">
        <div slot="nav-center">默默购物城</div>
      </Navbar>
      <homeswiper :banners="banners" class="homeswiper" @swiperimage="swiperimage"></homeswiper>
      <homeRecommends :recommends="recommends"></homeRecommends>
      <fashion></fashion>
      <tabc :hometitle="hometitle" @tabclick="tabclick" ref="tabc2"></tabc>

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
      isshow: false,
      tabcoffsetTop: 0,
      fiexd1: null,
      gundong: 0
    };
  },
  created() {
    this.gethome(),
      this.gethomegood("pop"),
      this.gethomegood("new"),
      this.gethomegood("sell");
  },
  mounted() {},
  destroyed() {},
  activated() {
    this.$refs.scroll.scroll.scrollTo(0, this.gundong, 0);
    this.$refs.scroll.scroll.refresh();
  },
  deactivated() {
    this.gundong = this.$refs.scroll.scroll.y;
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
        this.$refs.scroll.scroll.finishPullUp();
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
      this.$refs.tabc1.curr = index;
      this.$refs.tabc2.curr = index;
    },
    backclick() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 1000);
    },
    contentscroll(position) {
      this.gundong = position.y;
      var tabc = document.querySelector(".tabc");
      this.fiexd1 = Math.abs(position.y) > this.tabcoffsetTop;
      if (Math.abs(position.y) >= 1000) {
        this.isshow = true;
      } else {
        this.isshow = false;
      }
    },
    tabcfixed(position) {},
    loadMore() {
      this.gethomegood(this.goodstype);
      this.$refs.scroll.scroll.refresh();
    },
    swiperimage() {
      this.tabcoffsetTop = this.$refs.tabc2.$el.offsetTop;
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
  position: relative;
  z-index: 1;
  overflow: hidden;
}
.tabcc {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 44;
  right: 0;
  background-color: #ffff;
}
.fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
}

.content {
  height: calc(100% - 50px);
  overflow: hidden;
}
#c {
  border-top: 1px solid transparent;
  height: 100vh;
}
</style>