<template>
  <div class="tabc">
    <div
      v-for="(item,index) in hometitle"
      class="tab-content"
      :class="{active:index===curr}"
      @click="clicktabc(index)"
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
      this.curr = index;
    }
  }
};
</script>
<style scoped>
.tabc {
  display: flex;
  text-align: center;
  margin-top: 20px;
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