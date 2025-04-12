import { Cookies } from 'react-cookie';
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute = () => {
  const payload = new Cookies().get('payload');
  return payload && payload.token ? <Navigate to={`/`} replace /> : <Outlet />;
};

export default PublicRoute;