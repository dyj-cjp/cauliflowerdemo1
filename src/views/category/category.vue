<template>
 <div>
     <nav-bar class='nav'><div slot='center'>商品分类</div></nav-bar>
        <div class='line'></div>
        <div class='container'>
        <scroll class='content1'>
     <category-title class='title' :titles='category' @titleclick='titleclick'>></category-title> 
        </scroll>
        <scroll class='content2'> 
        <good-list class='goods' :lists='listitem[style].list'></good-list>
        </scroll>
        </div>
 </div>
</template>

<script>
import {getcategory} from '../../network/category'
import NavBar from '../../components/common/navbar/NavBar'
import CategoryTitle from './categorychild/CategoryTitle'
import Scroll from '../../components/common/scroll/Scroll'
import GoodList from '../../components/content/goods/GoodList'
export default {
 data () {
 return {
     category:[],
     style:'pop',
     listitem:{
                 'pop':{list:[
                                {img:require("../../assets/category/cloths/5.jpg"),title:"2020夏季流行潮流品牌",price:23,cfav:150},



                                {img:require("../../assets/category/pop/2.jpg"),title:"2020夏季流行潮流品牌",price:58,cfav:650},
                                {img:require("../../assets/category/pop/3.jpg"),title:"2020夏季流行潮流品牌",price:44,cfav:530},
                                {img:require("../../assets/category/pop/4.jpg"),title:"2020夏季流行潮流品牌",price:99,cfav:520},
                                {img:require("../../assets/category/pop/5.jpg"),title:"2020夏季流行潮流品牌",price:23,cfav:150},
                                {img:require("../../assets/category/pop/6.jpg"),title:"2020夏季流行潮流品牌",price:105,cfav:450},
                                {img:require("../../assets/category/pop/7.jpg"),title:"2020夏季流行潮流品牌",price:23,cfav:150},
                                {img:require("../../assets/category/pop/8.jpg"),title:"2020夏季流行潮流品牌",price:105,cfav:450},
                                ]
                        },
                  'cloths':{list:[
                                {img:require("../../assets/category/cloths/2.jpg"),title:"2020夏季流行潮流品牌",price:58,cfav:650},
                                {img:require("../../assets/category/cloths/3.jpg"),title:"2020夏季流行潮流品牌",price:44,cfav:530},
                                {img:require("../../assets/category/cloths/4.jpg"),title:"2020夏季流行潮流品牌",price:99,cfav:520},
                                {img:require("../../assets/category/cloths/5.jpg"),title:"2020夏季流行潮流品牌",price:23,cfav:150},
                                {img:require("../../assets/category/cloths/6.jpg"),title:"2020夏季流行潮流品牌",price:105,cfav:450},
                                {img:require("../../assets/category/cloths/7.jpg"),title:"2020夏季流行潮流品牌",price:105,cfav:450},
                                {img:require("../../assets/category/pop/5.jpg"),title:"2020夏季流行潮流品牌",price:23,cfav:150},
                                {img:require("../../assets/category/pop/6.jpg"),title:"2020夏季流行潮流品牌",price:105,cfav:450},
                                {img:require("../../assets/category/pop/7.jpg"),title:"2020夏季流行潮流品牌",price:23,cfav:150},
                                {img:require("../../assets/category/pop/8.jpg"),title:"2020夏季流行潮流品牌",price:105,cfav:450},
                                ]
                        },
                    'jeans':{list:[
                                {img:require("../../assets/category/jeans/1.jpg"),title:"2020夏季流行潮流品牌",price:55,cfav:540},
                                {img:require("../../assets/category/jeans/2.jpg"),title:"2020夏季流行潮流品牌",price:58,cfav:650},
                                {img:require("../../assets/category/jeans/3.png"),title:"2020夏季流行潮流品牌",price:44,cfav:530},
                                {img:require("../../assets/category/jeans/4.png"),title:"2020夏季流行潮流品牌",price:99,cfav:520},
                                {img:require("../../assets/category/jeans/5.png"),title:"2020夏季流行潮流品牌",price:23,cfav:150},
                                {img:require("../../assets/category/jeans/6.png"),title:"2020夏季流行潮流品牌",price:105,cfav:450},
                                {img:require("../../assets/category/boy/4.jpg"),title:"2020夏季流行潮流品牌",price:99,cfav:520},
                                {img:require("../../assets/category/boy/5.jpg"),title:"2020夏季流行潮流品牌",price:23,cfav:150},
                                {img:require("../../assets/category/boy/8.jpg"),title:"2020夏季流行潮流品牌",price:105,cfav:450},
                                {img:require("../../assets/category/boy/6.jpg"),title:"2020夏季流行潮流品牌",price:105,cfav:450},




                                ]
                        },
                'skirt':{list:[
                                {img:require("../../assets/category/skirt/1.png"),title:"2020夏季流行潮流品牌",price:55,cfav:540},
                                {img:require("../../assets/category/skirt/2.jpg"),title:"2020夏季流行潮流品牌",price:58,cfav:650},
                                {img:require("../../assets/category/skirt/3.png"),title:"2020夏季流行潮流品牌",price:44,cfav:530},
                                {img:require("../../assets/category/skirt/4.png"),title:"2020夏季流行潮流品牌",price:99,cfav:520},
                                {img:require("../../assets/category/skirt/5.jpg"),title:"2020夏季流行潮流品牌",price:23,cfav:150},
                                {img:require("../../assets/category/skirt/6.png"),title:"2020夏季流行潮流品牌",price:105,cfav:450},
                                ]
                        },
                'shy':{list:[
                                {img:require("../../assets/category/shy/1.jpg"),title:"2020夏季流行潮流品牌",price:55,cfav:540},
                                {img:require("../../assets/category/shy/2.jpg"),title:"2020夏季流行潮流品牌",price:58,cfav:650},
                                {img:require("../../assets/category/shy/3.jpg"),title:"2020夏季流行潮流品牌",price:44,cfav:530},
                                {img:require("../../assets/category/shy/4.jpg"),title:"2020夏季流行潮流品牌",price:99,cfav:520},
                                {img:require("../../assets/category/shy/5.jpg"),title:"2020夏季流行潮流品牌",price:23,cfav:150},
                                {img:require("../../assets/category/shy/6.jpg"),title:"2020夏季流行潮流品牌",price:105,cfav:450},
                                ]
                        },
                 'girl':{list:[
                                {img:require("../../assets/category/girl/1.jpg"),title:"2020夏季流行潮流品牌",price:55,cfav:540},
                                {img:require("../../assets/category/girl/2.jpg"),title:"2020夏季流行潮流品牌",price:58,cfav:650},
                                {img:require("../../assets/category/girl/3.jpg"),title:"2020夏季流行潮流品牌",price:44,cfav:530},
                                {img:require("../../assets/category/girl/4.jpg"),title:"2020夏季流行潮流品牌",price:99,cfav:520},
                                {img:require("../../assets/category/girl/5.jpg"),title:"2020夏季流行潮流品牌",price:23,cfav:150},
                                {img:require("../../assets/category/girl/6.jpg"),title:"2020夏季流行潮流品牌",price:105,cfav:450},
                                ]
                        },
                'boy':{list:[
                                {img:require("../../assets/category/boy/1.jpg"),title:"2020夏季流行潮流品牌",price:55,cfav:540},
                                {img:require("../../assets/category/boy/2.jpg"),title:"2020夏季流行潮流品牌",price:58,cfav:650},
                                {img:require("../../assets/category/boy/3.jpg"),title:"2020夏季流行潮流品牌",price:44,cfav:530},
                                {img:require("../../assets/category/boy/4.jpg"),title:"2020夏季流行潮流品牌",price:99,cfav:520},
                                {img:require("../../assets/category/boy/5.jpg"),title:"2020夏季流行潮流品牌",price:23,cfav:150},
                                {img:require("../../assets/category/boy/6.jpg"),title:"2020夏季流行潮流品牌",price:105,cfav:450},
                                {img:require("../../assets/category/boy/7.jpg"),title:"2020夏季流行潮流品牌",price:23,cfav:150},
                                {img:require("../../assets/category/boy/8.jpg"),title:"2020夏季流行潮流品牌",price:105,cfav:450},
                                ]
                        },
                 'package':{list:[
                                {img:require("../../assets/category/package/1.jpg"),title:"2020夏季流行潮流品牌",price:55,cfav:540},
                                {img:require("../../assets/category/package/2.jpg"),title:"2020夏季流行潮流品牌",price:58,cfav:650},
                                {img:require("../../assets/category/package/3.jpg"),title:"2020夏季流行潮流品牌",price:44,cfav:530},
                                {img:require("../../assets/category/package/4.jpg"),title:"2020夏季流行潮流品牌",price:99,cfav:520},
                                {img:require("../../assets/category/package/5.jpg"),title:"2020夏季流行潮流品牌",price:23,cfav:150},
                                {img:require("../../assets/category/package/6.jpg"),title:"2020夏季流行潮流品牌",price:105,cfav:450},
                                ]
                        },
                'sport':{list:[
                                {img:require("../../assets/category/sport/2.png"),title:"2020夏季流行潮流品牌",price:55,cfav:540},
                                {img:require("../../assets/category/sport/4.png"),title:"2020夏季流行潮流品牌",price:58,cfav:650},
                                {img:require("../../assets/category/sport/5.png"),title:"2020夏季流行潮流品牌",price:44,cfav:530},
                                {img:require("../../assets/category/sport/6.png"),title:"2020夏季流行潮流品牌",price:99,cfav:520},
                                {img:require("../../assets/category/sport/7.png"),title:"2020夏季流行潮流品牌",price:23,cfav:150},
                                {img:require("../../assets/category/sport/8.png"),title:"2020夏季流行潮流品牌",price:105,cfav:450},
                                ]
                        },
                'decoration':{list:[
                                {img:require("../../assets/category/decoration/1.jpg"),title:"2020夏季流行潮流品牌",price:55,cfav:540},
                                {img:require("../../assets/category/decoration/2.jpg"),title:"2020夏季流行潮流品牌",price:58,cfav:650},
                                {img:require("../../assets/category/decoration/3.jpg"),title:"2020夏季流行潮流品牌",price:44,cfav:530},
                                {img:require("../../assets/category/decoration/4.jpg"),title:"2020夏季流行潮流品牌",price:99,cfav:520},
                                {img:require("../../assets/category/decoration/5.jpg"),title:"2020夏季流行潮流品牌",price:23,cfav:150},
                                {img:require("../../assets/category/decoration/6.jpg"),title:"2020夏季流行潮流品牌",price:105,cfav:450},
                                ]
                        },
                'beauty':{list:[
                                {img:require("../../assets/category/beauty/1.jpg"),title:"2020夏季流行潮流品牌",price:55,cfav:540},
                                {img:require("../../assets/category/beauty/2.jpg"),title:"2020夏季流行潮流品牌",price:58,cfav:650},
                                {img:require("../../assets/category/beauty/3.jpg"),title:"2020夏季流行潮流品牌",price:44,cfav:530},
                                {img:require("../../assets/category/beauty/4.jpg"),title:"2020夏季流行潮流品牌",price:99,cfav:520},
                                {img:require("../../assets/category/beauty/5.jpg"),title:"2020夏季流行潮流品牌",price:23,cfav:150},
                                {img:require("../../assets/category/beauty/6.jpg"),title:"2020夏季流行潮流品牌",price:105,cfav:450},
                                ]
                        },
                'defense':{list:[
                                {img:require("../../assets/category/defense/1.jpg"),title:"2020夏季流行潮流品牌",price:55,cfav:540},
                                {img:require("../../assets/category/defense/2.jpg"),title:"2020夏季流行潮流品牌",price:58,cfav:650},
                                {img:require("../../assets/category/defense/3.jpg"),title:"2020夏季流行潮流品牌",price:44,cfav:530},
                                {img:require("../../assets/category/defense/4.jpg"),title:"2020夏季流行潮流品牌",price:99,cfav:520},
                                {img:require("../../assets/category/defense/5.jpg"),title:"2020夏季流行潮流品牌",price:23,cfav:150},
                                {img:require("../../assets/category/defense/6.jpg"),title:"2020夏季流行潮流品牌",price:105,cfav:450},
                                ]
                        },
                  'home':{list:[
                                {img:require("../../assets/category/home/1.jpg"),title:"2020夏季流行潮流品牌",price:55,cfav:540},
                                {img:require("../../assets/category/home/2.jpg"),title:"2020夏季流行潮流品牌",price:58,cfav:650},
                                {img:require("../../assets/category/home/3.jpg"),title:"2020夏季流行潮流品牌",price:44,cfav:530},
                                {img:require("../../assets/category/home/4.jpg"),title:"2020夏季流行潮流品牌",price:99,cfav:520},
                                {img:require("../../assets/category/home/5.jpg"),title:"2020夏季流行潮流品牌",price:23,cfav:150},
                                {img:require("../../assets/category/home/6.jpg"),title:"2020夏季流行潮流品牌",price:105,cfav:450},
                                ]
                        },
                    'shop':{list:[
                                {img:require("../../assets/category/shop/1.png"),title:"2020夏季流行潮流品牌",price:55,cfav:540},
                                {img:require("../../assets/category/shop/2.jpg"),title:"2020夏季流行潮流品牌",price:58,cfav:650},
                                {img:require("../../assets/category/shop/3.jpg"),title:"2020夏季流行潮流品牌",price:44,cfav:530},
                                {img:require("../../assets/category/shop/4.jpg"),title:"2020夏季流行潮流品牌",price:99,cfav:520},
                                {img:require("../../assets/category/shop/5.png"),title:"2020夏季流行潮流品牌",price:23,cfav:150},
                                {img:require("../../assets/category/shop/6.png"),title:"2020夏季流行潮流品牌",price:105,cfav:450},
                                ]
                        },
                          'mother':{list:[
                                {img:require("../../assets/category/mother/1.jpg"),title:"2020夏季流行潮流品牌",price:55,cfav:540},
                                {img:require("../../assets/category/mother/2.jpg"),title:"2020夏季流行潮流品牌",price:58,cfav:650},
                                {img:require("../../assets/category/mother/3.jpg"),title:"2020夏季流行潮流品牌",price:44,cfav:530},
                                {img:require("../../assets/category/mother/4.jpg"),title:"2020夏季流行潮流品牌",price:99,cfav:520},
                                {img:require("../../assets/category/mother/5.jpg"),title:"2020夏季流行潮流品牌",price:23,cfav:150},
                                {img:require("../../assets/category/mother/6.jpg"),title:"2020夏季流行潮流品牌",price:105,cfav:450},
                                ]
                        },
                 'food':{list:[
                                {img:require("../../assets/category/food/1.jpg"),title:"2020夏季流行潮流品牌",price:55,cfav:540},
                                {img:require("../../assets/category/food/2.jpg"),title:"2020夏季流行潮流品牌",price:58,cfav:650},
                                {img:require("../../assets/category/food/3.jpg"),title:"2020夏季流行潮流品牌",price:44,cfav:530},
                                {img:require("../../assets/category/food/4.jpg"),title:"2020夏季流行潮流品牌",price:99,cfav:520},
                                {img:require("../../assets/category/food/5.png"),title:"2020夏季流行潮流品牌",price:23,cfav:150},
                                {img:require("../../assets/category/food/6.jpg"),title:"2020夏季流行潮流品牌",price:105,cfav:450},
                                ]
                        }

            }
 }
 },
 created(){
     getcategory().then(res=>{
         console.log(res);
         this.category=res.data.category.list;
     })
 },
 methods: {
     titleclick(index){
         switch(index){
             case 0:
                 this.style='pop';
                 break;
            case 1:
                 this.style='cloths';
                 break;
            case 2:
                 this.style='jeans';
                 break;
            case 3:
                 this.style='skirt';
                 break;
            case 4:
                 this.style='shy';
                 break;
            case 5:
                 this.style='girl';
                 break;
            case 6:
                 this.style='boy';
                 break;
            case 7:
                 this.style='package';
                 break;
            case 8:
                 this.style='sport';
                 break;
            case 9:
                 this.style='decoration';
                 break;
            case 10:
                 this.style='beauty';
                 break;
            case 11:
                 this.style='defense';
                 break;
            case 12:
                 this.style='home';
                 break;
            case 13:
                 this.style='shop';
                 break;
            case 14:
                 this.style='mother';
                 break;
            case 15:
                 this.style='food';
                 break;
         }
     }
 },
 components: {
     CategoryTitle,
     NavBar,
     Scroll,
     GoodList
 }
}
</script>

<style scoped>
.nav{
        background-color:pink;
    color:white
}
.line{
    margin:3px 0 0px 0;
    width:100%;
    height:1px;
    background-color: #f0f2f6;
}
.content1 {
    position: fixed;
    bottom:49px;
    top:47px;
    right:calc(100%-90px);
    left:0;
    overflow:hidden;
}
.content2{
     position: fixed;
    bottom:49px;
    top:47px;
    right:0;
    left:90px;
    overflow:hidden;
}
.container{
    display:flex;
    width:100%;
}
.title{
    flex:1;
}
.goods{
    flex:1;
}
</style>
