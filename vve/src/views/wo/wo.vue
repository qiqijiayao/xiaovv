<template>
  <div id="app">
    <headee />
    <list />
    <div class="btn">
      <mt-button type="danger" size="large">退出登录</mt-button>
    </div>
    <div class="kong"></div>
  </div>
</template>

<script>
import headee from "../wo/head";
import list from "../wo/list";
export default {
  components: {
    headee,
    list
  }
};
</script>

<style>
.btn{
  margin-top: 20px;
  margin-left:20px;
}
.kong{
    height: 30px;
}
</style>