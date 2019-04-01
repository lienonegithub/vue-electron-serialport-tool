import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index'
import SocketIO from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'

import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO('http://localhost:8088'), //options object is Optional
  vuex: {
    store,
    actionPrefix: "SOCKET_",
    mutationPrefix: "SOCKET_"
  }
})
)
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
