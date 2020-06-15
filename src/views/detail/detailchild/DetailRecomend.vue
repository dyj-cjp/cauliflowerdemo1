<template>
 <div>
     <good-list :lists='recommendgoods'></good-list>
 </div>
</template>

<script>
import GoodList from '../../../components/content/goods/GoodList'

export default {
    props:{
        recommendgoods:{
            type:Array,
            default(){
                return [];
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
     GoodList,
 }
}
</script>

<style scoped>

</style>
