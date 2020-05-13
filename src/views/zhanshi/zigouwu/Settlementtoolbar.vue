<template>
  <div class="bottom-bar">
    <ul class="then">
      <li>
        <checkbuttom :checked="isselectAll" @click.native="sleckclick"></checkbuttom>
      </li>
      <li>全选</li>
      <li>合计:</li>
      <li>￥{{totaPrice}}</li>
      <li>去结算{{checklength}}</li>
    </ul>
  </div>
</template>
<script>
import checkbuttom from "../../../components/content/checkbuttom/checkbuttom";

export default {
  components: {
    checkbuttom
  },
  computed: {
    totaPrice() {
      return this.$store.state.carList
        .filter(item => {
          return item.xuanzhong === true;
        })
        .reduce((preValue, item) => {
          return preValue + item.realPrice * item.count;
        }, 0)
        .toFixed(2);
    },
    checklength() {
      return this.$store.state.carList.filter(item => {
        return item.xuanzhong === true;
      }).length;
    },
    isselectAll() {
      //   return !this.$store.state.carList.filter(item => !item.xuanzhong === true)
      //     .length;
      if (this.$store.state.carList.length === 0) {
        return false;
      }
      return !this.$store.state.carList.find(item => !item.xuanzhong);
    }
  },
  methods: {
    sleckclick() {
      if (this.isselectAll) {
        this.$store.state.carList.forEach(item => (item.xuanzhong = false));
      } else {
        this.$store.state.carList.forEach(item => (item.xuanzhong = true));
      }
    }
  }
};
</script>
<style scoped>
.bottom-bar {
  position: relative;
}
.then {
  display: flex;
}
ul {
  position: relative;
  list-style: none;
}
ul li:nth-of-type(1) {
  margin: 9px 5px;
}
ul li {
  margin: 10px 5px;
}
ul li:last-child {
  position: absolute;
  width: 100px;
  text-align: center;
  height: 38px;
  line-height: 38px;
  top: -11px;
  right: -5px;
  background-color: red;
  color: #fff;
}
</style>