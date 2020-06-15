<template>

      <div class='tab-bar-item' @click='itemclick'>
          <div v-if='!isactive'>
          <slot name="item-icon"></slot>
          </div>
          <div v-else>
          <slot name="item-icon-active"></slot>
          </div>
          <div :style="isactivecolor">
          <slot name="item-text"></slot>
          </div>
           <!-- <img src="../../assets/img/tabbar/home.svg">
          <div>首页</div> -->
     </div> 
 

</template>

<script>
export default {
    name:'TabBarItem',
    props:{
        path:String,
        activecolor:{
            type:String,
            default:"red"
        }
    },
 data () {
 return {
     
 }
 },
 computed:{
     isactive(){
         return this.$route.path.indexOf(this.path)!==-1;
     },
     isactivecolor(){
         return this.isactive?{color:this.activecolor}:{};
     }
 },
 methods: {
     itemclick(){
         this.$router.replace(this.path);
     }
 },
 components: {

 }
}
</script>

<style scoped>
.tab-bar-item{
  flex:1;
  text-align:center;
    height:49px;
    background-color:white;
    font-size:14px;
}
.tab-bar-item img{
    margin-top:3px;
    margin-bottom:2px;
    width:24px;
    height:24px;
    vertical-align: middle;
}
</style>
