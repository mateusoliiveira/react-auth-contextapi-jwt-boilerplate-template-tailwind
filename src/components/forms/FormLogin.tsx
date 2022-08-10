import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider/useAuth';
import { AlertContent } from '../../interfaces/AlertContent';
import { AuthCredentials } from '../../interfaces/Credentials';
import { alertClear } from '../../_utils';
import AppButton from '../fragments/inert/AppButton';
import AppForm from '../fragments/inert/AppForm';
import AppInput from '../fragments/inert/AppInput';
import Alert from '../fragments/mutable/Alert';
import {
  buttonLogin,
  passwordInputLogin,
  emailInputLogin,
} from './FormLoginFragments';

const FormLogin = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState<AuthCredentials>({
    email: '',
    password: '',
  });

  const [alert, setAlert] = useState<AlertContent>({
    status: 0,
    message: '',
  });

  const submitLogin = async (): Promise<void> => {
    try {
      await auth.signIn(credentials);
      navigate('/');
    } catch ({ response: { status, data } }: any) {
      setAlert({ status, message: data.validation.body.message });
    } finally {
      alertClear(setAlert);
    }
  };

  return (
    <>
      <Alert {...alert} />
      <AppForm>
        <AppInput
          {...{
            ...emailInputLogin,
            onChange: (event: ChangeEvent<HTMLInputElement>) =>
              setCredentials({ ...credentials, email: event.target.value }),
          }}
        />
        <AppInput
          {...{
            ...passwordInputLogin,
            onChange: (event: ChangeEvent<HTMLInputElement>) =>
              setCredentials({ ...credentials, password: event.target.value }),
          }}
        />
        <AppButton {...{ ...buttonLogin, onClick: () => submitLogin() }} />
      </AppForm>
    </>
  );
};

export default FormLogin;
