import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
			component: resolve => require(['../components/Login.vue'],resolve),
      hidden:true
    }
// ,
// 		{
//       path: '/home',
//       name: '主页',
//       component: Home,
//       hidden: true,
//       meta: {
//         requireAuth: true
//       }
    // }
  ]
})
