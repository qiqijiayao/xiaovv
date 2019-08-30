<template>
<div id="app">
       <div v-for="(item,index) in list" class='fl' :key="index">
  <div class="flk">
     <img :src="item.src0" style="width:70px;height:70px;margin:10px" alt/>
    <div style="margin:10px">
      <div>{{item.tt}}</div>
      <div style="width:50px;height:17.5px;line-height:17.5px;background:#fcefeb;color:red;text-align:center;text-align:center;margin-top:7.5px">{{item.tt0}}</div>
      <div tyle="color:#ccc;margin-top:10px">{{item.tt1}}</div>
    </div>
  </div>
  <div class="cla" style="width:60px;height:21px;color:#ff4343;border:1px solid #F2393A;border-radius:5px">{{item.sr}}</div>
</div>


 <div>
  <div class="duanzi-view">
    <div class="duanzi-content">
      <div class="dz-content fl" v-for="(item,index) in list1"  :key="index" >
        <div class="flk">
          <img :src="item.src0" style="width:30px;height:30px;margin:10px;border-radius:50%" alt/>
          <div style="margin:10px">
            <div>{{item.tt}}</div>
            <div style="width:100px;height:17px;line-height:17px;background:#fcefeb;color:red;text-align:center;text-align:center;margin-top:7.5px">{{item.tt0}}</div>
          </div>
        </div>
        <div style="color:#ccc;margin-top:10px">{{item.tt1}}</div>
        <div><img :src="item.src" class="cla" alt/></div>
      </div>
    </div>
  </div>
</div>

</div>
</template>

<script>
import { request } from "../../network/request1";
export default {
  data() {
return {
list: null,
list1:null
};
},
created() {
request(
{ url: "shihuoapp" },
res => {
this.list = res.qudao2;
this.list1=res.ping1;
},
function(err) {
console.log(err);
}
);
}}
</script>
<style>
.flk{
  display:flex;
  justify-content:flex-start;
}

.cla{
  margin:15px;
}
</style>
