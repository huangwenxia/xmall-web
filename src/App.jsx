import { ConfigProvider } from 'antd-mobile';
import React from 'react'
import RouterConfig from './router/index'
import zhCN from 'antd-mobile/es/locales/zh-CN'
function App() {
  return (
      <ConfigProvider locale={zhCN}>
          <RouterConfig />
      </ConfigProvider>
  )
}

export default App
