<template>
  <div id="app">
    <keep-alive exclude='Detail'>
    <router-view></router-view>
    </keep-alive>
    <main-tabar></main-tabar>
  </div>
</template>
<script>
import MainTabar from "./components/content/mainTabar/MainTabar"
export default {
  name:'App',
  components:{
    MainTabar
  },
  data(){
    return {
      isshow:true,
    }
  },
  created(){
    console.log(this.$route.path);
  }
}
</script>
<style>
  @import './assets/css/base.css';
</style>
