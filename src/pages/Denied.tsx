import AppContainer from '../components/fragments/inert/AppContainer';
import AppLayout from '../components/fragments/inert/AppLayout';
import DeniedSection from '../components/sections/DeniedSection';

const Denied = () => {
  return (
    <AppContainer>
      <AppLayout
        title={'Não autorizado'}
        description={'você precisa estar autenticado para essa operação'}
      >
        <DeniedSection />
      </AppLayout>
    </AppContainer>
  );
};

export default Denied;
