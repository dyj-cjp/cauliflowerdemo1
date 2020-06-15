<template>
  <div id="sign">
   <div class='password'>
     <img src='../../assets/sign/user.png' >
     <input v-model='username' type='text' placeholder='Username'> 
   </div>
   <div class='password'>
     <img src='../../assets/sign/phonenumber.png' >
     <input v-model='phonenumber' type='text' placeholder='Phonenumber'> 
   </div>
    <div class='password'>
     <img src='../../assets/sign/password.png'>
     <input v-model='password' type='text' placeholder='Password'>
   </div>
    <div class='password'>
     <img src='../../assets/sign/confirm.png'>
     <input v-model='passwordack' type='text' placeholder='Confirm Password'>
   </div>
   <div class='but clear'>
     <div class='reg' @click='register'>Register</div>
   </div>
  </div>
</template>
<script>
  import axios from 'axios';
export default {
  name:'sign',
    data(){
      return{
            username:"",
            phonenumber:"",
            password:"",
            passwordack:"",
            faceurl:'hub'
      }
  },
  methods:{
      register(){
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (this.username == '') {
        alert('请输入用户名')
    } else if (this.phonenumber == '') {
        alert('请输入手机号码')

    } else if (this.phonenumber.length != 11) {
      alert('手机号码长度有误，请重新输入')
    } else if (!myreg.test(this.phonenumber)) {
      alert('请输入正确的手机号码')

    } else if (this.password == '') {
      alert('请输入密码')
    } else if (this.passwordack == '') {
      alert('请输入确认密码')

    } else if (this.password != this.passwordack) {
      alert('两次输入密码不一致')

    } else {
          let postData=this.$qs.stringify({
                    username:this.username,
                    phone: this.phonenumber,
                    password:this.password,
                    password_again:this.passwordack,
                    face_url:this.faceurl
              });
              axios({
                  url:'/api/treehole//index.php/Home/User/sign',
                // url:'/home/multidata',
                  method:'post',
                  data:postData
              }).then(res=>{
                console.log(res);
                  if(res.data.error_code==1){
                      alert(res.data.msg);
                  }else if(res.data.error_code==2){
                      alert('两次密码不一致!')
                  }else if(res.data.error_code==3){
                      alert('手机已被注册!')
                  }else if(res.data.error_code!=0){
                      alert('出错了呢'+res.data.msg)
                  }else if(res.data.error_code==0){
                      var flag=confirm('注册成功');
                        if(flag){
                            //  this.$router.replace("/home");
                             this.$bus.$emit('signsucess');
                             this.$store.commit('signmessage',this.phonenumber);
                        }
                  }
              }).catch(err=>{
                  alert('网络不在状态！'+res.data.msg);
              })
      }
  }
}
}
</script>
<style scoped>
#sign{
  width:300px;
  height:260px;
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
  font-size:13px;
  color:#b2b4b5;
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

clear::after{
  content:'';
  display:block;
  clear:both;
}
.but{
    /* background-color: orange; */
    position:relative;

}
.reg{
  width:160px;
  height:35px;
  background-color:#A22AED;
  text-align:center;
  line-height:35px;
  color:#d9dade;
  border-radius: 5px;
  transition:transform linear .2s;
  cursor:pointer;
  margin-left:50px;

}
.reg:hover{
  transform:translate(0,-3px);
}
</style>
