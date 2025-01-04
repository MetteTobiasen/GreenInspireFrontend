import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Login
        },
        {
            path: '/hjem',
            component: () => import('../views/Hjem.vue')
        },
        {
            path: '/udforsk',
            component: () => import('../views/Udforsk.vue')
        },
        {
            path: '/søg',
            component: () => import('../views/Søg.vue')
        },
        {
            path: '/profil',
            component: () => import('../views/Profil.vue')
        }
        
    ]
})

export default router
