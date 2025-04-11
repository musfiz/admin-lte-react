import { useState, useEffect } from 'react';
import { Cookies } from 'react-cookie';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = new Cookies().get('payload')?.token;
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return { isAuthenticated, setIsAuthenticated, loading, setLoading };
};

export default useAuth;