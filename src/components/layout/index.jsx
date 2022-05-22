import HeaderBar from './headerBar' // 自定义的侧边栏
import FooterBar from './footerBar' // 自定义的顶部头
import { Outlet } from 'react-router-dom' // 子路由出口，类似vue的router-view

function Index () {
    return (
        <div className="container">
            <HeaderBar />
            <div className="appMain">
                <Outlet />
            </div>
            <FooterBar />
        </div>
    )
}

export default Index
