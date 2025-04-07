import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.scss'
import 'overlayscrollbars/styles/overlayscrollbars.css';
import "@fontsource/source-sans-pro";
import { Provider } from 'react-redux'
import store from './store/store.ts'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
