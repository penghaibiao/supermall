<template>
  <div class="checkbuttom" :class="{border:checked}">
    <img src="../../../assets/img/cart/tick.svg" alt />
  </div>
</template>
<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    console.log(this.checked);
  }
};
</script>
<style scoped>
.checkbuttom {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid slategray;
}
.checkbuttom img {
  width: 15px;
  height: 15px;
  margin-left: 2px;
  margin-top: 2px;
}
.border {
  background-color: deeppink;

  border: 1px solid deeppink;
}
</style>