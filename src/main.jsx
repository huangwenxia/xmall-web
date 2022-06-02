import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'amfe-flexible' //移动端自适应
import '@/assets/css/common.scss'
import {createHashHistory} from 'history'
import {history} from '@/router'
// import {HashRouter} from "react-router-dom";
import { unstable_HistoryRouter as HistoryRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/*<HashRouter>*/}
      {/*    <App />*/}
      {/*</HashRouter>*/}
      <HistoryRouter history={history} >
          <App />
      </HistoryRouter>
  </React.StrictMode>
)
