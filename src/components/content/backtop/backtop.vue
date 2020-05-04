<template>
  <div class="backtop" @click="backclick">
    <img src="../../../assets/img/common/top.png" alt />
  </div>
</template>
<script>
export default {
  methods: {
    backclick() {}
  }
};
</script>
<style scoped>
.backtop {
  position: absolute;
  right: 11px;
  bottom: 71px;
  width: 40px;
  border-radius: 50%;

  z-index: 100;
}
.backtop img {
  width: 100%;
}
</style>