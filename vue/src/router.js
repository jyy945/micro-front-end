import Home from './components/Home.vue'
import Desc from './components/Desc.vue'
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/desc',
        name: 'desc',
        component: Desc,
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ './components/About.vue'),
    },
];

export default routes;