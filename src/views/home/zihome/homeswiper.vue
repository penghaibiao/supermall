<template>
  <Swiper>
    <SwiperItem v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" />
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
  }
};
</script>

<style scoped>
</style>
