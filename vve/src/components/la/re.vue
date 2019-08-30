<template>
   <div>
      <div class="huodong">
        <div class="huodong1_1">热门活动</div>
        <div class="huodong1_2">
            <div v-for="(item,index) in shuju"  :key="index">
              <div>
                 <img :src="item.src" class="src2" alt/>
              </div>
               <div class="huodong1_3">{{item.name1}}</div>
               <div class="huodong1_4">{{item.name2}}</div>
            </div>
         </div>
       </div>
   </div>
</template>

<script>
import { request } from "../../network/request";
export default {
  data() {
    return {
      shuju: null
    };
  },
  created() {
    request(
      { url: "shuju" },
      res => {
        this.shuju = res.data;
      },
      err => {
        
      }
    );
  }
};
</script>

<style>
.src2 {
  width: 112px;
  height: 67px;
}
  .huodong {
  width: 100%;
  background: #fff;
}

.huodong1_1 {
  padding: 7.5px;
  font-size: 20px;
  margin-left: 8px;
}

.huodong1_2 {
  display: flex;
  flex-wrap: wrap;
}

.huodong1_2>div {
  width:30%;
  margin: 5px;
}

.huodong1_3 {
  text-align: center;
  font-size: 12px;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.huodong1_4 {
  text-align: center;
  color: #666;
  font-size: 12px;
}

</style>