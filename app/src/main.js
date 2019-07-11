import Vue from 'vue'
import App from './App.vue'
import ChooseWorkout from './components/workout/ChooseWorkout'

const routes = [
  { path: '/workout', component: ChooseWorkout }
]

const router = new VueRouter({
  routes 
})

const app = new Vue({
  router
}).$mount('#app')
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')

