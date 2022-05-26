import { defineConfig } from 'vite'
const path = require('path');
import react from '@vitejs/plugin-react'
import vitePluginImport from 'vite-plugin-babel-import'

// https://vitejs.dev/config/
export default defineConfig({
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
            sass: {
                // 支持内联 JavaScript
                javascriptEnabled: true,
                additionalData: '@import "@/assets/scss/variables.scss";'
            },
        },
    },
    server:{
        open:true,
        // hmr:true,
    },
})
