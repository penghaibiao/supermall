<template>
  <div class="toast">
    <div class="text">{{text}}</div>
  </div>
</template>
<script>
export default {
  props: {
    text: Array
  }
};
</script>
<style scoped>
.toast {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.text {
  padding: 10px 6px;

  text-align: center;
  border-radius: 10px;
  color: #fff;
  background-color: rgba(100, 100, 100, 0.9);
}
</style>