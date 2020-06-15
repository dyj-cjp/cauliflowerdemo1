<template>
 <div id='home'>
     <div :class='{wrap:iswrap}'>
     </div>
     <nav-bar class='home-bar'><div slot='center'>
         <div class='txt'>
             小椰菜商品
         <div class='imgs'><img src='../../../public/mylucky.png'></div>

         </div>
         
         </div></nav-bar>
     <tabcontrol :titles="['流行','新款','精选']" class='tabcontrol2' 
     @titleClick='tabClick' ref='tab2' v-show='istabshow'></tabcontrol>
     <scroll class='content' ref='scroll' :probeType='3' @contentScroll='contentScroll' 
     :pullUpLoad='true' @pullingUp='loadMore' >
             <main-swiper :banner='banner' @swiperLoaded='swiperimgloaded'></main-swiper>
     <recommend :recommend="recommend"></recommend>
     <feature></feature>
     <tabcontrol :titles="['流行','新款','精选']" class='tabcontrol' 
     @titleClick='tabClick' ref='tab1'></tabcontrol>
     <good-list :lists="goods[currenttype].list"></good-list>
     </scroll>
     <back-top @click.native='backtop' v-show='ishidden'></back-top>
     <login class='login' :class='{loginsucess:islogin}'></login>
     <sign class='sign' :class='{signsucess:issign}'></sign>

 </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import MainSwiper from "./home/childshome/MainSwiper"
import Recommend from "./home/childshome/Recommend"
import Feature from "./home/childshome/Feature"
import Tabcontrol from "../../components/content/tabcontrol/Tabcontrol"
import GoodList from "../../components/content/goods/GoodList"
import Scroll from "../../components/common/scroll/Scroll"
import BackTop from "../../components/content/backtop/BackTop"
import Login from '../../views/login/Login'
import Sign from '../../views/sign/sign'



import {getHomeMultidata,getHomeGoods} from "../../network/home";
export default {
    name:'home',
 data () {
 return {
     banner:[],
     recommend:[],
     goods:{
         'pop':{pages:0,list:[]},
         'new':{pages:0,list:[]},
         'sell':{pages:0,list:[]}
     },
     currenttype:'pop',
     ishidden:false,
     tabcontroloffsettop:0,
     istabshow:false,
     currenty:0,
     iswrap:true,
     islogin:false,
     issign:true
 }
 },
 methods: {
     tabClick(index){
         switch(index){
             case 0:
                 this.currenttype='pop';
                 break;
             case 1:
                 this.currenttype='new';
                 break;
             case 2:
                 this.currenttype='sell';
                 break;
         }
         this.$refs.tab1.currentindex=index;
         this.$refs.tab2.currentindex=index;
     },

     backtop(){
         this.$refs.scroll.ScrollTo(0,0);
     },

     contentScroll(position){
        //  console.log(position);
         this.ishidden=(-position.y)>1000;
         this.istabshow=(-position.y)>this.tabcontroloffsettop;

     },
     loadMore(){
         this.getHomeGoods(this.currenttype);
         this.$refs.scroll.finishPullup();
     },

     debounce(func,delay){
         let timer=null;
         return function(...args){
             if(timer)clearTimeout(timer);
             timer=setTimeout(()=>{
                 func.apply(this,args);
             },delay)
         }
     },

     swiperimgloaded(){
         this.tabcontroloffsettop=this.$refs.tab1.$el.offsetTop;
     },

     getHomeMultidata(){
         getHomeMultidata().then(res=>{
            console.log(res);
            this.banner=res.data.banner.list;
            this.recommend=res.data.recommend.list;
        })
     },
     getHomeGoods(type){
         const pages=this.goods[type].pages+1;
         getHomeGoods(type,pages).then(res=>{
             console.log(res);
             this.goods[type].list.push(...res.data.list);
             this.goods[type].pages++;
         })
     }


 },
 components: {
     NavBar,
     MainSwiper,
     Recommend,
     Feature,
     Tabcontrol,
     GoodList,
     Scroll,
     BackTop,
     Login,
     Sign
 },
 created(){
        this.getHomeMultidata();
        this.getHomeGoods('pop');
         this.getHomeGoods('new');
          this.getHomeGoods('sell');
          this.$bus.$on('loginsucess',()=>{
              setTimeout(() => {
                   this.iswrap=false;
              this.islogin=true;
              this.issign=true;
              },800);
          });
          this.$bus.$on('signsucess',()=>{
              setTimeout(() => {
                  this.islogin=true;
              this.iswrap=false;
              this.issign=true;
              }, 800);
          });
          this.$bus.$on('toregister',()=>{
             setTimeout(() => {
                  this.iswrap=true;
              this.islogin=true;
              this.issign=false;
             },800);
          })
 },
 mounted(){
     this.$bus.$on('loadimg',()=>{
            this.$refs.scroll.scroll.refresh();
        })
    //  const refresh=this.debounce(this.$refs.scroll.Refresh,50);
    //   this.$bus.$on('loadimg',()=>{
    //        refresh();
    //     })
 },
//  destroyed(){
//      console.log("homedestroy");
//  },
 activated(){
     this.$refs.scroll.ScrollTo(0,this.currenty);
     this.$refs.scroll.Refresh();

    //  console.log('homeactivated')
 },
 deactivated(){
     this.currenty=this.$refs.scroll.scroll.y;
//      console.log(this.currenty);
//      console.log('homedisactivated');
 }
}
</script>

<style scoped>
    #home{
        padding-top:44px;
        position:relative;

        /* height:100vh; */
    }
    .home-bar{
        background-color:pink;
        color:#fff;
        position:fixed;
        left:0;
        right:0;
        top:0;
        z-index:9;
    }
    .home-bar img{
        width:26px;
        height:26px;
    }
    .txt{
        position:relative;
        /* background-color: orange; */
    }
    .imgs{
        position:fixed;
        right:62%;
        top:8px;
    }
   
    .tabcontrol{
        /* position:sticky;
        top:44px;
        z-index:9; */
        position:relative;
        z-index:9;
    }
    .content{
        position:absolute;
        left:0;
        right:0;
        bottom:49px;
        top:44px;
        /* height:calc(100%-93); */
    }
    .login{
        position:fixed;
        z-index:999;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
    }
    .wrap{
        position:fixed;
        left:0;
        top:0;
        bottom:0;
        right:0;
        background-color:rgba(0,0,0,.45);
        z-index:99;
    }
    .loginsucess{
        display:none;
    }
    .signsucess{
        display:none;
    }
    .sign{
         position:fixed;
        z-index:999;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
    }
</style>
