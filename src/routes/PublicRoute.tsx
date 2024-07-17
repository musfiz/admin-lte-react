import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute = () => {
  const isLoggedIn = false;
  return isLoggedIn ? <Navigate to={`/`} /> : <Outlet />;
};

export default PublicRoute;
