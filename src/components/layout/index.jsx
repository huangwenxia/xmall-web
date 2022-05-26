import HeaderBar from './headerBar' // 自定义的侧边栏
import FooterBar from './footerBar' // 自定义的顶部头
import { Outlet } from 'react-router-dom'
import React from "react"; // 子路由出口，类似vue的router-view
import styles from './index.module.scss'

function PageLayout () {
    return (
        <div className="container">
            <div className={styles.app}>
                <div className={styles.top}>
                    <HeaderBar />
                </div>
                <div className={styles.body}>
                    <Outlet />
                </div>
                <div className={styles.bottom}>
                    <FooterBar />
                </div>
            </div>
        </div>
    )
}

export default PageLayout
