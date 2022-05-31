import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'amfe-flexible' //移动端自适应
import '@/assets/css/common.scss'
import {HashRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <HashRouter>
          <App />
      </HashRouter>
  </React.StrictMode>
)
