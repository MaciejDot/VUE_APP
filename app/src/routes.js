import ChooseWorkout from './components/workout/ChooseWorkout'
import MainPageWiki from './components/wiki/MainPageWiki'
import Forum from './components/forum/Forum'
import MainPageArticles from './components/articles/MainPageArticles'
import ForumThreadList from './components/forum/ForumThreadList.vue'
import ForumThreadPage from './components/forum/ForumThreadPage'
import ForumThreadCreator from './components/forum/ForumThreadCreator'
import MainPage from './components/MainPage'
import WikiArticle from './components/wiki/wikiComponents/WikiArticle'
import RichTextEditorArticle from './components/richtexteditor/RichTextEditorArticle.vue'
import ArticleView from './components/articles/ArticleView.vue'
import Login from './components/account/Login.vue'
import SuccessSignOut from'./components/account/SuccessSignOut.vue'
import Register from './components/account/Register.vue'
export default [
 { path: '', name:"Main Page", component: MainPage },
 { path: '/workout', component: ChooseWorkout },
 { path: '/wiki', component: MainPageWiki},
 { path: '/wiki/:exercise', component: WikiArticle},
 { path: '/Forum', name:"Forum", component: Forum},
 { path: '/articles', component: MainPageArticles},
 { path: '/articles/:page', component: MainPageArticles},
 { path: '/article/:id', component: ArticleView },
 { path: '/Forum/:subjectName', name:'Forum Subject Threads', component:ForumThreadList, query:{page:{default:1}}},
 { path: '/Forum/:subjectName/:threadId', component:ForumThreadPage, query:{page:{default:1}}},
 { path: '/Forum/*/Creator/:subjectName', component: ForumThreadCreator},
 { path: '/Art', component: RichTextEditorArticle},
 { path: '/Login', component:Login},
 { path: '/Register', component:Register},
 { path:'/SuccessSignOut',component:SuccessSignOut}
];