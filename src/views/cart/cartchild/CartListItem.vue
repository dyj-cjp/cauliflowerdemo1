<template>
 <div class='cartlistitem'>
     <div class='checkbox'>
         <img :class='{check:ischeck}' src='../../../assets/cart/tick.svg'>
     </div>
     <div class='right'>
         <div class='images'>
             <img :src='cartlist.image'>
         </div>
         <div class='info'>
             <p class='title'>{{cartlist.title}}</p>
             <p class='desc' v-if='cartlist.desc'>{{cartlist.desc}}</p>
             <span class='price'>￥{{cartlist.price}}</span>
             <span class='count'>x{{cartlist.count}}</span>
         </div>
     </div>

 </div>
</template>

<script>
export default {
    props:{
        cartlist:{
            type:Object,
            default(){
                return {};
            }
        },
        ischeck:{
            type:Boolean,
            default(){
                return false;
            }
        }
    },
 data () {
 return {
 }
 },
 methods:{
 },
 components: {

 }
}
</script>

<style scoped>
.cartlistitem{
    display:flex;
    padding:10px;
    border-bottom:1px solid #ccc;
    padding-left:0px;

}
.checkbox{
    width:30px;
    height:120px;
       display:flex;
    justify-content: center;
    align-items:center;


}

.checkbox img{
    border-radius:50%;
    width:20px;
    height:20px;
    border:1px solid #aaa;
     
    /* position:absolute;
    top:50%;
    transform:translate(0,-50%);
    left:50%;
    transform:translate(-50%,0); */
}
.check{
     background-color: red;
    border-radius:50%;
    width:20px;
    height:20px;
    border:1px solid red;
}

.right{
    flex:1;
    display:flex;
}

.images img{
    width:90px;
    height:120px;
}
.info{
    width:180px;
    font-size:15px;
    margin-top:15px;
    margin-left:10px;
    position:relative;
}
.info .title{
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
    font-weight: bold;

}
.info .desc{
    margin-top:20px;
    font-size:13px;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
}
.info .price,.info .count{
    position:absolute;
    bottom:15px;
}
.info .price{
       color:orangered;

}
.info .count{
    right:20px;
    font-weight: bold;
}



</style>
