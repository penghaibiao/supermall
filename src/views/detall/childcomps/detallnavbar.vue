<template>
  <div class="nav-bar">
    <Navbar>
      <div slot="nav-left" class="detaleft">
        <img src="../../../assets/img/common/back.svg" alt @click="imgclick" />
      </div>
      <ul slot="nav-center">
        <li v-for="(item,index) in title" @click="detaclick(index)">
          <a href="javascript:;" :class="{active:index===currentindex}">{{item}}</a>
        </li>
      </ul>
    </Navbar>
  </div>
</template>
<script>
import Navbar from "../../../components/common/navbar/NavBar";

export default {
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentindex: 0
    };
  },
  components: { Navbar },

  methods: {
    detaclick(index) {
      this.currentindex = index;
      this.$emit("titleclick", index);
    },
    imgclick() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.nav-bar {
  background-color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 12;
}
.title {
}
ul {
  display: flex;

  list-style: none;
}
ul > li {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.detaleft {
  padding-top: 6px;
  padding-left: 12px;
}
</style>