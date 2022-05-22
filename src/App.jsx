import {HashRouter} from 'react-router-dom'
import { ConfigProvider } from 'antd-mobile';
import RouterConfig from '@/router/index'
import zhCN from 'antd-mobile/es/locales/zh-CN'
function App() {
  return (
      <ConfigProvider locale={zhCN}>
          <HashRouter>
              <RouterConfig />
          </HashRouter>
      </ConfigProvider>
  )
}

export default App
