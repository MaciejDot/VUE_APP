import Vue from 'vue'
import App from './App.vue'
//import ChooseWorkout from './components/workout/ChooseWorkout'
//import VueRouter from 'vue-router'
//const routes = [
 // { path: '', name:'root', component:App },
 // { path: '/workout', name:'workout' ,component: ChooseWorkout }
//]

//const router = new VueRouter({
//routes 
//})

 new Vue({
  //router,
  render: h => h(App),
}).$mount('#app')
Vue.config.productionTip = false

