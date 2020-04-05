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
import {
  getters
} from './store/getters/getters'
import {
  mutations
} from './store/mutations/mutations'
import {
  actions
} from './store/actions/actions'
import VCalendar from 'v-calendar'
import {
  baseUrls
} from './config/config'
import {
  persistancePlugin
} from './store/plugins/persistancePlugin'
import {
  EventBus
} from './eventBus/eventBus'



var VueScrollTo = require('vue-scrollto');
document.title = 'Calisthenics Encyclopedia'
Vue.use(VCalendar)
Vue.use(VueScrollTo)
Vue.component('vue-simple-context-menu', VueSimpleContextMenu)
Vue.component('v-select', vSelect)
Vue.use(VueRouter);
Vue.use(BootstrapVue)
Vue.use(Vuex)


const router = new VueRouter({
  mode: 'history',
  routes: routes
});

const store = new Vuex.Store({
  state: {},
  getters,
  mutations,
  actions,
  plugins: [persistancePlugin]
});
Vue.prototype.$baseUrlArticleApi = baseUrls.articleApiAddress; // future => static + store
Vue.prototype.$baseUrlForumApi = baseUrls.forumApiAddress; //future => static + store
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
    baseURL: baseUrls.accountApiAddress,
    headers: headers(),
    timeout: 50000,
  })
const forumApi = () =>
  axios.create({
    baseURL: baseUrls.forumApiAddress,
    headers: headers(),
    timeout: 50000,
  })
const articleApi = () => axios.create({
  baseURL: baseUrls.articleApiAddress,
  headers: headers(),
  timeout: 50000,
})
const workoutApi = () => axios.create({
  baseURL: baseUrls.workoutApiAddress,
  headers: headers(),
  timeout: 50000,
});

Vue.prototype.$axios = {
  account: accountApi,
  forum: forumApi,
  article: articleApi,
  workout: workoutApi
}


EventBus.$on("data-was-loaded", () => {
  new Vue({
    store,
    router,
    render: h => h(App)
  }).$mount('#app')
});
//future change it to SetTimeout and do event handling
//EventBus????
setInterval(() => {
  if (store.state.lastUpdatedToken !== undefined && store.state.lastUpdatedToken < Date.now() - 75 * 60 * 1000) {
    store.dispatch('updateToken');
    store.dispatch('updateAccountInfo');
  }
}, 20 * 1000);
Vue.config.productionTip = false