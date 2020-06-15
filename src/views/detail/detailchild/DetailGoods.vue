<template>
 <div class='detailgoods'>
     <div class='item-desc clear-fix'>
        <div class='start'></div>
        <div class='desc'>{{detailgoods.desc}}</div>
        <div class='end'></div>
     </div>
     <div class='key'>{{detailgoods.detailImage[0].key}}</div>
     <div class='list'>
         <img v-for='(item,index) in detailgoods.detailImage[0].list'
         :key='index' :src='item' @load='imgloaded'>
     </div>
 </div>
</template>

<script>
export default {
    props:{
        detailgoods:{
            type:Object,
            default(){
                return {}
            }
        }
    },
 data () {
 return {
     count:0,
 }
 },
 methods: {
     imgloaded(){
         if(++this.count>=this.detailgoods.detailImage[0].list.length){
             this.$emit('imgloaded');
         }
     }
 },
 components: {

 }
}
</script>

<style scoped>
.detailgoods{
    padding:1px;
}
.item-desc{
    padding:10px;
}
.desc{
    font-size:14px;
}
.start{
    margin-top:20px;
    margin-bottom:10px;
}
.start,.end{
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position:relative;
}
.end{
    margin-top:10px;
    margin-bottom:10px;
    float:right;
}
.list{
       border-bottom:5px solid #f2f5f8;
}
.list img{
    width:100%;
}
.key{
    margin-left:10px;
    margin-bottom:10px;
}
.start::before,.end::after{
    content:'';
    position:absolute;
    width:5px;
    height:5px;
    background-color:#333;
    bottom:0;
}
.end::after{
    right:0;
}
</style>
