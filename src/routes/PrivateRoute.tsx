import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  const isLoggedIn = useSelector((state: any) => state.auth.loggedUser?.token);
  return isLoggedIn ? <Outlet /> : <Navigate to={`/login`} />;
};

export default PrivateRoute;