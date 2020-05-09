<template>
  <div class="datailparmeter">
    <table v-for="table in chima.tables" class="table">
      <tr v-for="tr in  table">
        <td v-for="td in  tr">{{td}}</td>
      </tr>
    </table>
    <table class="table2">
      <tr v-for="table2 in chima.set">
        <td>{{table2.key}}</td>
        <td>{{table2.value}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  props: {
    chima: Object
  }
};
</script>
<style scoped>
.datailparmeter {
  background-color: #fff;
}
.data-text {
  margin-left: 7px;
  font-size: 16px;
}
.table,
table2 {
  width: 100%;
  border-top: 1px solid darkgray;
  border-bottom: 1px solid darkgray;
}
.table tr {
  display: flex;
}
.table td:nth-of-type(1) {
  width: 28%;
}
.table td {
  flex: 1;
  text-align: center;
  padding: 5px 0;
}
.table2 {
  width: 100%;
}
.table2 td:nth-of-type(1) {
  padding-left: 33px;
  width: 28%;
  color: black;
}
.table2 td {
  padding: 5px 0;
  width: 70%;
  color: crimson;
}
</style>