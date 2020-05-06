<template>
  <div>
    <Swiper class="Swiper">
      <SwiperItem v-for="item in topimage">
        <img :src="item" alt />
      </SwiperItem>
    </Swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper/index";
export default {
  props: {
    topimage: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: { Swiper, SwiperItem }
};
</script>
<style scoped>
.Swiper {
  height: 300px;
  overflow: hidden;
}
</style>