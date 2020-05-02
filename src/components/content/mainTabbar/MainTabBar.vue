<template>
  <TabBar>
    <TabBarItem link="/home">
      <img slot="icon" src="../../../assets/img/tabbar/home.svg" alt />
      <img slot="active-icon" src="../../../assets/img/tabbar/home_active.svg" alt />
      <div slot="text">首页</div>
    </TabBarItem>
    <TabBarItem link="/fenlei">
      <img slot="icon" src="../../../assets/img/tabbar/category.svg" alt />
      <img slot="active-icon" src="../../../assets/img/tabbar/category_active.svg" alt />
      <div slot="text">分类</div>
    </TabBarItem>
    <TabBarItem link="/zhanshi">
      <img slot="icon" src="../../../assets/img/tabbar/cart.svg" alt />
      <img slot="active-icon" src="../../../assets/img/tabbar/cart_active.svg" alt />
      <div slot="text">购物车</div>
    </TabBarItem>
    <TabBarItem link="/xinxi">
      <img slot="icon" src="../../../assets/img/tabbar/profile.svg" alt />
      <img slot="active-icon" src="../../../assets/img/tabbar/profile_active.svg" alt />
      <div slot="text">我的</div>
    </TabBarItem>
  </TabBar>
</template>

  <script>
import TabBar from "../../common/tabbar/TabBar";
import TabBarItem from "../../common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style scoped>
</style>
