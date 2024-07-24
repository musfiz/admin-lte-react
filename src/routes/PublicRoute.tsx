import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute = () => {
  const isLoggedIn = useSelector((state) => state.auth.loggedUser.token);
  console.log('=============Public Route============');
  console.log(isLoggedIn);
  console.log('====================================');
  return isLoggedIn ? <Navigate to={`/`} /> : <Outlet />;
};

export default PublicRoute;
