<template>
 <div>
     <nav-bar class='cartnav'>
         <div slot='center'>购物车({{this.$store.state.cartList.length}})</div>
     </nav-bar>
     <scroll class='content' ref='scroll'>
     <cart-list></cart-list>
     </scroll>
     <cart-bottom class='cartbottom' @allclick='allclick'></cart-bottom>
 </div>
</template>

<script>
import CartList from '../../views/cart/cartchild/CartList'
import NavBar from '../../components/common/navbar/NavBar'
import CartBottom from './cartchild/CartBottom'
import Scroll from '../../components/common/scroll/Scroll'
export default {
 data () {
 return {

 }
 },
 methods: {

 },
 activated(){
     this.$refs.scroll.Refresh();
 },
 components: {
     CartList,
     NavBar,
     CartBottom,
     Scroll
 }
}
</script>

<style scoped>
.cartnav{
    background-color:pink;
    color:white
}
.cartbottom{
      position:fixed;
    bottom:49px;
    right:0;
    left:0;
}
.content{
    position:fixed;
    bottom:89px;
    top:49px;
    left:0;
    right:0;
    overflow:hidden;
}
</style>
