import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/Home')
    }, {
        path: '/detail/:funname',
        name: 'Detail',
        component: () => import('../components/Detail')
    },




    {
        path: '*',
        redirect: '/'
    }
];


const router = new VueRouter({
    // mode: 'history',
    routes
})

export default router
