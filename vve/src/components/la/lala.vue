<template>
    <div id="app">
     <div class="youhui">
       <div v-for="(item,index) in youhui" :key="index" class="youhui1">
         <div class="youhui1_1" style="color:#333333;font-size:13.5px">{{item.name1}}</div>
         <div class="youhui1_2" style="color:#666666;font-size:12px">{{item.name2}}</div>
         <img :src='item.src' class="src1" alt/>
       </div>
     </div>
    </div>
</template>
<script>
import { request } from "../../network/request";
export default {
  data() {
    return {
      youhui: null
    };
  },
  created() {
    request(
      { url: "youhui" },
      res => {
        this.youhui = res.data;
      },
      err => {
        
      }
    );
  }
};
</script>
<style>
  .youhui {
  display: flex;
  width: 100%;
  text-align: center;
  margin: 4px 2.5px;
}

.youhui1 {
  flex: 1;
  background: #fff;
  margin: 2.5px;
  padding: 7.5px;
  line-height: 25px;
}

.youhui1_1 {
  font-size: 17px;
}

.youhui1_2 {
  font-size: 12px;
}

.src1 {
  width: 60px;
  height: 60px;
}
</style>