     <template lang="">
         <div>
         <mt-swipe :auto="4000">
           <mt-swipe-item>
             <img src="../../assets/img/lun/lun1.jpg" alt="">
           </mt-swipe-item>
           <mt-swipe-item>
             <img src="../../assets/img/lun/lun2.png" alt="">
           </mt-swipe-item>
           <mt-swipe-item>
             <img src="../../assets/img/lun/lun3.png" alt="">
           </mt-swipe-item>
           <mt-swipe-item>
             <img src="../../assets/img/lun/lun4.jpg" alt="">
           </mt-swipe-item>
         </mt-swipe>
         </div>
     </template>
     <script>
     export default {
         
     }
     </script>
     <style>
         .mint-swipe-items-wrap,.mint-swipe{
             width:100%;
             height:200px;
             text-align:center;
         }
         *{
             padding:0px;
             margin:0px;
         }
         img{
             height:200px;
         }
     </style>