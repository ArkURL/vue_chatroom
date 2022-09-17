import VueRouter from 'vue-router'
import Vue from 'vue'

import Login from '@/components/Login'
import ChatInterface from '@/components/ChatInterface'

Vue.use(VueRouter)

export default new VueRouter({
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