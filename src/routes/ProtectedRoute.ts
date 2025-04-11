import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/auth";


const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    console.log('====================================');
    console.log(isAuthenticated);
    console.log('====================================');
    if (!isAuthenticated) navigate('/login');
  }, []);
  return (children);
}

export default ProtectedRoute;