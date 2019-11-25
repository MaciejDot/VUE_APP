import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bootstrap'
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import axios from 'axios'
import routes from './routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faChartArea, faSearch} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { dom } from '@fortawesome/fontawesome-svg-core'
var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo)


library.add(faUser, faChartArea, faSearch)

Vue.component('font-awesome-icon', FontAwesomeIcon)
dom.watch()
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes: routes
});

Vue.use(BootstrapVue)
Vue.prototype.$baseUrlApi="https://localhost:5001";
var headers=function(){ return localStorage['token']!=undefined?{
  'Content-Type': "application/json",
  'Authorization': `Bearer ${localStorage['token']}`
}:{
  'Content-Type': "application/json"
}}
var api= function(){
  let ax=axios.create({
  baseURL: "https://localhost:5001",
  headers: headers(),
  timeout: 3000,
})
ax.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if(error.response.status == 404){
    router.push('/404')
  }
  return Promise.reject(error);
});
return ax;
}
Vue.prototype.$axios={api: api}

var roles = null;
Vue.prototype.$account= {
  isInRole : function(role){
    if(roles!=null){
      return roles.includes(role);
    }
    else if(localStorage["token"]!=undefined){
        api().get('/AccountInfo').then(r=>{
        roles=r.data.roles;
        return roles.includes(role);
      })
      .catch(()=>{
        return false;
      })
    }
    else{
      return false;
    }
  }
}
new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')

Vue.config.productionTip = false

