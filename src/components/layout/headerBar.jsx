import styles from "./index.module.scss";
import "./headerBar.scss"
import {NavBar, SearchBar,Button,Badge} from "antd-mobile";
import React, {useEffect, useState} from "react";
import {useLocation } from 'react-router-dom'

function HomeTitle(){
    return (<div>
        <SearchBar
            icon={<div className="iconfont icon-sousuo"></div>}
            placeholder='请输入地址 如：大钟寺'
            style={{
                '--border-radius': '100px',
                '--height': '32px',
                '--padding-left': '48px',
            }}
        />
    </div>)
}
function headerBar() {
    const location = useLocation()
    const { pathname } = location

    const navBars = [
        {
            key: '/home',
            title: <HomeTitle/>,
            left:()=>(<i className="iconfont icon-erweima"></i>),
            right:()=>(<i className="iconfont icon-xiaoxi"></i>),
        },
        {
            key: '/category',
            title: ()=>(<div className="header-bar-title category">分类</div>),
        },
        {
            key: '/cart',
            left:'',
            title:()=>(<div className="header-bar-title cart">购物车</div>),
            right:'',
        },
        {
            key: '/user',
            title: ()=>(<div className="header-bar-title user">我的</div>),
            left:'',
            right:()=>(<div>
                <Button color='primary' fill='none'
                        style={{
                            '--text-color':'#000000',
                        }}>
                    <Badge content='99+' />
                    <Badge content={Badge.dot}>
                        <i className="iconfont icon-xiaoxi"></i>
                    </Badge>
                </Button>
                <Button color='primary' fill='none'
                        style={{
                            '--text-color':'#000000',
                        }}>
                    <i className="iconfont icon-shezhi"></i>
                </Button>
            </div>),
        },
    ]
    const [NBOpacity,setNBOpacity] = useState(0)

    const handleScroll = (e)=>{
        let scrollTop = document.documentElement.scrollTop
        let opacity = scrollTop/44>=44?1:parseFloat(scrollTop/44)
        setNBOpacity(()=>opacity)
    }

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll);
        return ()=>window.removeEventListener('scroll',handleScroll)
    })
    return (
        <div className={styles.top}>
           <div className="header-bar-wrapper">
               { navBars.filter(item=>pathname==item.key).map(item => (
                   <NavBar backArrow={false}
                           style={{
                               backgroundColor:`rgba(255, 255, 255, ${NBOpacity})`
                           }}
                           left={typeof item.left=='function'?item?.left():item.left}
                           right={typeof item.right=='function'?item?.right():item.right}>
                       {typeof item.title=='function'?item?.title():item.title}
                   </NavBar>
               ))[0]}
           </div>
        </div>
    )
}
export default headerBar
