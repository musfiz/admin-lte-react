import { useState, useEffect } from "react"
import { Routes, Route } from 'react-router-dom'
import PublicRoute from './routes/PublicRoute'
import PrivateRoute from "./routes/PrivateRoute"
import Login from "./views/layouts/Login"
import Main from "./views/layouts/Main"
import Dashboard from "./views/pages/Dashboard"
import Profile from "./views/pages/Profile"

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
