import styles from "./index.module.css";
import {NavBar} from "antd-mobile";
import React from "react";

function headerBar() {
    return (
        <div className={styles.top}>
            <NavBar>配合路由使用</NavBar>
        </div>
    )
}
export default headerBar
