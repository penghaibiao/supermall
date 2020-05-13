<template>
  <Swiper>
    <SwiperItem v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" @load="homeswiper" />
      </a>
    </SwiperItem>
  </Swiper>
</template>
<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper/index";

export default {
  props: { banners: Array },
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {
      isload: false
    };
  },
  methods: {
    homeswiper() {
      if (!this.isload) {
        this.$emit("swiperimage");
        this.isload = true;
      }
    }
  }
};
</script>

<style scoped>
</style>
