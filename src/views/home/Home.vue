<template>
  <div>
    <Navbar class="gouwu">
      <div slot="nav-center">默默购物城</div>
    </Navbar>
    <homeswiper :banners="banners"></homeswiper>
    <homeRecommends :recommends="recommends"></homeRecommends>
  </div>
</template>
<script>
import Navbar from "../../components/common/navbar/NavBar";
import homeswiper from "./zihome/homeswiper";
import homeRecommends from "./zihome/homeRecommend";

import { gethome } from "../../network/home";

export default {
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  created() {
    gethome().then(
      res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        console.log(this.recommends);
      },
      err => {
        console.log(err);
      }
    );
  },
  components: {
    Navbar,
    homeswiper,
    homeRecommends
  }
};
</script>
<style>
.gouwu {
  background-color: var(--color-tint);
  color: aliceblue;
  font-weight: 700;
}
</style>