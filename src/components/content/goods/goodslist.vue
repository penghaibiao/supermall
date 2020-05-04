<template>
  <div class="goods">
    <goodslistitem v-for="item in goods" :goodsitem="item"></goodslistitem>
  </div>
</template>
<script>
import goodslistitem from "./goodslistitem";
export default {
  props: {
    goods: Array
  },
  components: {
    goodslistitem
  }
};
</script>
<style scoped>
.goods {
  overflow: hidden;
}
</style>