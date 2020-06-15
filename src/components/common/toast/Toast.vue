<template>
 <div>
     <div>{{messages}}</div>

 </div>
</template>

<script>
export default {
    props:{
        messages:{
            type:String,
            default(){
                return "成功加入购物车";
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

</style>
