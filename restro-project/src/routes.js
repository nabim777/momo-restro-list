import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import {createRouter, createWebHistory} from 'vue-router'

const routes=[
    {
        name: 'HomePage',
        component: Home,
        path: '/'
    },
    {
        name: 'SignUpPage',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'LoginPage',
        component: Login,
        path: '/login'
    }
]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router 