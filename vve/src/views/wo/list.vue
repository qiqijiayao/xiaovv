<template>
  <div class="list2">
    <div class="icon">
      <div class="icon1">
        <div v-for="(item,index) in icon1" :key="index">
          <mt-cell :title="item.tit">
            <span>
              <img src="../../assets/img/xiang/s-icon-1.png" alt />
            </span>
            <img slot="icon" :src="item.ico" width="20px" height="20px" sty />
          </mt-cell>
        </div>
      </div>
      <div class="icon2">
        <div v-for="(item,index) in icon2" :key="index">
          <mt-cell :title="item.tit">
            <span>
              <img src="../../assets/img/xiang/s-icon-1.png" alt />
            </span>
            <img slot="icon" :src="item.ico" width="20px" height="20px" sty />
          </mt-cell>
        </div>
      </div>
      <div v-for="(item,index) in icon3" :key="index">
        <mt-cell :title="item.tit">
          <span>
            <img src="../../assets/img/xiang/s-icon-1.png" alt />
          </span>
          <img slot="icon" :src="item.ico" width="20px" height="20px" sty />
        </mt-cell>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icon1: [
        { tit: "消息", ico: "https://s10.mogucdn.com/mlcdn/c45406/180830_64jc99ae7241iikh45he6ebeh617f_88x88.png" },
        { tit: "收藏", ico: "https://s10.mogucdn.com/mlcdn/c45406/180830_8021c9de4b3fhigk152bj44a7356e_88x88.png" }
      ],
      icon2: [
        { tit: "购物车", ico: "https://s10.mogucdn.com/mlcdn/c45406/180830_3b8hjl8a44g1ce5g6ehe721j39ec1_88x88.png" },
        { tit: "我的订单", ico: "https://s10.mogucdn.com/mlcdn/c45406/180830_13f05akli0hibg1jek8a84f3h8l78_88x88.png" },
        { tit: "卡券红包", ico: "https://s10.mogucdn.com/mlcdn/c45406/180830_48dke48gg44j5kj735e04360k1fid_88x88.png" }
      ],
      icon3: [
        { tit: "蘑菇经融", ico: "https://s10.mogucdn.com/mlcdn/c45406/180830_8a12la84be7150gh4fah2h7l8el7k_88x88.png" },
        { tit: "收货地址", ico: "https://s10.mogucdn.com/mlcdn/c45406/181009_22fecib58jkc5kf8d7322a0a29866_44x44.png" },
        { tit: "客服", ico: "https://s10.mogucdn.com/mlcdn/c45406/180830_62kkcladdid2b32a6jkbae20j2ke7_88x88.png" }
      ]
    };
  }
};
</script>

<style>
.icon1,
.icon2 {
  margin-bottom: 1px;
}
.mint-cell-title {
  display: flex;
  align-items: center;
}
.mint-cell-title img {
  width: 30px;
  height: 30px;
}
span img {
  width: 16px;
  height: 20px;
}
.mint-cell-text{
  text-indent: 1em;
}
</style>