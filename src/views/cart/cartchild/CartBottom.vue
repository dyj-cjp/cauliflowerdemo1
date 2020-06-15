<template>
 <div id='cartbottom'>
     <div class='checkbox' @click='allcheckclick'>
     <img :class='{check:ischeck}' src='../../../assets/cart/tick.svg'>
         <div class='all'><span>全选</span></div>
     </div>
     <div class='right'>
         <span class='bold'>合计:￥{{allmoney}}元</span>
         <span class='cal'>结算</span>
     </div>
 </div>
</template>

<script>
export default {
 data () {
 return {
     ischeck:true,
     allmoney:0
 }
 },
 created(){
     this.$bus.$on('isall',(value,money)=>{
         this.ischeck=value;
         this.allmoney=money;
     })
     this.$bus.$on('isallmoney',(value)=>{
         this.allmoney=value;
     })
 },
 methods: {
     allcheckclick(){
         this.ischeck=!this.ischeck;
         this.$bus.$emit('allclick',this.ischeck)
     }
 },
 components: {

 }
}
</script>

<style scoped>
.cartbottom{
    height:40px;
    /* line-height:40px; */
    position:relative;
}
.checkbox{
    position:absolute;
    left:10px;
    margin-top:10px;


}
.all{
    position:absolute;
    left:30px;
    bottom:0px;
    width:60px;
}
.check{
    width:20px;
    height:20px;
    border-radius:50%;
    background-color: red;
    border:1px solid red;
}
.checkbox img{
   width:20px;
    height:20px;
    border-radius:50%;
    border:1px solid #aaa;
    vertical-align: middle;
    margin-right:10px;

}
.right{
    position:absolute;
    right:20px;
    line-height:40px;
}
.right span{
    margin-left:20px;
}
.bold{
    font-size:13px;
    font-family: bold;
}
.cal{
    /* display:block; */
    display:inline-block;
    width:60px;
    height:34px;
    background-color:red;
    border-radius:17px;
    text-align:center;
    line-height:34px;
    color:white;
}

</style>
