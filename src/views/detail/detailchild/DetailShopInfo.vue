<template>
 <div id='detailshopinfo'>
     <div class='header'>
         <img :src='shop.logo'>
         <span>{{shop.name}}</span>
     </div>
     <div class='content clear-fix'>
         <div class='left'>
             <div class='cell'>
                 <p class='bold'>{{shop.sells}}</p>
                 <p class='small'>总销量</p>
             </div>
             <div class='count'>
                 <p class='bold'>{{shop.goodsCount}}</p>
                 <p class='small'>全部宝贝</p>
             </div>
         </div>
         <div class='right'>
             <div v-for='(item,index) in shop.score' :key='index' class='item'>
                 <span class='bold'>{{item.name}}</span>
                 <span :class='{isbetter:item.isBetter}' class='isbad'>{{item.score}}</span>
                 <span :class='{isbetter:item.isBetter}' class='isbad'>{{item.isBetter?'高':'低'}}</span>
             </div>
         </div>
     </div>
     <div class='button'>
         <a href='#'>
             <p>进店逛逛</p>
         </a>
     </div>
 </div>
</template>

<script>
export default {
    props:{
        shop:{
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
.header{
    display:flex;
    margin:10px 0 10px 10px;
    font-weight:bold;
    align-items:center;
}
.header img{
    width:50px;
    height:50px;
    border:1px solid #8b8c8e;
    border-radius:50%;
    /* vertical-align: middle; */
    margin-right:15px;

}
.content{
    display:flex;
       align-items:center;
}
.left{
    flex:1;
    text-align:center;
    border-right:1px solid #8b8c8e;
    padding-right:15px;
    display:flex;
}

.cell{
    flex:1;
    margin-right:20px;
    margin-left:25px;
}
.count{
    flex:1;
}
.small{
    margin-top:5px;
    font-size:12px;
}
.bold{
    font-weight: bold;
    font-size:14px;
}

.right{
    flex:1;
    text-align:center;
}
.item{
    margin-top:10px;
}
.right span{
   margin-right:10px;
}
.button{
    width:100%;
    margin-top:20px;
    margin-right:15px;
    text-align:center;
    border-bottom:5px solid #f2f5f8;
    padding-bottom:15px;
}
.button p{
    margin:0 auto;
    width:150px;
    height:30px;
    line-height:30px;
    background-color: yellow;
    border-radius:15px;
}
.isbad{
    color: #5ea732;
}
.isbetter{
      color: #f13e3a;
}
</style>
