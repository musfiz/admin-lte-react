import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.scss'
import 'overlayscrollbars/styles/overlayscrollbars.css';
import "@fontsource/source-sans-pro";
import { Provider } from 'react-redux'
import store from './store/store.ts'
import 'react-toastify/dist/ReactToastify.css';

import { CookiesProvider } from 'react-cookie'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </Provider>
)
