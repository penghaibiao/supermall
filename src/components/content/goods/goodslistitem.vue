<template>
  <div class="goodslist">
    <ul class="goodsitem">
      <li>
        <a :href="goodsitem.link">
          <img :src="goodsitem.show.img" alt />
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    goodsitem: Object
  }
};
</script>
<style scoped>
.goodslist {
  width: 50%;

  float: left;
}
.goodsitem {
}
.goodsitem li {
  margin: 5px 5px;
}
.goodsitem li img {
  width: 100%;
}
</style>