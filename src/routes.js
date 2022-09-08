import { createRouter, createWebHistory } from "vue-router";
const routerHistory = createWebHistory()

import HomePage from '@/pages/home'
import AboutPage from '@/pages/about'
import NotFoundPage from '@/pages/notFound'
import Item from '@/pages/_itemAlias'

const routers = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/about',
            component: AboutPage
        },
        {
            path: '/404',
            name: '404',
            component: NotFoundPage
        },
        {
            path: '/:itemAlias',
            name: 'itemAlias',
            component: Item
        },
    ],
});

export default routers