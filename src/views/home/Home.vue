<template>
  <div id="c">
    <Navbar class="gouwu">
      <div slot="nav-center">默默购物城</div>
    </Navbar>
    <homeswiper :banners="banners" class="homeswiper"></homeswiper>
    <homeRecommends :recommends="recommends"></homeRecommends>
    <fashion></fashion>
    <tabc class="tabc" :hometitle="hometitle"></tabc>
    <goodslist :goods="goods['pop'].list"></goodslist>
    <ul>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
      <li>zai</li>
    </ul>
  </div>
</template>
<script>
import homeswiper from "./zihome/homeswiper";
import homeRecommends from "./zihome/homeRecommend";
import fashion from "./zihome/fashion"; //本周流行

import Navbar from "../../components/common/navbar/NavBar";
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
      }
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
    goodslist
  },
  methods: {
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
    }
  }
};
</script>
<style>
.gouwu {
  width: 100%;
  background-color: var(--color-tint);
  color: aliceblue;
  font-weight: 700;
  position: fixed;
  z-index: 1;
  overflow: hidden;
}
.homeswiper {
  padding-top: 44px;
}
.tabc {
  position: sticky;
  top: 50px;
}
</style>