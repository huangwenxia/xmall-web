import PageLayout from '@/components/layout/index'
import Login from '@/pages/login'
const routes = [
    {
        path: '/login',
        element: <Login/> ,
        meta: {
            title: '登录页面',
        }
    },
    {
        path: '*',
        redirect: '/home',
    },
    {
        path: '/',
        element: <PageLayout />,
        children:[
            {
                path: '/home',
                meta: {
                    title: '首页',
                    needLogin: true,
                    roleId: 10000,
                },
                component: () => import('@/pages/home'),
            },
            {
                path: '/message',
                meta: {
                    title: '我的消息',
                    needLogin: true,
                    roleId: 10000,
                },
                component: () => import('@/pages/message'),
            },
            {
                path: '/personalCenter',
                meta: {
                    title: '个人中心',
                    needLogin: true,
                    roleId: 10000,
                },
                component: () => import('@/pages/personalCenter'),
            },
            {
                path: '/todo',
                meta: {
                    title: '待办',
                    needLogin: true,
                    roleId: 10000,
                },
                component: () => import('@/pages/todo'),
            },
        ]
    },
]

export default routes
