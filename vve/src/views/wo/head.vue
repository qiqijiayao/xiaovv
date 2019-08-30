<template>
  <div class="head">
    <div style="background:#fff">
      <img
        src="https://s10.mogucdn.com/mlcdn/c45406/180927_1ai9125115h4hh7k5dc3cej6j782a_750x342.png"
        alt
       class="tu1" />
    </div>
    <div class="back">
      <div class="tou1">
        <img
          src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3485626614,1589875130&fm=26&gp=0.jpg"
          alt
          class="tou-img"
        />
        <div class="zi" style="font-size:1rem">越过群山的晚风</div>
        <div class="ge" style="display:flex">
          <img
            src="https://s10.mogucdn.com/mlcdn/c45406/180928_4d93gggd1hiidlf2l8bd2fgl7fhbd_21x26.png"
            alt
          />
          <div>个人主页</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.head{
  background: #fff;
  height: 240px;
}
.tou1 > img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 3px solid #fff;
}
.ge {
  border: 1px solid #666;
  width: 70px;
  padding: 5px;
  justify-content: space-around;
  border-radius: 10px 10px;
}
.ge img {
  width: 10px;
  height: 12px;
  margin-top:2px;
}
.ge div {
  font-size: 10px;
}
.back{
    position: relative;
    position: absolute;
    left: 20px;
    top: 15%;
    width: 330px;
    background: #fff;
    box-shadow: 0px  0px 20px #ccc;
    border-radius: 10px;
}
.tou1{
    text-align: center;
    position: relative;
    height: 100px;
    z-index: 9999;
}
.tou-img{
    position: absolute;
    left: 40%;
    top: -20%;
}
.zi{
    position: absolute;
    left: 40%;
    top: 40%;
}
.ge{
    position: absolute;
    left: 38%;
    top: 60%;
}
.tu1{
    width: 375px;
}
</style>