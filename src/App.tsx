import { Component, ReactNode, useContext } from 'react';
import { Routes, Route, redirect } from 'react-router-dom';
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

import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={
          <ProtectedRoute><Index /></ProtectedRoute>
        }>
          <Route path="/" element={<Dashboard />} />
          <Route path="/blank" element={<Blank />} />
          <Route path="/card" element={<Card />} />
          <Route path="/info-box" element={<InfoBox />} />
          <Route path="/table" element={<Table />} />
          <Route path="/element" element={<Element />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product" element={<Product />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
