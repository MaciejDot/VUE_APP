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
            title: 'Calisthenics Encyclopedia - Workout Dashboard',
            onlyAuthenticated: true
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
        component: MainPageArticles,
        props: (route) => ({ page: route.params.page })
    },
    {
        path: '/article/:id',
        component: ArticleView,
        meta: {
            title: 'Calisthenics Encyclopedia - Article'
          },
        props: (route) => ({ id: route.params.id })
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
          },
          props: (route) => ({ page: route.query.page, subjectName: route.params.subjectName })
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
          },
          props: (route) => ({ threadId: route.params.threadId, subjectName: route.params.subjectName ,page : route.query.page })
    },
    {
        path: '/create-thread/:subjectName',
        component: ForumThreadCreator,
        meta: {
            title: 'Calisthenics Encyclopedia - Create Thread',
            onlyAuthenticated: true
          },
        props: (route) => ({ subjectName: route.params.subjectName })
    
    },
    {
        path: '/create-article',
        component: RichTextEditorArticle,
        meta: {
            title: 'Calisthenics Encyclopedia - Create Artice',
            onlyAuthenticated: true,
            roles: ['admin']
          }
    },
    {
        path: '/Login',
        component: Login,
        meta: {
            title: 'Calisthenics Encyclopedia - Login',
            onlyAnonymous: true,
            reload: true
          }
    },
    {
        path: '/Register',
        component: Register,
        meta: {
            title: 'Calisthenics Encyclopedia - Register',
            onlyAnonymous: true,
            reload: true
          }
    },
    {
        path: '/SuccessSignOut',
        component: SuccessSignOut,
        meta: {
            title: 'Calisthenics Encyclopedia - Success Sign Out',
            onlyAnonymous: true
          }
    },
    {
        path: '/WorkoutCreator',
        component: WorkoutCreator,
        meta: {
            title: 'Calisthenics Encyclopedia - Workout Creator',
            onlyAuthenticated: true
          },
          props: () => ({username: undefined, workoutName: undefined})
    },
    {
        path: '/WorkoutCreator/:username/:workoutName',
        component: WorkoutCreator,
        meta: {
            title: 'Calisthenics Encyclopedia - Workout Creator',
            onlyAuthenticated: true,
          },
        props: (route) => ({username: route.params.username, workoutName: route.params.workoutName})
    },
    {
        path: '/WorkoutExecution',
        component: WorkoutExecution,
        meta: {
            title: 'Calisthenics Encyclopedia - Workout Execution'
          },
        props: () => ({username: undefined, workoutName: undefined})
    },
    {
        path: '/WorkoutExecution/:username/:workoutName',
        component: WorkoutExecution,
        meta: {
            title: 'Calisthenics Encyclopedia - Workout Execution'
          },
          props: (route) => ({username: route.params.username, workoutName: route.params.workoutName})
    },
    {
        path: '/Calendar',
        component: Calendar,
        meta: {
            title: 'Calisthenics Encyclopedia - Calendar',
            onlyAuthenticated: true,
          }

    },
    {
        path: '/WorkoutViewer/:username/:workoutName',
        component: WorkoutViewer,
        meta: {
            title: 'Calisthenics Encyclopedia - Workout Viewer'
          },
          props: (route) => ({username: route.params.username, workoutName: route.params.workoutName})
    },
    {
        path: '*',
        component: NotFound,
        meta: {
            title: 'Calisthenics Encyclopedia - 404'
          }
    }
];