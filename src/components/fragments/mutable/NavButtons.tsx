import AppLink from '../inert/AppLink';
import { ReactElement, useEffect, useReducer } from 'react';
import { useAuth } from '../../../context/AuthProvider/useAuth';
import { useNavigate } from 'react-router-dom';

const NavButtons = (): ReactElement => {
  const auth = useAuth();
  const navigate = useNavigate();
  const logout = () => {
    auth.signOut();
    navigate('/entrar');
  };

  const handleSessionButtons = (): ReactElement => {
    let buttons: { [x: number]: JSX.Element } = {
      0: (
        <>
          <AppLink to={'/entrar'}>Entrar</AppLink>
          <AppLink to={'/registrar'}>Cadastrar</AppLink>
        </>
      ),
      1: (
        <>
          <AppLink to={'/painel'}>Painel</AppLink>
          <p className="cursor-pointer" onClick={() => logout()}>
            Sair
          </p>
        </>
      ),
    };
    return buttons[auth.token ? 1 : 0];
  };
  return handleSessionButtons();
};

export default NavButtons;
