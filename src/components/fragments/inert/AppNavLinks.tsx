import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthProvider/useAuth';
import AppLink from './AppLink';

export const AppNavLinksNoAuth = () => {
  return (
    <>
      <AppLink to={'/entrar'}>Entrar</AppLink>
      <AppLink to={'/registrar'}>Cadastrar</AppLink>
    </>
  );
};

export const AppNavLinksAuth = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const logout = () => {
    auth.signOut();
    navigate('/entrar');
  };
  return (
    <>
      <AppLink to={'/painel'}>Painel</AppLink>
      <p className="cursor-pointer" onClick={() => logout()}>
        Sair
      </p>
    </>
  );
};
