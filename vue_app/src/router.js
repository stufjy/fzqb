import Vue from 'vue'
import Router from 'vue-router'
import Home from "./components/Home.vue"
import img from "./components/img.vue"
import detail from "./components/detail.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:Home},
    {path:'/img',component:img},
    {path:'/detail',component:detail}
  ]
})
