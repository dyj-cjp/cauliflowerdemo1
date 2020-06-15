<template>
 <div id='cartlist'>
     <cart-list-item :cartlist='item' v-for='(item,index) in cartinfo' :key='index'
     :ischeck='item.ischeck'
     @click.native='checkclick(index)'
     ></cart-list-item>
 </div>
</template>

<script>
import CartListItem from './CartListItem'
export default {
 data () {
 return {
     cartinfo:[],
     flag:false,
     currentmoney:0,
 }
 },
 computed:{
 },
 methods:{
     checkclick(index){
         this.cartinfo[index].ischeck=!this.cartinfo[index].ischeck;
         this.flag=true;
         for(var i=0;i<this.cartinfo.length;i++){
             if(this.cartinfo[i].ischeck==false){
                 this.flag=false;
                 break;
             }
         }
         this.currentmoney=0
         for(var i=0;i<this.cartinfo.length;i++){
             if(this.cartinfo[i].ischeck){
                 this.currentmoney+=this.cartinfo[i].count*parseFloat(this.cartinfo[i].price);
             }
         }
         this.$bus.$emit('isall',this.flag,this.currentmoney);
     }
 },
 created(){
     this.$bus.$on('allclick',(value)=>{
         for(var i=0;i<this.cartinfo.length;i++){
             this.cartinfo[i].ischeck=value;
         }
          this.currentmoney=0;
     for(var i=0;i<this.cartinfo.length;i++){
             if(this.cartinfo[i].ischeck){
                 this.currentmoney+=this.cartinfo[i].count*parseFloat(this.cartinfo[i].price);
             }
         }
          this.$bus.$emit('isallmoney',this.currentmoney);
     })
 },
 activated(){
     this.cartinfo=this.$store.state.cartList;
     this.currentmoney=0;
     for(var i=0;i<this.cartinfo.length;i++){
             if(this.cartinfo[i].ischeck){
                 this.currentmoney+=this.cartinfo[i].count*parseFloat(this.cartinfo[i].price);
             }
         }
          this.$bus.$emit('isall',this.flag,this.currentmoney);
  console.log(this.$store.state.cartList);
 },
 components: {
     CartListItem,
 }
}
</script>

<style scoped>

</style>
