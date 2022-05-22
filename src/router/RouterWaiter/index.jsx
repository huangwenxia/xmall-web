/*
 * @Description: 主组件
 * 主组件 RouterWaiter 的配置属性 API：
routes，[Array] 路由配置列表（必填）
onRouteBefore，[Function] 路由拦截函数（可选）
loading，[Element] 懒加载路由切换时的 loading 效果组件（可选）
路由配置列表 routes 的配置项 API：

redirect，[String] 要重定向的路由路径
component，[Function] import()懒加载方式引入的组件
meta，[Object] 自定义的数据
（优先级：redirect > component > element）
 */
import { useRoutes } from 'react-router-dom'
import Fn from './core'
import { RouterWaiterPropsType } from '@/types'

function RouterWaiter ({routes, onRouteBefore, loading,}) {
    const fn = new Fn({
        routes,
        onRouteBefore,
        loading,
    })
    const reactRoutes = fn.transformRoutes()
    const elements = useRoutes(reactRoutes)

    return elements
}

export default RouterWaiter
