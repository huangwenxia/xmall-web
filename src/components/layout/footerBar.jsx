import React, { FC } from 'react'
import {useNavigate,useLocation } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import {AppOutline, MessageOutline, UnorderedListOutline, UserOutline,} from 'antd-mobile-icons'

function footerBar() {
    const navigate = useNavigate()
    const location = useLocation()
    const { pathname } = location

    const setRouteActive = (value) => {
        navigate(value)
    }

    const tabs = [
        {
            key: '/home',
            title: '首页',
            icon: <AppOutline />,
        },
        {
            key: '/todo',
            title: '我的待办',
            icon: <UnorderedListOutline />,
        },
        {
            key: '/message',
            title: '我的消息',
            icon: <MessageOutline />,
        },
        {
            key: '/me',
            title: '个人中心',
            icon: <UserOutline />,
        },
    ]

    return (
        <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
            {tabs.map(item => (
                <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
            ))}
        </TabBar>
    )
}
export default footerBar
