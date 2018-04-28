import Vue from 'vue'
import App from './App.vue'
import JfounderUI from './lib/index.js'
// import vuePayKeyboard from './lib/indexvue-pay-keyboard'
Vue.use(JfounderUI)
new Vue({
  el: '#app',
  render: h => h(App)
})
