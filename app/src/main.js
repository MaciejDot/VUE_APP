import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bootstrap'
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import axios from 'axios'
import routes from './routes'
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faUser,
  faChartArea,
  faSearch
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
import {
  dom
} from '@fortawesome/fontawesome-svg-core'
import 'vue-select/dist/vue-select.css';
var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo)
import vSelect from 'vue-select'

Vue.component('v-select', vSelect)

library.add(faUser, faChartArea, faSearch)

Vue.component('font-awesome-icon', FontAwesomeIcon)
dom.watch()
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes: routes
});

Vue.use(BootstrapVue)
Vue.prototype.$baseUrlApi = "https://localhost:5001";
Vue.prototype.$baseUrlArticleApi ="https://localhost:44379";
Vue.prototype.$baseUrlForumApi ="https://localhost:44362";
var headers = function () {
  return localStorage['token'] != undefined ? {
    'Content-Type': "application/json",
    'Authorization': `Bearer ${localStorage['token']}`
  } : {
    'Content-Type': "application/json"
  }
}
var api = function () {
  let ax = axios.create({
    baseURL: "https://localhost:5001",
    headers: headers(),
    timeout: 50000,
  })
  ax.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if (error.response.status == 404) {
      router.push('/404')
    }
    return Promise.reject(error);
  });
  return ax;
}

var accountApi = function(){
  return axios.create({
    baseURL: "/api",
    headers: headers(),
    timeout: 50000,
  })
}
var forumApi = function(){
  return axios.create({
    baseURL: "https://localhost:44362",
    headers: headers(),
    timeout: 50000,
  })
}
var articleApi = function(){
  return axios.create({
    baseURL: "https://localhost:44379",
    headers: headers(),
    timeout: 50000,
  })
}

Vue.prototype.$axios = {
  api: api,
  account : accountApi,
  forum : forumApi,
  article : articleApi

}


var roles = null;

Vue.prototype.$account = {
  isInRole: function (role) {
    if (roles != null) {
      return roles.includes(role);
    } else if (localStorage["token"] != undefined) {
      accountApi().get('/AccountInfo').then(r => {
          roles = r.data.roles;
          return roles.includes(role);
        })
        .catch(() => {
          return false;
        })
    } else {
      return false;
    }
  }
}

setInterval(() => {
  if (localStorage["token"] != undefined) {
      accountApi()
      .get("/Token")
      .then(t => {
        localStorage["token"] = t.data.token;
      });
  }
}, 2 * 60 * 1000);

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')

Vue.config.productionTip = false