import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Exam from '@/components/Exam'
import Home from '@/components/Home'
import Circle from '@/components/Circle'
import User from '@/components/User'
import Ranking from '@/components/Ranking'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/exam',
            name: 'exam',
            component: Exam
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/circle',
            name: 'circle',
            component: Circle
        },
        {
            path: '/user',
            name: 'user',
            component: User
        },
        {
            path: '/ranking',
            name: 'ranking',
            component: Ranking
        }
    ]
})