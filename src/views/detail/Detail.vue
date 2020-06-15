<template>
 <div class='detail'>
     <detail-navbar class='navbar' @itemclick='titleclick' ref='navbar'></detail-navbar>
     <scroll class='content' ref='scroll' :probe-type="3" @contentScroll='contentScroll'>
        <detail-swiper :topimages='topImages'></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shops"></detail-shop-info>
        <detail-goods :detailgoods='detailgoods' @imgloaded='imgload'></detail-goods>
        <detail-param ref='param' :param='detailparam'></detail-param>
        <detail-common ref='common' :commoninfo='commentInfo'></detail-common>
        <detail-recommend ref='recommend' :recommendgoods='detailrecommend'></detail-recommend>
     </scroll>
     <back-top v-show='ishidden'  @click.native='backclick'></back-top>
     <detail-bar @addCart='addCart'></detail-bar>
     <toast class='toast' :class='{active:isactive}'></toast>
 </div>
</template>

<script>
import DetailNavbar from './detailchild/DetailNavbar';
import Scroll from '../../components/common/scroll/Scroll'
import DetailSwiper from './detailchild/DetailSwiper';
import DetailBaseInfo from './detailchild/DetailBaseInfo';
import DetailShopInfo from './detailchild/DetailShopInfo';
import DetailGoods from './detailchild/DetailGoods';
import DetailParam from './detailchild/DetailParam';
import DetailCommon from './detailchild/DetailCommon'
import DetailRecommend from './detailchild/DetailRecomend';
import BackTop from '../../components/content/backtop/BackTop'
import DetailBar from './detailchild/DetailBar';
import Toast from '../../components/common/toast/Toast'


import {getDetail,Goods,Shops,GoodsParam,getRecommend} from '../../network/detail'
export default {
    name:"Detail",
 data () {
 return {
     iid:null,
     topImages:[],
     goods: {},
     shops:{},
     detailgoods:{},
     detailparam:{},
     detailrecommend:[],
     commentInfo:{},
     ishidden:false,
     titleY:[],
     isactive:false
 }
 },
 methods: {
     imgload(){
         this.$refs.scroll.Refresh();
         this.titleY=[];
         this.titleY.push(0);
         this.titleY.push(this.$refs.param.$el.offsetTop);
         this.titleY.push(this.$refs.common.$el.offsetTop);
         this.titleY.push(this.$refs.recommend.$el.offsetTop);
         console.log(this.titleY);
     },
     contentScroll(position){
         this.ishidden=(-position.y)>1000;
         const y=-position.y;
        //  for(var i=0;i<this.titleY.length;i++){
        //      if(i!=this.titleY.length-1){
        //         if(this.titleY[i]<y&&this.titleY[i+1]>=y){
        //          this.$refs.navbar.currentindex=i;
        //         }
        //      }else{
        //          if(y>this.titleY[i]){
        //              this.$refs.navbar.currentindex=i;
        //          }
        //      }
        //  };
        for(var i=0;i<this.titleY.length-1;i++){
            if(this.titleY[i]<=y&&this.titleY[i+1]>y){
                 this.$refs.navbar.currentindex=i;
                }
        }
        if(y>=this.titleY[this.titleY.length-1]){
            this.$refs.navbar.currentindex=this.titleY.length-1;

        }
     },
     backclick(){
         this.$refs.scroll.ScrollTo(0,0);
     },
     titleclick(index){
         this.$refs.scroll.ScrollTo(0,-this.titleY[index]);

     },
     addCart(){
         console.log("jiarugoulwuche");
         const product={}
         product.image=this.topImages[0];
         product.title=this.goods.title;
         product.desc=this.goods.desc;
         product.price=this.goods.realPrice;
         product.iid=this.iid;
         product.count=0;


        //  this.$store.state.cartList.push(product);
        this.$store.commit('addToCart',product);

        this.isactive=true;
        setTimeout(() => {
            this.isactive=false;
        }, 2000);




     }
 },
 created(){
     this.iid=this.$route.params.id;

     getDetail(this.iid).then((res)=>{
         const data = res.result;
        console.log(res);
        this.topImages = data.itemInfo.topImages
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        this.shops = new Shops(data.shopInfo)
        this.detailgoods=data.detailInfo;
        this.detailparam = new GoodsParam(data.itemParams.info, data.itemParams.rule);
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        }
     })
     getRecommend().then((res)=>{
         console.log(res);
          this.detailrecommend = res.data.list;
     })
 },
 components: {
     DetailNavbar,
     Scroll,
     DetailSwiper,
     DetailBaseInfo,
     DetailShopInfo,
     DetailGoods,
     DetailParam,
     DetailRecommend,
     DetailCommon,
     BackTop,
     DetailBar,
     Toast
 }
}
</script>

<style scoped>
.navbar{
     position:fixed;
        left:0;
        right:0;
        top:0;
        z-index:9;
        background-color: #fff;
}
.content{
    position:absolute;
    top:44px;
    bottom:49px;
    left:0;
    right:0;
}
.toast{
    position:fixed;
    top:50%;
    left:50%;
    Z-index:999;
    color:white;
    padding:8px 10px;
    background-color:rgba(0,0,0,.75);
    transform: translate(-50%,-50%);
    display:none;
}
.active{
    display:block;
}
</style>
