<template>
  <div id="login">
   <div class='username'>
     <img src='../../assets/login/user.png' >
     <input v-model='phonemessage' type='text' placeholder='Phonenumber'> 
   </div>
    <div class='password'>
     <img src='../../assets/login/password.png'>
     <input v-model='pawmessage' type='text' placeholder='Password'>
   </div>
   <div class='but clear'>
     <div class='logs' @click="tohome">Login</div>
     <div class='reg' @click='toregister'>
       没有账号？点我注册</div>
   </div>
  </div>
</template>
<script>
  import axios from 'axios';
export default {
  name:'Login',
    data(){
      return{
          phonemessage:'',
          pawmessage:'',
      }
  },
  methods:{
      tohome(){
          console.log(this.pawmessage);
          if(this.phonemessage==''){
              alert('请输入用户名！')
          }else if(this.phonemessage.length!=11){
              alert('手机号码长度有误，请重新输入')
          }else if(this.pawmessage==''){
              alert('请输入密码')
          }else{
              let postData=this.$qs.stringify({
                  phone:this.phonemessage,
                  password:this.pawmessage
              });
              axios({
                  url:'/api/treehole/index.php/Home/User/login',
                // url:'/home/multidata',
                  method:'post',
                  data:postData
              }).then(res=>{
                console.log(res);
                  if(res.data.error_code==1){
                      alert(res.data.msg);
                  }else if(res.data.error_code==2){
                      alert('不存在该手机用户，请注册')
                  }else if(res.data.error_code==3){
                      alert('密码不存在，请重新输入！')
                  }else if(res.data.error_code!=0){
                      alert('出错了呢'+res.data.msg)
                  }else if(res.data.error_code==0){
                      var flag=confirm('登录成功');
                        if(flag){
                             this.$router.replace("/home");
                             this.$bus.$emit('loginsucess');
                             this.$store.commit('message',this.phonemessage);
                        }
                  }
              }).catch(err=>{
                  alert('网络不在状态！'+res.data.msg);
              })
          }
     },
     toregister(){
       this.$bus.$emit('toregister');
     }
  }
}
</script>
<style scoped>
#login{
  width:300px;
  height:220px;
  /* background-color:rgb(98,100,115,0.7); */
  background-color:#2f3031;
  border-radius:10px; 
  padding:20px;
}
input{
  outline:none;
}
input::placeholder{
  font-style:italic;
  color:#b2b4b5;
}
.username{
  width:210px;
  height:30px;
  position:relative;
  /* background-color: red; */
  /* text-align:center; */
  margin:0 auto;
  margin-top:25px;
  margin-bottom:15px;
  border-bottom:1px solid #E8E8E7;
  padding-bottom:2px;
  /* border-radius:10px; */

}
.username img{
  width:12px;
  height:12px;
  position:absolute;
  top:50%;
  left:0px;
  transform: translate(0,-50%);
}
.username input{
  border:0px;
  background-color:transparent;
  width:160px;
  height:25px;
  position:absolute;
  top:50%;
  transform: translate(0,-50%);
  left:25px;
  /* color:#E8E8E7; */
  color:white;
}
.password{
  width:210px;
  height:30px;
  position:relative;
  /* background-color: red; */
  /* text-align:center; */
  margin:0 auto;
  margin-bottom:15px;
  border-bottom:1px solid #E8E8E7;
  padding-bottom:2px;
  /* border-radius:10px; */

}
.password img{
  width:12px;
  height:12px;
  position:absolute;
  top:50%;
  left:0px;
  transform: translate(0,-50%);
}
.password input{
  border:0px;
  background-color:transparent;
  width:160px;
  height:25px;
  position:absolute;
  top:50%;
  transform: translate(0,-50%);
  left:25px;
  /* color:#E8E8E7; */
  color:white;
}
.but{
  width:200px;
  height:100px;
  margin:20px auto;
  /* background-color:yellow; */
}
.logs{
  width:160px;
  height:35px;
  background-color:#A22AED;
  text-align:center;
  line-height:35px;
  color:#d9dade;
  border-radius: 5px;
  margin-left:20px;

}
.reg{
  position:absolute;
  bottom:10px;
  right:10px;
  font-size:13px;
  color:rgba(230,230,230);

}
</style>
