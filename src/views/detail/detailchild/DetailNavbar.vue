<template>
 <div id='detailnavbar'>
     <nav-bar >
         <div slot='left' class='left' @click='backclick'>
             <img src='../../../assets/img/common/back.svg'>
         </div>
         <div slot="center"  class='center'>
             <div v-for='(item,index) in titles' :key='index' class='title' 
             :class="{active:currentindex==index}" @click='itemclick(index)'>
             {{item}}
             </div>
         </div>
     </nav-bar>
 </div>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar';
export default {
 data () {
 return {
     titles:['商品','参数','评论','推荐'],
     currentindex:0
 }
 },
 methods: {
     backclick(){
        //  console.log('kk');
         this.$router.back();
     },
     itemclick(index){
         this.currentindex=index;
         this.$emit('itemclick',index);
     }
 },
 components: {
     NavBar,
 }
}
</script>

<style scoped>
.center{
    display:flex;
    font-size:13px;
}
.title{
    flex:1;
}
.left img{
    margin-top:13px;
    width:20px;
    height:20px;
}
.active{
    color:violet;
}
</style>

