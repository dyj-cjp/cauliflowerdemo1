<template>
 <div class='detailparam'>
     <table class='table1' v-for='(table,index) in param.sizes' :key='index'>
         <tr v-for='(tr,indey) in table' :key='indey'>
             <td v-for='(td,indez) in tr' :key='indez'>{{td}}</td>
         </tr>
     </table>
     <table class='table2'>
         <tr v-for='(tr,index) in param.infos' :key='index'>
             <td>{{tr.key}}</td>
             <td class='value'>{{tr.value}}</td>
         </tr>
     </table>
     <div>
         <img :src='param.image' alt=''>
     </div>
 </div>
</template>

<script>
export default {
    props:{
        param:{
            type:Object,
            default(){
                return {}
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

 }
}
</script>

<style scoped>
.detailparam{
    padding:10px;
}
.table1{
    width:100%;
    border-collapse: collapse;
    border-bottom: 5px solid #f2f5f8;
}
.table1 tr{
    height:42px;
}
.table1 tr td{
    border-bottom: 1px solid rgba(100,100,100,.1);
}
.table2{
    width:100%;
    padding-top:10px;
    font-size:14px;
        border-bottom: 5px solid #f2f5f8;
}
.table2 tr{
    height:42px;
}
.table2 tr td{
    border-bottom: 1px solid rgba(100,100,100,.1);

}
.value{
    color:#eb4868;
}
</style>
