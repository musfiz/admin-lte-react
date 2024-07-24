import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  const isLoggedIn = useSelector((state) => state.auth.loggedUser.token);
  console.log('=============Private Route========');
  console.log(isLoggedIn);
  console.log('====================================');
  return isLoggedIn ? <Outlet /> : <Navigate to={`/login`} />;
};

export default PrivateRoute;