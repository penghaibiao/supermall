<template>
  <div class="datailshop">
    <div class="shop-box">
      <span class="shop-logo">
        <img :src="shop.shopLogo" alt />
      </span>
      <span class="shop-name">{{shop.name}}</span>
    </div>
    <div class="Shop-Introduction">
      <div class="Introduction-left">
        <ul>
          <li>{{shop.cSells | guolvqi}}</li>
          <li>{{shop.cGoods}}</li>
          <li>总销量</li>
          <li>全部宝贝</li>
        </ul>
      </div>
      <div class="Introduction-rigth">
        <div v-for="item in shop.score" class="score">
          <span>{{item.name}}</span>
          <span :class="{lv:!item.isBetter}" class="ee">{{item.score}}</span>
          <span :class="{gao:item.isBetter}" class="aa">{{item.isBetter?'高':'低'}}</span>
        </div>
      </div>
    </div>
    <p class="guangguang">进店逛逛</p>
  </div>
</template>
<script>
export default {
  props: {
    shop: Object
  },
  filters: {
    guolvqi(value) {
      let result = value;
      if (value > 10000) {
        result = (result / 10000).toFixed(1) + "万";
      }
      return result;
    }
  }
};
</script>
<style scoped>
.guangguang {
  position: absolute;
  left: 50%;
  margin-top: 10px;

  margin-left: -30px;
  width: 80px;
  height: 30px;
  line-height: 30px;
  border-radius: 10px;
  background-color: darkgrey;
  text-align: center;
}
.datailshop {
  position: relative;
  padding-bottom: 60px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.3);
}
.shop-box {
  margin: 30px 0;
}
.ee {
  color: red;
}
.aa {
  color: #fff;
  background-color: forestgreen;
}
.shop-logo {
  overflow: hidden;
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 7px;
  background-color: red;
  vertical-align: middle;
}
.shop-logo img {
  width: 100%;
}
.shop-name {
  font-size: 15px;
  margin-left: 10px;
}
.Shop-Introduction {
  display: flex;
  margin-bottom: 10px;
}
.Shop-Introduction > div {
  flex: 1;
}
.Introduction-left ul {
  border-right: 1px solid silver;
  font-size: 14px;
  color: black;
  opacity: 0.9;
}
.Introduction-left ul li {
  text-align: center;
  display: inline-block;
  width: 50%;
  padding: 4px 0;
}
.Introduction-rigth {
  font-size: 14px;
}
.score {
  margin-left: 24px;
}
.score span {
  margin: 0 3px;
  text-align: center;
}
.score span:nth-of-type(2) {
  display: inline-block;
  width: 40px;
}
.gao {
  background-color: red;
  color: aliceblue;
}
.lv {
  color: forestgreen;
}
</style>