<template>
<div id="app">
                    <div id="xiang" v-if="id!=null & ids!=null">
<div v-for="(item, index) in list" :key="index" >
<div v-if="id==item.id & ids==item.id0">
<p class="p1">{{item.tt1}}</p>
<div class="lbt">
<mt-swipe :auto="4000">
<mt-swipe-item>
<img :src="item.src" alt/>
</mt-swipe-item>
<mt-swipe-item>
<img :src="item.srr"  alt/>
</mt-swipe-item>
<mt-swipe-item>
<img :src="item.srr0"  alt/>
</mt-swipe-item>
</mt-swipe>
</div>
<p class="tt1">{{item.tt1}}</p >
<div class="gwc">
<p>{{item.tiao}}</p >
<p>
<button class="btn">加入购物车</button>
</p >
</div>

<div style="height:75px;" class="dd0">
  <div class="ddd0">
    <img src="../../assets/img/xiang/s-icon-1.png" style="width:20px;height:20px" alt/>
    <div>
      <div>筛选尺码</div>
      <div>请选择您的尺码</div>
    </div>
  </div>
  <div class="ddd0">
    <img src="../../assets/img/xiang/s-icon-2.png" style="width:20px;height:20px" alt/>
    <div>
      <div>点击订阅</div>
      <div>获取最低价</div>
    </div>
  </div>
</div>
<xi2/>
</div>
</div>
</div>
</div>
</template>

<script>
import { request } from "../../network/request0";
import xi2 from "../xiang/xi2";
export default {
components:{xi2},
data() {
return {
list: null,
ids:null,
id:null,
};
},
created() {
request(
{ url: "shihuo" },
res => {
this.list = res.ds;
},
function(err) {
console.log(err);
}
);
this.id=this.$route.params.id
this.ids=this.$route.params.ids
}
};
</script>

<style scoped>
.mt-swipe-item,.mint-swipe-items-wrap, .mint-swipe{height:300px}

#xiang{
width: 100%;
}
.p1 {
width: 100%;
text-align: center;
height: 50px;
line-height: 50px;
background: #f7f7f7;
}
.mint-swipe {
height: 300px;
text-align: center;
}
.mint-swipe-item img {
height: 300px;
width: 100%;
}
.tt1 {
margin: 10px 10px;
}
.gwc {
width: 100%;
display: flex;
justify-content: space-between;
margin: 10px;
height: 30px;
}
.gwc p:first-child {
width: 66%;
}
.gwc p:last-child {
width: 30%;
}
.btn {
width: 100px;
height: 40px;
background: red;
border: none;
}
.dd0{
  display: flex;
  justify-content:space-between;
  align-items: center;
  border-bottom:1px solid #ccc;
}
.ddd0{
  display: flex;
  align-items:center;
 
}
.ddd0:first-child{
  margin-left:10px;
}
.ddd0:last-child{
  margin-right:50px;
}
.ddd0>img{
  margin-right:10px;
}
</style>