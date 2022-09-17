import Vue from 'vue'
import App from './App.vue'

import '@/plugins/element'
import '@/plugins/socket.io'

// 引入全局样式
import '../public/global.css'

// 引入router
import router from '@/router'

// 引入store
import store from '@/store'

import axios from 'axios'

// 设置根路径
// axios.defaults.baseURL = ''
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app')
