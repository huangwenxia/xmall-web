import PageLayout from '@/components/Layout/index'

const routes = [
    {
        path: '/',
        redirect: '/index',
    },
    {
        path: '/index',
        element: <PageLayout />,
        children:[
            {
                meta: {
                    title: '首页',
                    needLogin: true,
                    roleId: 10000,
                },
                component: () => import(/* webpackChunkName: "index" */ '@/views/home/index'),
            },
        ]
    },
]

export default routes
