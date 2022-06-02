import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'amfe-flexible' //移动端自适应
import '@/assets/css/common.scss'
import history from '@/router/history'
import { unstable_HistoryRouter as HistoryRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <HistoryRouter history={history} >
          <App />
      </HistoryRouter>
  </React.StrictMode>
)
