import Vue from 'vue'
import App from './App.vue'
/* eslint-disable */
import firebase from './firebase'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
