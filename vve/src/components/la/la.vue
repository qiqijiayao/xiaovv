<template>
   <div>
      <div class="fen">
        <div v-for="(item,index) in list"  :key="index" class="fenlei">
            <div class="fenlei1">
               <div class="fenlei1_1">{{item.name1}}</div>
               <div class="fenlei1_2">{{item.name2}}</div>
            </div>
            <div class="fenlei2">
              <img :src='item.src' class="src" alt/>
            </div>
        </div>
      </div>
      <lala/>
      <re/>
  </div> 
  
</template>
<script>
import { request } from "../../network/request";
import lala from "../la/lala"
import re from "../la/re"
export default {
  data() {
    return {
      list: null
    };
  },
  components:{
    lala,
    re
  },
  created() {
    request(
      { url: "classify" },
      res => {
        this.list = res.data;
      },
      err => {
        
      }
    );
  }
};
</script>

<style>
.fen {
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  padding-top: 5px;
  justify-content: space-around;
}
.fenlei{
  display: flex;
  width: 175px;
  height: 62.5px;
}

.fenlei>.fenlei1 {
  height: 67px;
  line-height: 25px;
  width: 100px;
}

.fenlei .fenlei1 .fenlei1_1 {
  font-size: 16px;
  font-weight: bold;
}

.fenlei .fenlei1 .fenlei1_2 {
  font-size: 14px;
  color: #666;
}

.fenlei .src {
  width: 52.5px;
  height: 52.5px;
}
</style>