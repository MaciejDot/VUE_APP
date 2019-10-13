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

//import Embed from '@editorjs/embed'
//const Embed = require('@editorjs/embed');
//Vue.use(require('@editorjs/embed'))
//goog.require( 'goog.html.sanitizer.HtmlSanitizer' );
var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo)


library.add(faUser, faChartArea, faSearch)

Vue.component('font-awesome-icon', FontAwesomeIcon)
dom.watch()
Vue.use(VueRouter);
const router = new VueRouter({
  routes: routes
})

Vue.use(BootstrapVue)
Vue.prototype.$baseUrlApi="https://localhost:5001";
Vue.prototype.$api=axios.create({
  baseURL: 'https://localhost:5001',
  headers: {
    'Content-Type': "application/json",
  },
})
new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')

Vue.config.productionTip = false

