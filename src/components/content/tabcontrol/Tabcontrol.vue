<template>
 <div class='tabcontrol'>
     <div v-for='(item,index) in titles' :key='index' class='item'>
        <span :class='{active:currentindex===index}' @click='titleClick(index)'>{{item}}</span>
     </div>
 </div>
</template>

<script>
export default {
    props:{
        titles:{
            type:Array,
            defaults(){
                return []
            }
        }
    },
 data () {
 return {
     currentindex:0,
 }
 },
 methods: {
     titleClick(index){
         this.currentindex=index;
         this.$emit('titleClick',index);
     }
 },
 components: {

 }
}
</script>

<style scoped>
.tabcontrol{
    display:flex;
    text-align: center;
    height:44px;
    background-color: #fff;
    font-size:15px;
    line-height:44px;
}
.item{
    flex:1;
}
.item span{
    padding:5px;
    /* background-color: red; */
}
.active{
    color:var(--color-high-text);
    border-bottom:3px solid var(--color-tint)
}
</style>
