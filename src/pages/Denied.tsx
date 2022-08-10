import AppContainer from '../components/fragments/inert/AppContainer';
import AppLayout from '../components/fragments/inert/AppLayout';

const Denied = () => {
  return (
    <AppContainer>
      <AppLayout
        title={'Não autorizado'}
        description={'você precisa estar autenticado para essa operação'}
      >
        <div></div>
      </AppLayout>
    </AppContainer>
  );
};

export default Denied;
