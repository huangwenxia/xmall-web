import React, { FC } from 'react'
import { TabBar } from 'antd-mobile'
import {Route, HashRouter as Router,} from 'react-router-dom'
import {AppOutline, MessageOutline, UnorderedListOutline, UserOutline,} from 'antd-mobile-icons'
import styles from './index.css'
const Bottom = () => {
    const history = useHistory()
    const location = useLocation()
    const { pathname } = location

    const setRouteActive = (value) => {
        history.push(value)
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

function footerBar() {
    return (
        <Router initialEntries={['/home']}>
            <div className={styles.app}>
                <div className={styles.body}>
                    <Switch>
                        <Route exact path='/home'>
                            <Home />
                        </Route>
                        <Route exact path='/todo'>
                            <Todo />
                        </Route>
                        <Route exact path='/message'>
                            <Message />
                        </Route>
                        <Route exact path='/me'>
                            <PersonalCenter />
                        </Route>
                    </Switch>
                </div>
                <div className={styles.bottom}>
                    <Bottom />
                </div>
            </div>
        </Router>
    )
}
export default footerBar()
