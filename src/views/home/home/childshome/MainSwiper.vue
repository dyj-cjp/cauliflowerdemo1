<template>
<swiper>
         <swiper-item v-for="(items,index) in banner" :key='index'>
             <a :href='items.link'>
                 <img :src='items.image' @load='swiperimgloaded'/>
             </a>
         </swiper-item>
     </swiper>
</template>

<script>
import {Swiper,SwiperItem} from "../../../../components/common/swiper";
export default {
    props:{
        banner:{
            type:Array,
            default(){
                return []
            }
        }
    },
 data () {
 return {
    isloaded:false,
 }
 },
 methods: {
    
          swiperimgloaded(){
              if(!this.isloaded){
         this.$emit('swiperLoaded');
         this.isloaded=true;
              }
     }
     
 },
 components: {
     Swiper,
     SwiperItem,
 }
}
</script>

<style scoped>

</style>
