/**
 * @Description: 页面路由容器组件
 * @Author: Neo
 * @Date: 2021-12-30
 * @LastEditTime: 2022-02-18
 * @LastEditors: Neo
 */
import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import utils from '@/utils'

let temp = null

function Guard ({element, meta, onRouteBefore}) {
    meta = meta || {}

    const location = useLocation()
    const { pathname } = location

    const navigate = useNavigate()

    if (onRouteBefore) {
        if (temp === element) {
            return element
        }
        const pathRes = onRouteBefore({ pathname, meta })
        if (utils.getDataType(pathRes) === 'Promise') {
            pathRes.then((res) => {
                if (res && res !== pathname) {
                    navigate(res, { replace: true })
                }
            })
        } else {
            if (pathRes && pathRes !== pathname) {
                element = <Navigate to={pathRes} replace={true} />
            }
        }
    }

    temp = element
    return element
}

export default Guard
