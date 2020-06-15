<template>
    <swiper class='contentswiper'>
        <swiper-item v-for="(item,index) in topimages" :key="index">
            <img :src="item" >
        </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from '../../../components/common/swiper'
export default {
    props:{
        topimages:{
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
     Swiper,
     SwiperItem
 }
}
</script>

<style scoped>
.contentswiper{
    height:250px;
    overflow:hidden;
}
</style>
