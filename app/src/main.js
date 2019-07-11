import Vue from 'vue'
import App from './App.vue'
//import ChooseWorkout from './components/workout/ChooseWorkout'
//import MainPageWiki from './components/exercises/MainPageWiki'
import VueRouter from 'vue-router'
import Forum from './components/forum/Forum'
const routes = [
 //{ path: '/workout', name:'workout' , component: ChooseWorkout },
 //{ path: '/exercises', name:'exercises' , components: MainPageWiki},
 { path: '/forum', name:'forum' , components: Forum},
]

const router = new VueRouter({
  routes: routes
})
Vue.use(VueRouter)
new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
Vue.config.productionTip = false

