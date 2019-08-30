<template>
  <div id="app">
     <search/>
     <swipe/>
     <la/>
     <dingtab/>
    
    
  </div>
</template>

<script>
import swipe from "../../components/swipe/swipe"
import search from "../../components/search/search"
import dingtab from "../../components/dingtab/dingtab"
import la from "../../components/la/la"

export default {
  name:'app',
  components: {
     swipe,
     search,
     la,
     dingtab
  }
}
</script>
<style>
   
</style>
