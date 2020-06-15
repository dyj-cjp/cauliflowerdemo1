<template>
 <div class='recommend'>
     <div v-for='(item,index) in recommend' :key="index" class='item'>
         <a :href='item.link'>
             <img :src='item.image'>
             <div>{{item.title}}</div>
         </a>
     </div>
 </div>
</template>

<script>
export default {
    props:{
        recommend:{
            type:Array,
            default(){
                return []
            }
        }
    },
 data () {
 return {

 }
 },
 methods: {

 },
 components: {

 }
}
</script>

<style scoped>
    .recommend{
        display:flex;
        text-align: center;
        font-size:12px;
        border-bottom:8px solid #eee;
        padding-top:8px;
        padding-bottom:20px;
    }
    .item{
        flex:1;
    }
    .item img{
        width:70px;
        height:70px;
        margin-bottom:5px;
    }
</style>
