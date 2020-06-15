<template>
 <div id=categorytitle>
     <div class='container'>
 <div v-for='(item,index) in titles' :key='index' class='item'
    :class='{active:currentindex===index}' @click="itemclick(index)">
     {{item.title}}
 </div>
    </div>
 </div>
</template>

<script>
export default {
    props:{
        titles:{
            type:Array,
            default(){
                return [];
            }
        }
    },
 data () {
 return {
     currentindex:0,
 }
 },
 methods: {
     itemclick(index){
         this.currentindex=index;
         this.$emit('titleclick',index);
     }
 },
 components: {

 }
}
</script>

<style scoped>
.container{
    width:90px;
    text-align:center;
}
.item{
    height:40px;
    line-height: 40px;;
        background-color:rgba(114,111,128,.08);
}
.active{
    background-color: #fff;
    color:var(--color-tint);
}
</style>
