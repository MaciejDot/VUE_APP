import Vue from 'vue'
import App from './App.vue'
import ChooseWorkout from './components/workout/ChooseWorkout'
import MainPageWiki from './components/exercises/MainPageWiki'
import VueRouter from 'vue-router'
import Forum from './components/forum/Forum'
import MainPageArticles from './components/articles/MainPageArticles'
import 'bootstrap'
import BootstrapVue from "bootstrap-vue"
import ForumPost from './components/forum/forumParts/ForumPost.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import ForumThreadList from './components/forum/ForumThreadList.vue'
import axios from 'axios'
import ForumThreadPage from './components/forum/ForumThreadPage'
//import HelloWorld from './components/HelloWorld'
const routes = [
 { path: '/defaultPost', component: ForumPost },
 { path: '/workout', component: ChooseWorkout },
 { path: '/exercises', component: MainPageWiki},
 { path: '/forum', component: Forum},
 { path: '/articles', component: MainPageArticles},
 { path: '/forum/:title', component:ForumThreadList},
 { path: '/forum/:title/:threadId', component:ForumThreadPage }
];
Vue.use(VueRouter)
const router = new VueRouter({
  routes: routes
})

Vue.use(BootstrapVue)
new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
Vue.prototype.$api=axios.create({
  baseURL:""
})
Vue.config.productionTip = false

