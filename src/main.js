import Vue from 'vue'
import App from './App.vue'
/* eslint-disable */
import firebase from './firebase'
import VueMasonry from 'vue-masonry-css'
import VueKonva from "vue-konva";

Vue.use(VueKonva);
Vue.use(VueMasonry);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
