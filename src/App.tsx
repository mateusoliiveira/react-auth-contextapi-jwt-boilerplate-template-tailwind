import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import { CheckAuth } from './context/CheckAuth';
import Index from './pages/Index';
import Login from './pages/Login';
import Panel from './pages/Panel';
import Register from './pages/Register';
import Denied from './pages/Denied';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="desautorizado" element={<Denied />} />
          <Route path="/" element={<Index />} />
          <Route path="entrar" element={<Login />} />
          <Route path="registrar" element={<Register />} />
          <Route path="painel" element={<CheckAuth children={<Panel />} />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
