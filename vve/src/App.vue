<template>
  <div id="app">
        <router-view></router-view>
    <tabbar>
      <tabbaritem path="/home" activecolor="#aaf">
        <img src="./assets/img/tabbar/1.jpg" alt slot="itemicon" />
        <img src="./assets/img/tabbar/11.jpg" alt slot="itemiconActive" />
        <div slot="itemtitle">首页</div>
      </tabbaritem>
      <tabbaritem path="/xiang">
        <img src="./assets/img/tabbar/2.jpg" alt slot="itemicon" />
        <img src="./assets/img/tabbar/22.jpg" alt slot="itemiconActive" />
        <div slot="itemtitle">详情</div>
      </tabbaritem>
      <tabbaritem path="/car">
        <img src="./assets/img/tabbar/3.jpg" alt slot="itemicon" />
        <img src="./assets/img/tabbar/33.jpg" alt slot="itemiconActive" />
        <div slot="itemtitle">购物车</div>
      </tabbaritem>
      <tabbaritem path="/wo">
        <img src="./assets/img/tabbar/4.jpg" alt slot="itemicon" />
        <img src="./assets/img/tabbar/44.jpg" alt slot="itemiconActive" />
        <div slot="itemtitle">我的</div>
      </tabbaritem>
    </tabbar>
  </div>
</template>
<script>
import tabbar from "./components/tabbar/tabbar";
import tabbaritem from "./components/tabbar/tabbaritem";
export default {
  components:{
    tabbar,
    tabbaritem 
  }
}
</script>
<style>
  
</style>
