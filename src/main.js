import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import "normalize.css"
import "@/common/stylus/index.styl"
import fastclick from 'fastclick'
Vue.config.productionTip = false
fastclick.attach(document.body)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
