import React, { FC } from 'react'
import {useNavigate,useLocation } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import "./footerBar.scss"
// import {AppOutline, MessageOutline, UnorderedListOutline, UserOutline,} from 'antd-mobile-icons'
import {
    IconHome,
    IconHomeSelected,
    IconCart,
    IconCartSelected,
    IconCategory,
    IconCategorySelected,
    IconUser,
    IconUserSelected,
    IconLife,
    IconLifeSelected,
} from '@/assets/css/icons'
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
            icon: <IconHome/>,
            iconSelected: <IconHomeSelected/>,
            // icon: <AppOutline />,
        },
        {
            key: '/category',
            title: '分类',
            icon: <IconCategory />,
            iconSelected: <IconCategorySelected/>,
            // icon: <UnorderedListOutline />,
        },
        {
            key: '/life',
            title: '生活',
            icon: <IconLife />,
            iconSelected: <IconLifeSelected/>,
            // icon: <MessageOutline />,
        },
        {
            key: '/cart',
            title: '购物车',
            icon: <IconCart />,
            iconSelected: <IconCartSelected/>,
            // icon: <UserOutline />,
        },
        {
            key: '/user',
            title: '我的',
            icon: <IconUser />,
            iconSelected: <IconUserSelected/>,
            // icon: <UserOutline />,
        },
    ]

    return (
        <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
            {tabs.map(item => (
                <TabBar.Item key={item.key}
                             icon={item.key==pathname?item.iconSelected:item.icon}
                             title={item.title} />
            ))}
        </TabBar>
    )
}
export default footerBar
