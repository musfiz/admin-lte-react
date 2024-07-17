import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  const isLoggedIn = false;
  return isLoggedIn ? <Outlet /> : <Navigate to={`/login`} />;
};

export default PrivateRoute;