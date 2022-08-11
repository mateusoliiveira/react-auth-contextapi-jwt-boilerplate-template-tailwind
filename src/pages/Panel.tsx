import AppContainer from '../components/fragments/inert/AppContainer';
import AppLayout from '../components/fragments/inert/AppLayout';
import PanelSection from '../components/sections/PanelSection';

const Panel = () => {
  return (
    <AppContainer>
      <AppLayout
        title={'Painel de Controle'}
        description={'aqui estão suas ações principais'}
      >
        <PanelSection />
      </AppLayout>
    </AppContainer>
  );
};

export default Panel;
