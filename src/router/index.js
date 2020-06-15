import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Home=()=>import ("../views/home/home")
const Cart=()=>import ("../views/cart/Cart")
const Category=()=>import("../views/category/category")
const Profile=()=>import("../views/profile/profile")
const Detail=()=>import('../views/detail/Detail')
const Login=()=>import('../views/login/Login')

const routes=[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/detail/:id',
    component:Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
