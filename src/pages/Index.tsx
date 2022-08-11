import AppContainer from '../components/fragments/inert/AppContainer';
import AppLayout from '../components/fragments/inert/AppLayout';
import IndexSection from '../components/sections/IndexSection';

const Index = () => {
  return (
    <AppContainer>
      <AppLayout
        title={'Olá! Bem vindo!'}
        description={'sistema de autenticação react'}
      >
        <IndexSection />
      </AppLayout>
    </AppContainer>
  );
};

export default Index;
