import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入element-ui模块
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入axios模块
import axios from 'axios'

Vue.config.productionTip = false

// 基于vue的第三方插件，都需要use一下
Vue.use(ElementUI)

// 把axios绑定到vue原型上
Vue.prototype.$axios = axios

// 配置全局的 axios 默认值(请求的基础地址和请求头)
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'

// 配置请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前给请求头配置token，这样每个http header都加上token
  config.headers.Authorization = localStorage.getItem('token')
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
