import { ReactElement, useReducer } from 'react';
import { useAuth } from '../../../context/AuthProvider/useAuth';
import { AppNavLinksAuth, AppNavLinksNoAuth } from '../inert/AppNavLinks';

const NavButtons = (): ReactElement => {
  const auth = useAuth();

  const handleSessionButtons = (): ReactElement => {
    let buttons: { [x: number]: JSX.Element } = {
      0: <AppNavLinksNoAuth />,
      1: <AppNavLinksAuth />,
    };
    return buttons[auth.token ? 1 : 0];
  };
  return handleSessionButtons();
};

export default NavButtons;
