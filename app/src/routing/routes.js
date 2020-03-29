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
import Calendar from '.././components/workout/Calendar.vue'
export default [{
        path: '',
        name: "Main Page",
        component: MainPage,
        meta: {
            title: 'Calisthenics Encyclopedia'
          }
    },
    {
        path: '/workout',
        component: ChooseWorkout,
        meta: {
            title: 'Calisthenics Encyclopedia - Workout Dashboard'
          }
    },
    {
        path: '/Forum',
        name: "Forum",
        component: Forum,
        meta: {
            title: 'Calisthenics Encyclopedia - Forum'
          }
    },
    {
        path: '/articles',
        component: MainPageArticles,
        meta: {
            title: 'Calisthenics Encyclopedia - Articles'
          }
    },
    {
        path: '/articles/:page',
        component: MainPageArticles
    },
    {
        path: '/article/:id',
        component: ArticleView,
        meta: {
            title: 'Calisthenics Encyclopedia - Article'
          }
    },
    {
        path: '/Forum/:subjectName',
        name: 'Forum Subject Threads',
        component: ForumThreadList,
        query: {
            page: {
                default: 1
            }
        },
        meta: {
            title: 'Calisthenics Encyclopedia - Forum'
          }
    },
    {
        path: '/Forum/:subjectName/:threadId',
        component: ForumThreadPage,
        query: {
            page: {
                default: 1
            }
        },
        meta: {
            title: 'Calisthenics Encyclopedia - Forum'
          }
    },
    {
        path: '/create-thread/:subjectName',
        component: ForumThreadCreator,
        meta: {
            title: 'Calisthenics Encyclopedia - Create Thread'
          }
    },
    {
        path: '/create-article',
        component: RichTextEditorArticle,
        meta: {
            title: 'Calisthenics Encyclopedia - Create Artice'
          }
    },
    {
        path: '/Login',
        component: Login,
        meta: {
            title: 'Calisthenics Encyclopedia - Login'
          }
    },
    {
        path: '/Register',
        component: Register,
        meta: {
            title: 'Calisthenics Encyclopedia - Register'
          }
    },
    {
        path: '/SuccessSignOut',
        component: SuccessSignOut,
        meta: {
            title: 'Calisthenics Encyclopedia - Success Sign Out'
          }
    },
    {
        path: '/WorkoutCreator',
        component: WorkoutCreator,
        meta: {
            title: 'Calisthenics Encyclopedia - Workout Creator'
          }
    },
    {
        path: '/WorkoutCreator/:username/:workoutName',
        component: WorkoutCreator,
        meta: {
            title: 'Calisthenics Encyclopedia - Workout Creator'
          }
    },
    {
        path: '/WorkoutExecution',
        component: WorkoutExecution,
        meta: {
            title: 'Calisthenics Encyclopedia - Workout Execution'
          }
    },
    {
        path: '/WorkoutExecution/:username/:workoutName',
        component: WorkoutExecution,
        meta: {
            title: 'Calisthenics Encyclopedia - Workout Execution'
          }
    },
    {
        path: '/Calendar',
        component: Calendar,
        meta: {
            title: 'Calisthenics Encyclopedia - Calendar'
          }

    },
    {
        path: '/BackLog',
        component: BackLog,
        meta: {
            title: 'Calisthenics Encyclopedia - Back Log'
          }
    },
    {
        path: '/WorkoutViewer/:username/:workoutName',
        component: WorkoutViewer,
        meta: {
            title: 'Calisthenics Encyclopedia - Workout Viewer'
          }
    },
    {
        path: '*',
        component: NotFound,
        meta: {
            title: 'Calisthenics Encyclopedia - 404'
          }
    }
];