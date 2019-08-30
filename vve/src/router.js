import Vue from 'vue'
import Router from 'vue-router'

const car = () => import("./views/car/car");
const home = () => import("./views/home/home");
const wo = () => import("./views/wo/wo");
const xiang = () => import("./views/xiang/xiang");

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect:"/home"
    },
    {
      path: '/home',      
      component:home,
      meta:{title:"首页"}
    },
    {
      path: '/xiang',      
      component:xiang,
      meta:{title:"详情"},
      name:"hehe"
    },
    {
      path: '/car',      
      component:car,
      meta:{title:"购物车"}
    },
    {
      path: '/wo',      
      component:wo,
      meta:{title:"我的"}
    },
  ]
})
router.beforeEach(function(to,form,next){
  document.title=to.meta.title;
  next();
})
export default router
