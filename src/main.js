import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import 'font-awesome/css/font-awesome.css'

import { postRequest } from '@/utils/api';
import { putRequest } from '@/utils/api';
import { getRequest } from '@/utils/api';
import { deleteRequest } from '@/utils/api';
import { initMenu } from './utils/menus';


// 插件形式使用请求
Vue.prototype.postRequest = postRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.getRequest = getRequest;
Vue.prototype.deleteRequest = deleteRequest;

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios = axios;
Vue.prototype.$store=store
// to表示当前要去的一个导航路由 from表示要离开的导航路由
// 如果不执行next 就不会跳到下一个路由
// 全局前置守卫(每次进行路由跳转之前都需要经过全局前置守卫)如-拦截器
router.beforeEach((to,from,next)=>{
  // 判断用户是否登录 登录之后toeknStr会放在sessionStorage中
  if(window.sessionStorage.getItem('tokenStr')){
    // 初始化菜单
    initMenu(router,store);
    // 判断用户信息存不存在
    if (!window.sessionStorage.getItem('user')){
      return getRequest('/admin/info').then(resp=>{
        if(resp){
          // 存入用户信息
          window.sessionStorage.setItem('user',JSON.stringify(resp));
          next();
        }
      })
    }
    next();
  } else {
    // 判断将要去往的路由路径是不是登录路径
    if (to.path == '/'){
      next();
    }else{
      // 用户直接输入路径,先登录再跳转输入路径
      // 问号才是传参
      next('/?redirect='+to.path);
    }
  }
// next参数 false将不会跳转到to路由中而是回到from中
// / +  可指定将要跳转的路由 ,error

})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
