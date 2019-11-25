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
import NotFound from './components/routing/NotFound.vue'
import RichTextEditorWiki from './components/richtexteditor/RichTextEditorWiki.vue'
export default [
 { path: '', name:"Main Page", component: MainPage },
 { path: '/workout', component: ChooseWorkout },
 { path: '/wiki', component: MainPageWiki, query:{phrase:{},page:{default:1}}},
 { path: '/wiki/:exercise', component: WikiArticle},
 { path: '/Forum', name:"Forum", component: Forum},
 { path: '/articles', component: MainPageArticles},
 { path: '/articles/:page', component: MainPageArticles},
 { path: '/article/:id', component: ArticleView },
 { path: '/Forum/:subjectName', name:'Forum Subject Threads', component:ForumThreadList, query:{page:{default:1}}},
 { path: '/Forum/:subjectName/:threadId', component:ForumThreadPage, query:{page:{default:1}}},
 { path: '/create-thread/:subjectName', component: ForumThreadCreator},
 { path: '/create-article', component: RichTextEditorArticle},
 { path: '/create-wiki', component:RichTextEditorWiki},
 { path: '/Login', component:Login},
 { path: '/Register', component:Register},
 { path:'/SuccessSignOut',component:SuccessSignOut},
 { path:'*',component:NotFound}
];