import ChooseWorkout from './components/workout/ChooseWorkout'
import MainPageWiki from './components/wiki/MainPageWiki'
import Forum from './components/forum/Forum'
import MainPageArticles from './components/articles/MainPageArticles'
import ForumThreadList from './components/forum/ForumThreadList.vue'
import ForumThreadPage from './components/forum/ForumThreadPage'
import ForumThreadCreator from './components/forum/ForumThreadCreator'
import MainPage from './components/MainPage'
import RichTextEditorArticle from './components/richtexteditor/RichTextEditorArticle.vue'
import ArticleView from './components/articles/ArticleView.vue'
export default [
 { path: '', name:"Main Page", component: MainPage },
 { path: '/workout', component: ChooseWorkout },
 { path: '/wiki', component: MainPageWiki},
 { path: '/Forum', name:"Forum", component: Forum},
 { path: '/articles', component: MainPageArticles},
 { path: '/article/:id', component: ArticleView },
 { path: '/Forum/:subjectId', name:'Forum Subject Threads', component:ForumThreadList},
 { path: '/Forum/:subjectId/:threadId', component:ForumThreadPage },
 { path: '/Forum/*/:subjectId/creator', component: ForumThreadCreator},
 { path: '/Art', component: RichTextEditorArticle},
];