import { ChangeEvent, ReactElement, useState } from 'react';
import { useAuth } from '../../context/AuthProvider/useAuth';
import { AlertContent } from '../../interfaces/AlertContent';
import { NewAuthCredentials } from '../../interfaces/Credentials';
import { APP_NEW_USER_MESSAGE } from '../../libs/constants';
import { alertClear } from '../../_utils';
import AppButton from '../fragments/inert/AppButton';
import AppForm from '../fragments/inert/AppForm';
import AppInput from '../fragments/inert/AppInput';
import Alert from '../fragments/mutable/Alert';
import {
  buttonRegister,
  emailInputRegister,
  nameInputRegister,
  passwordInputRegister,
} from './FormRegisterFragments';

const FormRegister = (): ReactElement => {
  const auth = useAuth();
  const [newCredentials, setNewCredentials] = useState<NewAuthCredentials>({
    email: '',
    name: '',
    password: '',
  });

  const [alert, setAlert] = useState<AlertContent>({
    status: 0,
    message: '',
  });

  const submitRegister = async (): Promise<void> => {
    try {
      const { status } = await auth.signUp(newCredentials);
      setAlert({ status, message: APP_NEW_USER_MESSAGE });
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
            ...emailInputRegister,
            onChange: (event: ChangeEvent<HTMLInputElement>) =>
              setNewCredentials({
                ...newCredentials,
                email: event.target.value,
              }),
          }}
        />
        <AppInput
          {...{
            ...nameInputRegister,
            onChange: (event: ChangeEvent<HTMLInputElement>) =>
              setNewCredentials({
                ...newCredentials,
                name: event.target.value,
              }),
          }}
        />
        <AppInput
          {...{
            ...passwordInputRegister,
            onChange: (event: ChangeEvent<HTMLInputElement>) =>
              setNewCredentials({
                ...newCredentials,
                password: event.target.value,
              }),
          }}
        />
        <AppButton
          {...{ ...buttonRegister, onClick: () => submitRegister() }}
        />
      </AppForm>
    </>
  );
};

export default FormRegister;
