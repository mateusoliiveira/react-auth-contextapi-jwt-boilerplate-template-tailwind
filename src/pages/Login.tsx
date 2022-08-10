import AppContainer from '../components/fragments/inert/AppContainer';
import AppLayout from '../components/fragments/inert/AppLayout';
import LoginSection from '../components/sections/LoginSection';

const Login = () => {
  return (
    <AppContainer>
      <AppLayout
        title={'Seja bem vindo de volta 😉'}
        description={'você está autenticando no seu painel'}
      >
        <LoginSection />
      </AppLayout>
    </AppContainer>
  );
};

export default Login;
