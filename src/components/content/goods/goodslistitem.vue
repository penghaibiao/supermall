<template>
  <div class="goodslist" @click="itemclick">
    <ul class="goodsitem">
      <li>
        <img :src="goodsitem.show.img" alt />
        <p>{{goodsitem.title}}</p>
        <span class="goods-list-Collect">价格：{{goodsitem.price}}</span>
        <span class="Pass">{{goodsitem.cfav}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    goodsitem: Object
  },
  methods: {
    itemclick() {
      this.$router.push("/detail/" + this.goodsitem.iid);
    }
  }
};
</script>
<style scoped>
ul {
  list-style: none;
}
p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 4px;
  margin-bottom: 4px;
}
.goodslist {
  width: 50%;
  margin-top: 10px;
  float: left;
  font-size: 13px;
}
.goodsitem {
  position: relative;
}
.goodsitem li {
  margin: 5px 5px;
}
.goodsitem li img {
  width: 100%;
  height: 225px;
}
.goods-list-Collect {
  position: relative;
  margin: 0 5px;
  color: brown;
  opacity: 0.8;
}
.goods-list-Collect::after {
  content: "";
  width: 14px;
  height: 14px;
  bottom: 1px;
  left: 86px;
  display: block;
  position: absolute;
  background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
}
.Pass {
  position: absolute;
  left: 113px;
}
</style>