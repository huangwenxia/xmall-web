import PageLayout from '@/components/layout/index'
import React from "react";

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
                component: () => import('@/pages/home'),
            },
            {
                meta: {
                    title: '我的消息',
                    needLogin: true,
                    roleId: 10000,
                },
                component: () => import('@/pages/message'),
            },
            {
                meta: {
                    title: '个人中心',
                    needLogin: true,
                    roleId: 10000,
                },
                component: () => import('@/pages/personalCenter'),
            },
            {
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
