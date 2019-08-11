import ChooseWorkout from './components/workout/ChooseWorkout'
import MainPageWiki from './components/wiki/MainPageWiki'
import Forum from './components/forum/Forum'
import MainPageArticles from './components/articles/MainPageArticles'
import ForumThreadList from './components/forum/ForumThreadList.vue'
import ForumThreadPage from './components/forum/ForumThreadPage'
import ForumThreadCreator from './components/forum/ForumThreadCreator'
import MainPage from './components/MainPage'

export default [
 { path: '', name:"Main Page", component: MainPage },
 { path: '/workout', component: ChooseWorkout },
 { path: '/wiki', component: MainPageWiki},
 { path: '/Forum', component: Forum},
 { path: '/articles', component: MainPageArticles},
 { path: '/Forum/:title', component:ForumThreadList},
 { path: '/Forum/:title/:threadId', component:ForumThreadPage },
 { path: '/Forum/*/:title/creator', component: ForumThreadCreator}
];