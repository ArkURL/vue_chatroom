import VueRouter from 'vue-router'
import Vue from 'vue'

import Login from '@/components/Login'
import ChatInterface from '@/components/ChatInterface'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Login
        },
        {
            path: '/chat',
            component: ChatInterface
        }
    ]
})

router.beforeEach((to, from, next) => {
    next()
})

export default router