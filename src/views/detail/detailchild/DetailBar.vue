<template>
 <div id="detailbar">
     <div class='left'>
         <div class='iton'>
             <div><img src='../../../assets/img/detail/ask.png'></div>
             <div><span>客服</span></div>
         </div>
         <div class='iton'>
             <div><img src='../../../assets/img/detail/collect.png'></div>
             <div><span>收藏</span></div>
         </div>
         <div class='iton'>
             <div><img src='../../../assets/img/detail/shop.png'></div>
             <div><span>店铺</span></div>
         </div>

    </div>
     <div class='container'>
         <div @click='addtocart' class='addcart'>加入购物车</div>
         <div class='buy'>购买</div>
     </div>
 </div>
</template>

<script>

export default {
 data () {
 return {

 }
 },
 methods: {
     addtocart(){
         console.log("aa");
         this.$emit('addCart');
     }
 },
 components: {
 }
}
</script>

<style scoped>
#detailbar{
    width:100%;
    height:49px;
    display:flex;
    position:fixed;
    bottom:0;
    right:0;
    left:0;
    /* background-color:black; */
    z-index:999;
    background-color: #fff;
}
.left{
    flex:1;
    display:flex;
    text-align:center;
    font-size:13px;
}
.left img{
    width:25px;
    height:25px;
}
.left .iton{
    margin-top:2px;
    flex:1;
}
.container{
   width:150px;
    display:flex;
    /* line-height:49px; */
    line-height:39px;
}
.addcart{
    text-align:center;
    margin-top:7px;
    font-size:14px;
    width:80px;
    height:35px;
    background-color:yellow;
    border-radius:20px;
}
.buy{
      margin-top:7px;
      margin-left:2px;
    text-align:center;
    font-size:14px;
    width:60px;
    height:35px;
    background-color:pink;
    border-radius:20px;
}
</style>
