<template >
  <div class="nav">
    <div class="nav-left">
      <slot name="nav-left"></slot>
    </div>
    <div class="nav-center">
      <slot name="nav-center"></slot>
    </div>
    <div class="nav-rigth">
      <slot name="nav-rigth"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.nav {
  display: flex;
  line-height: 44px;
  height: 44px;
  box-shadow: 2px 1px 10px rgba(100, 100, 100, 0.1);
}
.nav-left,
.nav-rigth {
  width: 60px;
}
.nav-center {
  flex: 1;
  text-align: center;
}
</style>