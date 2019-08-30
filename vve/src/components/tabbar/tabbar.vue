<template>
    <div id="tabbar">
      <slot></slot>
    </div>
</template>
<script>
export default {
    
}
</script>

<style>
    #tabbar{
       display: flex;
       align-content:center;
       height: 49px;
       box-shadow: 0px 0px 5px #ccc;
       position: fixed;
       bottom: 0px;
       left: 0px;
       right: 0px;
       background: #f6f6f6;
    
}
</style>