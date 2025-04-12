import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./views/layouts/Login"
import Index from "./views/layouts/Index"
import Dashboard from "./views/pages/Dashboard"
import Profile from "./views/pages/Profile"
import Blank from "./views/pages/Blank"
import Card from "./views/pages/Card"
import InfoBox from "./views/pages/InfoBox"
import Table from "./views/pages/Table"
import Element from "./views/pages/Element"
import Product from "./views/pages/Product";
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';

function App() {
  return (
    <>
      <Router future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<Index />}>
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Dashboard />} />
            </Route>
            <Route path="/blank" element={<Blank />} />
            <Route path="/card" element={<Card />} />
            <Route path="/info-box" element={<InfoBox />} />
            <Route path="/table" element={<Table />} />
            <Route path="/element" element={<Element />} />
            <Route path="/profile" element={<Profile />} />
            <Route element={<PrivateRoute />}>
              <Route path="/product" element={<Product />} />
            </Route>
          </Route>

        </Routes >
      </Router>
    </>
  )
}

export default App
