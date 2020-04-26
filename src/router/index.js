import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '@/views/Home'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        children: [
            // {
            //     path: 'indexPage',
            //     name: 'indexPage',
            //     component: () => import('@/components/page/indexPage') // 索引页面
            // }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router
