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
                path: '/category',
                meta: {
                    title: '分类',
                    needLogin: true,
                    roleId: 10000,
                },
                component: () => import('@/pages/category'),
            },
            // {
            //     path: '/life',
            //     meta: {
            //         title: '生活',
            //         needLogin: true,
            //         roleId: 10000,
            //     },
            //     component: () => import('@/pages/life'),
            // },
            {
                path: '/cart',
                meta: {
                    title: '购物车',
                    needLogin: true,
                    roleId: 10000,
                },
                component: () => import('@/pages/cart'),
            },
            {
                path: '/user',
                meta: {
                    title: '我的',
                    needLogin: true,
                    roleId: 10000,
                },
                component: () => import('@/pages/user'),
            },
        ]
    },
]

export default routes
