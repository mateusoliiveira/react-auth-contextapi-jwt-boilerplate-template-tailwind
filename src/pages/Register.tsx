import AppContainer from '../components/fragments/inert/AppContainer';
import AppLayout from '../components/fragments/inert/AppLayout';
import RegisterSection from '../components/sections/RegisterSection';

const Register = () => {
  return (
    <AppContainer>
      <AppLayout
        title={'Você está a um passo 😉'}
        description={'crie já sua conta de colaborador'}
      >
        <RegisterSection />
      </AppLayout>
    </AppContainer>
  );
};

export default Register;
