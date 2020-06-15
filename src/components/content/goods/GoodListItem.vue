<template>
 <div class='goodlistitem' @click='itemclick'>
     <img v-lazy='showImage' @load='imgloaded'>
     <div class='bottom'>
     <div class='p'>{{item.title}}</div>
         <span class='price'>{{item.price}}</span>
         <span class='info'>{{item.cfav}}</span>
     </div>
 </div>
</template>

<script>
export default {
    props:{
        item:{
            type:Object,
            default(){
                return {};
            }
        }
    },
 data () {
 return {
     demo:{
         img:require('../../../assets/category/pop/1.jpg')
     },
     imglist:'',
 }
 },
 created(){
 },
 methods: {
     imgloaded(){
         this.$bus.$emit('loadimg');
     },
     itemclick(){
         if(this.item.iid){
         this.$router.push('/detail/'+this.item.iid);
         }
     }
 },
 computed:{
      showImage(){
          return this.item.img||this.item.image||this.item.show.img
        }
 },
 components: {

 }
}
</script>

<style scoped>
.goodlistitem{
    position:relative;
    padding-bottom:40px;
    width:48%;
}
.goodlistitem img{
    /* margin-bottom:-5px; */
    width:100%;
    border-radius:5px;
}
.bottom{
    position:absolute;
    font-size:12px;
    /* overflow:hidden; */
    text-align:center;
    bottom:5px;
    left:0;
    right:0;
}
.p{
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    margin-bottom:3px;
}
.price{
    color:var(--color-high-text);
    margin-right:20px;
}
/* .info ::before{
    content:'aa';
    /* position:absolute;
    left:-15px;
    top:-1px; */
    /* width:14px;
    height:14px;
    /* background:url("../../../assets/img/common/collect.svg") 0 0/14px 14px; */
    /* background-image: url("../../../assets/img/common/top.png"); */
/* } */

</style>
