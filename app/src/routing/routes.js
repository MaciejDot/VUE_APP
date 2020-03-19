import ChooseWorkout from '.././components/workout/ChooseWorkout'
import Forum from '.././components/forum/Forum'
import MainPageArticles from '.././components/articles/MainPageArticles'
import ForumThreadList from '.././components/forum/ForumThreadList.vue'
import ForumThreadPage from '.././components/forum/ForumThreadPage'
import ForumThreadCreator from '.././components/forum/ForumThreadCreator'
import MainPage from '.././components/MainPage'
import RichTextEditorArticle from '.././components/richtexteditor/RichTextEditorArticle.vue'
import ArticleView from '.././components/articles/ArticleView.vue'
import Login from '.././components/account/Login.vue'
import SuccessSignOut from '.././components/account/SuccessSignOut.vue'
import Register from '.././components/account/Register.vue'
import NotFound from '.././components/routing/NotFound.vue'
import WorkoutCreator from '.././components/workout/WorkoutCreator'
import BackLog from '.././components/workout/BackLog.vue'
import WorkoutViewer from '.././components/workout/WorkoutViewer.vue'
import WorkoutExecution from '.././components/workout/WorkoutExecution.vue'

export default [{
        path: '',
        name: "Main Page",
        component: MainPage
    },
    {
        path: '/workout',
        component: ChooseWorkout
    },
    {
        path: '/Forum',
        name: "Forum",
        component: Forum
    },
    {
        path: '/articles',
        component: MainPageArticles
    },
    {
        path: '/articles/:page',
        component: MainPageArticles
    },
    {
        path: '/article/:id',
        component: ArticleView
    },
    {
        path: '/Forum/:subjectName',
        name: 'Forum Subject Threads',
        component: ForumThreadList,
        query: {
            page: {
                default: 1
            }
        }
    },
    {
        path: '/Forum/:subjectName/:threadId',
        component: ForumThreadPage,
        query: {
            page: {
                default: 1
            }
        }
    },
    {
        path: '/create-thread/:subjectName',
        component: ForumThreadCreator
    },
    {
        path: '/create-article',
        component: RichTextEditorArticle
    },
    {
        path: '/Login',
        component: Login
    },
    {
        path: '/Register',
        component: Register
    },
    {
        path: '/SuccessSignOut',
        component: SuccessSignOut
    },
    {
        path: '/WorkoutCreator',
        component: WorkoutCreator
    },
    {
        path: '/WorkoutCreator/:username/:workoutName',
        component: WorkoutCreator
    },
    {
        path: '/WorkoutExecution',
        component: WorkoutExecution
    },
    {
        path: '/WorkoutExecution/:username/:workoutName',
        component: WorkoutExecution
    },
    {
        path: '/BackLog',
        component: BackLog
    },
    {
        path: '/WorkoutViewer/:username/:workoutName',
        component: WorkoutViewer
    },
    {
        path: '*',
        component: NotFound
    }
];