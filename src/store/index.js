import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
  state:{
    cartList:[],
    phonemessage:'',
    signmessage:'',
  },
  mutations:{
    message(state,payload){
      state.phonemessage=payload;
        },
    signmessage(state,payload){
      state.signmessage=payload;
    },
    addToCart(state,payload){

      // state.cartList.push(payload);

      // for(let item of state.cartList){
      //   if(item.iid===payload.iid){
      //     oldProduct=item;
      //   }
      // }
      let product=state.cartList.find(item=>item.iid===payload.iid)
      if(product){
        product.count += 1;
      }
      else{
        payload.count = 1;
        payload.ischeck=false;
        state.cartList.push(payload);
      }
      console.log(state.cartList);
    }
  }
})

export default store
