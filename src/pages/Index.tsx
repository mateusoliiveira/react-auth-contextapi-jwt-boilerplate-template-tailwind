import AppContainer from '../components/fragments/inert/AppContainer';
import AppLayout from '../components/fragments/inert/AppLayout';

const Index = () => {
  return (
    <AppContainer>
      <AppLayout
        title={'Olá! Bem vindo ao nosso ERP'}
        description={'realize suas vendas, cheque estoques e muito mais'}
      >
        <div></div>
      </AppLayout>
    </AppContainer>
  );
};

export default Index;
