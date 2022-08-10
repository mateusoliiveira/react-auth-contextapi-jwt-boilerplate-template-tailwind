import { useEffect } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { getGrant } from '../context/AuthProvider/utils';

export const CheckAuth = ({ children }: { children: JSX.Element }) => {
  const navigate: NavigateFunction = useNavigate();
  useEffect(() => {
    const validateAttempt = async () => {
      try {
        return await getGrant();
      } catch (error) {
        return navigate('/desautorizado');
      }
    };
    validateAttempt();
  }, []);

  return children;
};
