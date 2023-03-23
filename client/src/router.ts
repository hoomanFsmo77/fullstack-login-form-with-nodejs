import {createRouter,createWebHashHistory,RouteRecordRaw} from "vue-router";


const routes:RouteRecordRaw[]=[
    {
        path:'/',
        component:()=>import('./pages/Login.vue'),
        name:'login'
    },
    {
        path:'/register',
        component:()=>import('./pages/Register.vue'),
        name:'register'
    },{
        path:'/welcome',
        component:()=>import('./pages/Welcome.vue'),
        name:'welcome'
    },
]


const router=createRouter({
    routes,
    history:createWebHashHistory()
})


export default router