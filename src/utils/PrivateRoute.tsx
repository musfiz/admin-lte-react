import { Cookies } from 'react-cookie';
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  const payload = new Cookies().get('payload');
  console.log(payload);
  return payload && payload.token ? <Outlet /> : <Navigate to={`/login`} replace />;
};

export default PrivateRoute;