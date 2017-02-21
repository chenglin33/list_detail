// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
/*import axios from 'axios'
import VueAxios from 'vue-axios'*/


Vue.use(VueResource)
Vue.use(Vuex)
/*Vue.use(VueAxios, axios)*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
