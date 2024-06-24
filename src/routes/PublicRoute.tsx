import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute = () => {
  const isLoggedIn = true;
  return isLoggedIn ? <Navigate to={`/`} /> : <Outlet />;
};

export default PublicRoute;
