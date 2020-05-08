<template>
  <div>
    <div class="datailbaseinfo">
      <p class="title">{{goods.title}}</p>
      <span class="Discounted-price">{{goods.price}}</span>
      <span class="Original-Price">{{goods.oldPrice}}</span>
    </div>
    <ul>
      <li>{{goods.columns[0]}}</li>
      <li>{{goods.columns[1]}}</li>
      <li>{{goods.services[goods.services.length-1].name}}</li>
    </ul>
    <div class="info-other">
      <span class="info-services-item" v-for="index in goods.services.length-2" :key="index">
        <img :src="goods.services[index].icon" />

        <span>{{goods.services[index].name}}</span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goods: {
      type: Object,
      default: {}
    }
  }
};
</script>
<style scoped>
.datailbaseinfo {
  padding-left: 7px;
  padding-bottom: 13px;
}
.datailbaseinfo .title {
  text-indent: 1em;
  color: black;
  margin-top: 5px;

  margin-bottom: 3px;
}
.Discounted-price {
  font-size: 19px;
  color: coral;
}
.Original-Price {
  font-size: 10px;
  margin-left: 3px;

  text-decoration: line-through;
}
.Original-Price::after {
  content: "优惠价";
  padding: 0 5px;
  height: 20px;
  line-height: 20px;
  background-color: coral;
  display: inline-block;
  color: #fff;
  border-radius: 8px;
  margin-left: 3px;
  margin-top: 10px;
}
ul {
  list-style: none;
  padding-left: 7px;
  padding-bottom: 10px;

  display: flex;
}
ul > li {
  flex: 1;
  font-size: 13px;
}
.info-other {
  font-size: 10px;
  display: flex;
  padding: 15px 0;
  border-top: 1px solid rgba(100, 100, 100, 0.3);
  border-bottom: 1px solid rgba(100, 100, 100, 0.3);
}
.info-other img {
  width: 15px;
  vertical-align: middle;
}
.info-other .info-services-item {
  padding-left: 7px;

  flex: 1;
}
.info-services-item span {
  margin-top: 1px;
}
</style>