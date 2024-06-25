import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'overlayscrollbars/styles/overlayscrollbars.css';
import "@fontsource/source-sans-pro";
import { Provider } from 'react-redux'
import store from './store/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
