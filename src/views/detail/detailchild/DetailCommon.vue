<template>
 <div class='detailcommon'>
     <div class='title clear-fix'>
         <div class='left'>用户评价</div>
         <div class='right'><a href='#'>更多</a></div>
     </div>
     <div class='users'>
         <img :src='commoninfo.user.avatar'>
         <span>{{commoninfo.user.uname}}</span>
     </div>
     <p>{{commoninfo.content}}</p>
     <div class='desc'>{{commoninfo.style}}</div>
     <div class='images'><img :src='commoninfo.images[0]'></div>
 </div>
</template>

<script>
export default {
    props:{
        commoninfo:{
            type:Object,
            default(){
                return {}
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
.detailcommon{
    padding:10px;
     border-bottom: 5px solid #f2f5f8;
     margin-bottom:20px;
}
.title{
    margin-right:5px;
}
.users img{
    width:50px;
    height:50px;
    border-radius:50%;
    vertical-align:middle;
    margin:10px 10px 20px 10px;
}
.images{
    margin-top:10px;
}
.images img{
    width:100px;
    height:100px;
}
</style>
