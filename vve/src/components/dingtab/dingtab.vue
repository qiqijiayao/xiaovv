<template>
<div id="app">
     <mt-navbar class="page-part" v-model="selected" style="display:flex">
         <mt-tab-item id="1" style="width:20%">推荐</mt-tab-item>
         <mt-tab-item id="2" style="width:20%">篮球</mt-tab-item>
         <mt-tab-item id="3" style="width:20%">上衣</mt-tab-item>
         <mt-tab-item id="4" style="width:20%">短裤</mt-tab-item>
         <mt-tab-item id="5" style="width:20%">潮流</mt-tab-item>
     </mt-navbar>
<!-- tab-container -->
<mt-tab-container v-model="selected">
<mt-tab-container-item id="1">
<div v-for="(item, index) in he" :key="index">
<div v-if="item.id=='xie'" class="xie" @click="aaa({xx:item.id0,cc:item.id})">
       <div>
            <img :src='item.src' class="src3" alt/>
          </div>
          <div class="xie1_1">
            <div class="xie1_1_1">{{item.tt1}}</div>
            <div class="xie1_1_2">{{item.tt2}}</div>
            <div class="xie1_1_3">{{item.tt3}}</div>
          </div>
</div>
</div>
</mt-tab-container-item>
<mt-tab-container-item id="2">
<div v-for="(item, index) in he" :key="index">
<div v-if="item.id=='lan'" class="xie" @click="aaa({xx:item.id0,cc:item.id})">
      <div>
            <img :src='item.src' class="src3" alt/>
          </div>
          <div class="xie1_1">
            <div class="xie1_1_1">{{item.tt1}}</div>
            <div class="xie1_1_2">{{item.tt2}}</div>
            <div class="xie1_1_3">{{item.tt3}}</div>
          </div>
</div>
</div>
</mt-tab-container-item>
<mt-tab-container-item id="3">
<div v-for="(item, index) in he" :key="index">
<div v-if="item.id=='yi'" class="xie" @click="aaa({xx:item.id0,cc:item.id})">
       <div>
            <img :src='item.src' class="src3" alt/>
          </div>
          <div class="xie1_1">
            <div class="xie1_1_1">{{item.tt1}}</div>
            <div class="xie1_1_2">{{item.tt2}}</div>
            <div class="xie1_1_3">{{item.tt3}}</div>
          </div>
</div>
</div>
</mt-tab-container-item>
<mt-tab-container-item id="4">
<div v-for="(item, index) in he" :key="index">
<div v-if="item.id=='ku'" class="xie" @click="aaa({xx:item.id0,cc:item.id})">
      <div>
            <img :src='item.src' class="src3" alt/>
          </div>
          <div class="xie1_1">
            <div class="xie1_1_1">{{item.tt1}}</div>
            <div class="xie1_1_2">{{item.tt2}}</div>
            <div class="xie1_1_3">{{item.tt3}}</div>
          </div>
</div>
</div>
</mt-tab-container-item>
<mt-tab-container-item id="5">
        <div v-for="(item, index) in he" :key="index">
<div v-if="item.id=='pei'" class="xie" @click="aaa({xx:item.id0,cc:item.id})">
       <div>
            <img :src='item.src' class="src3" alt/>
          </div>
          <div class="xie1_1">
            <div class="xie1_1_1">{{item.tt1}}</div>
            <div class="xie1_1_2">{{item.tt2}}</div>
            <div class="xie1_1_3">{{item.tt3}}</div>
          </div>
</div>
</div> 
  </mt-tab-container-item>
</mt-tab-container>

</div>
   
</template>
<script>
    import { request} from "../../network/request0";
export default {
    data(){
        return {
            selected:"1",
            he:null
        }
    },
    methods:{
      aaa(res){
        this.$router.push({name:"hehe",params:{ids:res.xx,id:res.cc}})
      }
    },
    created() {
       request(
          { url: "shihuo" },
          res => {
            this.he = res.ds;
          },
          err => {
        
          }
        );
      }
    };
</script>
<style>
 

.xie{
  padding: 0px 0px 5px 10px;
  display: flex;
  margin: 5px;
  position: relative;
  
}

.xie1_1 {
  text-align: left;
  height: 106.5px;
  margin: 0px 0px 0px 15px;
  font-size: 15px;
  width: 250px;
}

.xie1_1_1 {
  width:150px;
  line-height: 30px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right:5px;
}

.xie1_1_2 {
  line-height:20px;
  margin-top: 12px;
}

.xie1_1_3 {
  color: red;
}
.src3 {
  width: 106.5px;
  height:106.5px;
}
</style>