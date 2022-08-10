import AppLink from '../inert/AppLink';
import { ReactElement, useEffect, useReducer } from 'react';
import { useAuth } from '../../../context/AuthProvider/useAuth';
import { useNavigate } from 'react-router-dom';

const NavButtons = (): ReactElement => {
  const auth = useAuth();
  const navigate = useNavigate();
  const initialValue = !!auth.token;
  const logout = () => {
    auth.signOut();
    navigate('/');
  };

  function reducerSession(state: string, action: { type: number }) {
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
    return buttons[action.type] ?? state;
  }

  const [state, dispatch] = useReducer(reducerSession, initialValue);

  useEffect(() => {
    dispatch({ type: !!auth.token ? 1 : 0 });
  }, [auth.token]);

  return state;
};

export default NavButtons;
