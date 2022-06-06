import { defineConfig,loadEnv } from 'vite'
const path = require('path');
import postCssPxToRem from "postcss-pxtorem"
import react from '@vitejs/plugin-react'
import vitePluginImport from 'vite-plugin-babel-import'

// https://vitejs.dev/config/
export default defineConfig(({mode})=>({
    plugins: [
        react(),
        // vitePluginImport([
        //     {
        //         libraryName: 'antd-mobile',
        //         libraryDirectory: 'es',
        //         style(name) {
        //             return `antd-mobile/lib/${name}/style/index.module.scss`
        //         },
        //     },
        // ]),
    ],
    resolve: {
        // 配置路径别名
        alias: {
            '@': path.resolve(__dirname, './src/'),
        },
    },
    css:{
        modules: { // css模块化 文件以.module.[css|less|scss]结尾
            generateScopedName: '[name]__[local]___[hash:base64:5]',
            hashPrefix: 'prefix',
        },
        preprocessorOptions: {
            scss: {
                // 支持内联 JavaScript
                javascriptEnabled: true,
                additionalData: '@import "@/assets/css/variables.scss";'
            },
        },
        postcss:{
            plugins:[
                require('autoprefixer')({
                    overrideBrowserslist: [
                        'Android 4.1',
                        'iOS 7.1',
                        'Chrome > 31',
                        'ff > 31',
                        'ie >= 8',
                        '> 1%',
                    ],
                }),
                postCssPxToRem({
                    rootValue: 75,//(设计稿/10)1rem的大小
                    propList:['*'],//需要转换的属性，这里选择全部都进行转换
                }),
                require('postcss-flexbugs-fixes')
            ]
        }
    },
    server:{
        open:true,
        cors: true, // 跨域
        proxy: {
            "/api": {
                target: loadEnv(mode, process.cwd()).VITE_SERVER_URL, // "http://newbill-web.k8s:8080", // 目标地址
                changeOrigin: true, // 修改源
                secure: false, // ssl
            },
        },
    },
}))
