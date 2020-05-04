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
  props: {
    probeType: Number,
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    console.log(BScroll);

    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });
    this.scroll.scrollTo("x", "y", "tiem");
    this.scroll.on("scroll", position => {
      this.$emit("scroll", position);
    });

    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  }
};
</script>
<style scoped>
.contennt {
}
</style>