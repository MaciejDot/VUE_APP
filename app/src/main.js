import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bootstrap'
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import axios from 'axios'
import routes from './routing/routes'
import 'vue-select/dist/vue-select.css';
import vSelect from 'vue-select'
import VueSimpleContextMenu from 'vue-simple-context-menu'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist';
import {
  getters
} from './store/getters/getters'
import {
  mutations
} from './store/mutations/mutations'
import {
  actions
} from './store/actions/actions'

var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo)
Vue.component('vue-simple-context-menu', VueSimpleContextMenu)
Vue.component('v-select', vSelect)
Vue.use(VueRouter);
Vue.use(BootstrapVue)
Vue.use(Vuex)
const vuexPersist = new VuexPersist({
  key: 'calisthenics_encyclopedia',
  storage: window.localStorage
});
const router = new VueRouter({
  mode: 'history',
  routes: routes
});
const store = new Vuex.Store({
  state: {},
  getters,
  mutations,
  actions,
  plugins: [vuexPersist.plugin]
});

//api config
Vue.prototype.$baseUrlArticleApi = "https://localhost:44379";
Vue.prototype.$baseUrlForumApi = "https://localhost:44362";
var headers = function () {
  return store.state.jwtToken != undefined ? {
    'Content-Type': "application/json",
    'Authorization': `Bearer ${store.state.jwtToken}`
  } : {
    'Content-Type': "application/json"
  }
}
const accountApi = () =>
  axios.create({
    baseURL: "https://localhost:44344",
    headers: headers(),
    timeout: 50000,
  })
const forumApi = () =>
  axios.create({
    baseURL: "https://localhost:44362",
    headers: headers(),
    timeout: 50000,
  })
const articleApi = () => axios.create({
  baseURL: "https://localhost:44379",
  headers: headers(),
  timeout: 50000,
})
const workoutApi = () => axios.create({
  baseURL: "https://localhost:44341",
  headers: headers(),
  timeout: 50000,
});
Vue.prototype.$axios = {
  account: accountApi,
  forum: forumApi,
  article: articleApi,
  workout: workoutApi
}

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
store.dispatch('updateToken');
store.dispatch('updateAccountInfo');
setInterval(() => {
  store.dispatch('updateToken');
  store.dispatch('updateAccountInfo');
}, 2 * 60 * 1000);
Vue.config.productionTip = false