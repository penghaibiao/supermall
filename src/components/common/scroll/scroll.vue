<template>
  <div class="wrapper" ref="wrapper">
    <div class="contennt">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import vue from "vue";
import BScroll from "better-scroll";

export default {
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    console.log(BScroll);

    this.scroll = new BScroll(this.$refs.wrapper, {});
  }
};
</script>
<style scoped>
.contennt {
}
</style>