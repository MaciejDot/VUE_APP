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
import RichTextEditor from './components/richtexteditor/RichTextEditor.vue'
import Login from './components/account/Login.vue'


export default [
 { path: '', name:"Main Page", component: MainPage },
 { path: '/rich',component:RichTextEditor},
 { path: '/workout', component: ChooseWorkout },
 { path: '/wiki', component: MainPageWiki},
 { path: '/wiki/:exercise', component: WikiArticle},
 { path: '/Forum', name:"Forum", component: Forum},
 { path: '/articles', component: MainPageArticles},
 { path: '/articles/:page', component: MainPageArticles},
 { path: '/article/:id', component: ArticleView },
 { path: '/Forum/:subjectName', name:'Forum Subject Threads', component:ForumThreadList, query:{page:1}},
 { path: '/Forum/:subjectName/:threadId', component:ForumThreadPage, query:{page:1}},
 { path: '/Forum/*/:subjectId/creator', component: ForumThreadCreator},
 { path: '/Art', component: RichTextEditorArticle},
 { path: '/Login', component:Login}
];