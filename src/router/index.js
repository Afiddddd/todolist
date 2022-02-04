import Home from  '../pages/Home.vue'
import About from  '../pages/About.vue'
import Login from '../pages/Login.vue'
import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
    { path: '/', component: Home},
    { path: '/about', component: About},
    { path: '/login', component: Login}
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router