import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        children: [
            {
                path: 'control',
                name: 'Control',
                component: () => import('../components/Control'),
            },
            {
                path: 'tv',
                name: 'TV',
                component: () => import('../components/TV'),
            },
            {
                path: 'settings',
                name: 'Settings',
                component: () => import('../components/Settings'),
            }
        ]
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
