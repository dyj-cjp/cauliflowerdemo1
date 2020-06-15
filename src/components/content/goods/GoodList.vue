<template>
 <div class='goodlist'>
     <good-list-item v-for='(item,index) in lists' :key='index' :item='item'></good-list-item>
 </div>
</template>

<script>
import GoodListItem from './GoodListItem'
export default {
    props:{
        lists:{
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
     GoodListItem
 }
}
</script>

<style scoped>
.goodlist{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding:2px;
}

</style>
