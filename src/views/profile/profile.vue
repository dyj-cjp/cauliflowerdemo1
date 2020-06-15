<template>
 <div id='profile'>
     <nav-bar class='navbar'><div slot='center'>个人信息</div></nav-bar>
     <div class='userinfo'>
         <div class='userimage'>
             <img src='../../assets/img/profile/avatar.svg'>
         </div>
         <div class='userphone'>
             <img src='../../assets/img/profile/phone.png'>
             <div class='number'>用户账户:{{showmessage}}</div>
         </div>
         <div class='right'>
             <img src='../../assets/img/profile/right.png'>
         </div>
     </div>
     <div class='content'>
         <div class='pay same'>
             <img src='../../assets/img/profile/pay.png'>
             <div>待付款</div>
         </div>
         <div class='receive same'>
             <img src='../../assets/img/profile/receive.png'>
             <div>待收货</div>
         </div>
         <div class='comment same'>
             <img src='../../assets/img/profile/comment.png'>
             <div>待评价</div>
         </div>
         <div class='buy same'>
             <img src='../../assets/img/profile/buy.png'>
             <div>退换/售后</div>
         </div>
         <div class='item same'>
             <img src='../../assets/img/profile/item.png'>
             <div>我的订单</div>
         </div>
     </div>
     <div class='list'>
         <div class='message'>
             <img src='../../assets/img/profile/message.svg'>
             <div>我的消息</div>
         </div>
         <div class='message'>
             <img src='../../assets/img/profile/pointer.svg'>
             <div>积分商城</div>
         </div>
         <div class='message special'>
             <img src='../../assets/img/profile/vip.svg'>
             <div>会员卡</div>
         </div>
     </div>
     <div class='list-bottom'>
         <div class='message'>
             <img src='../../assets/img/profile/cart.svg'>
             <div>我的购物车</div>
         </div>
         <div class='message'>
             <img src='../../assets/img/profile/shopping.svg'>
             <div>下载购物车APP</div>
         </div>
     </div>
 </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'

export default {
 data () {
 return {
     message:'',
     signmessage:''
 }
 },
 created(){
     this.message=this.$store.state.phonemessage;
     this.signmessage=this.$store.state.signmessage;
 },
 computed:{
     showmessage(){
         console.log(this.message);
         console.log(this.signmessage);
        
         if(this.message.length){
             return this.message;
         }
         else{
             return this.signmessage;
         }
 }
 },
 methods: {

 },
 components: {
     NavBar
 }
}
</script>

<style scoped>
.navbar{
    background-color: pink;
    color:white;
}
.userinfo{
    display:flex;
    background-color: pink;
    margin-top:0;
    height:80px;
    position:relative;
}
.userimage{
    flex:1;
}
.userimage img{
    width:80px;
    height:80px;
    border-radius: 50%;
}
.userphone{
    width:200px;
     position:absolute;
    top:50%;
    left:80px;
    transform: translate(0,-2%);


}
.userphone img{
    width:20px;
    height:20px;
    float:left;
}
.number{
    float:left;
    color:white;
    margin-top:2px;
    font-size:14px;
}
.right{
    flex:1;
    position:absolute;
    top:50%;
    right:5px;
    transform: translate(0,-50%);
}
.right img{
    width:30px;
    height:30px;
}
.content img{
    width:35px;
    height:35px;
}
.content{
    margin-top:5px;
    display:flex;
    font-size:13px;
    justify-content:space-around;
    padding-bottom:10px;
     border-bottom: 5px solid #f2f5f8;
    
}
.same{
    flex:1;
    /* background-color: orange; */
    text-align: center;

}
.buy img,.item img{
    width:30px;
    height:30px;
    margin-top:3px;
    margin-bottom:2px;
}
.message{
    width:100%;
    height:50px;
    position:relative;
    display:flex;
}
.message img{
    width:22px;
    height:22px;
    position: absolute;
    top:50%;
    left:5px;
    transform: translate(0,-50%);
}
.message div {
    flex:1;
    /* position: absolute;
    height:50px;
    line-height:50px;
    top:50%;
    left:40px;
    transform: translate(0,-50%); */
    font-weight: bold;
    line-height: 50px;
    font-size:14px;
    border-bottom:1px solid #eee;
    margin-left:40px;
}
.list{
     border-bottom: 5px solid #f2f5f8;

}
.special{
    margin-bottom:10px;
    border:none;
}

</style>
