import AppContainer from '../components/fragments/inert/AppContainer';
import AppLayout from '../components/fragments/inert/AppLayout';

const Panel = () => {
  return (
    <AppContainer>
      <AppLayout
        title={'Painel de Controle'}
        description={'aqui estão suas ações principais'}
      >
        <div></div>
      </AppLayout>
    </AppContainer>
  );
};

export default Panel;
