<template>
  <div class="xiangqing">
    <div v-for="(item,index) in itemInfo" class="xiangqing-store">
      <div class="xiangqing-wujian">
        <div class="checkbuttom">
          <checkbuttom :checked="item.xuanzhong" @click.native="checkclick(index)"></checkbuttom>
        </div>
        <a href="javascript:;">
          <img :src="item.image" alt />
        </a>
        <div class="xiang-rigth">
          <p>{{item.title}}</p>
          <span class="desc">{{item.desc}}</span>
          <span class="jiage">￥{{item.realPrice}}</span>
          <i class="shuliang">x{{item.count}}</i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import checkbuttom from "../../../components/content/checkbuttom/checkbuttom";
export default {
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: { checkbuttom },
  mounted() {},

  methods: {
    checkclick(index) {
      this.itemInfo[index].xuanzhong = !this.itemInfo[index].xuanzhong;
      console.log(this.itemInfo[index].xuanzhong);

      console.log(this.itemInfo);
    }
  }
};
</script>
<style scoped>
.xiangqing-wujian::after {
  content: "";
  display: block;
  clear: both;
}
.xiangqing-store {
  padding: 5px 5px;
  border-bottom: 1px solid gray;
}
.checkbuttom {
  float: left;
  position: relative;
  top: 50%;
  transform: translateY(20px);
  padding-right: 3px;
}
.xiangqing-wujian {
  position: relative;
}
.xiangqing-wujian a {
  float: left;
  display: inline-block;
  width: 20%;
  height: 110px;
  overflow: hidden;
  border-radius: 10px;
}
.xiang-rigth {
  float: right;
  width: 70%;
}
.xiangqing-wujian a img {
  width: 100%;
  height: 110px;
}
.xiang-rigth p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-text-overflow: ellipsis;
  margin-bottom: 16px;
}
.xiang-rigth .desc {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 30px;
}
.content {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
.xiang-rigth .jiage {
  color: red;
}
.shuliang {
  position: absolute;
  right: 18px;
}
</style>