<template>
  <div class="tabc">
    <div
      v-for="(item,index) in hometitle"
      @click="clicktabc(index)"
      class="tab-content"
      :class="{active:index===curr}"
    >
      <span>{{item.title}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      curr: 0
    };
  },
  props: {
    hometitle: Array
  },
  methods: {
    clicktabc(index) {
      console.log("aa");
      this.curr = index;
      this.$emit("tabclick", index);
    }
  }
};
</script>
<style scoped>
.tabc {
  display: flex;
  text-align: center;
  padding: 20px 0;
  box-shadow: 0 3px 10px rgba(100, 100, 100, 0.1);
}
.tabc span {
  padding: 4px 3px;
}
.tab-content {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 2px solid var(--color-high-text);
}
</style>