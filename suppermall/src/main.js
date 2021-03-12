import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// import VueAxios from 'vue-axios'
// import {request} from 'network/request'
// Vue.use(VueAxios)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  axios,
  // VueAxios,
  render: h => h(App)
}).$mount('#app')
