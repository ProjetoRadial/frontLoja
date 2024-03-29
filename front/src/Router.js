import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home/HomePage.js';
import { LoginPage } from "./pages/Login/LoginPage.js"
import { CadastroFuncionarioPage } from "./pages/Cadastro/CadastroFuncionario/CadastroFuncionarioPage.js"
import { CadastroProdutoPage } from './pages/Cadastro/CadastroProduto/CadastroProdutoPage.js';
import { CadastroAgendamentoPage } from './pages/Cadastro/CadastroAgendamento/CadastroAgendamento.js';
import { Configuracoes } from './pages/Configuracoes/ConfiguracoesPage.js'
import Dashboard from './pages/Dashboard/Dashboard.js';
import CaixaPage from './pages/Caixa/CaixaPage.js';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/configuracoes' element={<Configuracoes />} />
          <Route path='/cadastro/produto' element={<CadastroProdutoPage />} />
          <Route path='/cadastro/agendamento' element={<CadastroAgendamentoPage />} />
          <Route path='/cadastro/funcionario' element={<CadastroFuncionarioPage />} />
          <Route path='/' element={<LoginPage/>} />
          <Route path='/home' element={<HomePage/>} />
          <Route path='/cadastro/produto' element={<CadastroProdutoPage/>} />
          <Route path='/cadastro/agendamento' element={<CadastroAgendamentoPage/>} />
          <Route path='/cadastro/funcionario' element={<CadastroFuncionarioPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/caixa' element={<CaixaPage/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
