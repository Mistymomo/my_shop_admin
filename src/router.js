import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Index from './components/Index.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    { path: '/login', name: 'login', component: Login },
    { path: '/index', name: 'index', component: Index }
  ]
})

// 配置全局的导航守卫
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.path === '/login' || token) {
    // 通过
    next()
  } else {
    // 扔回登录页
    next('/login')
  }
})
export default router
