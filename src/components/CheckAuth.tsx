import { useEffect } from 'react';
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider/useAuth';

export const CheckAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();
  const navigate: NavigateFunction = useNavigate();
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    if (!auth.token) return navigate('/desautorizado');
  }, []);

  return children;
};
