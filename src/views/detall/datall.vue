<template>
  <div>
    <detalnavbar></detalnavbar>
    <detailswiper :topimage="topimage"></detailswiper>
  </div>
</template>
<script>
import detalnavbar from "./childcomps/detallnavbar";
import detailswiper from "./childcomps/detailswiper";
import { getdedail } from "../../network/dedail";
export default {
  name: "datall",
  data() {
    return {
      iid: null,
      topimage: []
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getdedail(this.iid).then(res => {
      this.topimage = res.result.itemInfo.topImages;
      console.log(res);
      console.log(this.topimage);
    });
  },

  components: { detalnavbar, detailswiper }
};
</script>
<style scoped>
</style>