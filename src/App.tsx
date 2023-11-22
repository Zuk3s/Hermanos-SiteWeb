import { Routes, Route } from 'react-router-dom';
import FormularioProdutos from './paginas/Administracao/Produtos/FormularioProdutos';
import NavBarAdmin from './paginas/Administracao/NavBarAdmin';
import VitrineProdutos from './paginas/VitrineProdutos';
import AdministracaoProdutos from './paginas/Administracao/Produtos/AdministracaoProdutos';
import AdministracaoUsuarios from './paginas/Administracao/Usuario/AdministraçãoUsuario';
import FormularioUsuario from './paginas/Administracao/Usuario/FormularioUsuario';


function App() {

  return (
    <Routes>
      <Route path="/" element={<VitrineProdutos />} />

      <Route path='/admin' element={<NavBarAdmin />}>
        <Route path='produtos' element={<AdministracaoProdutos />} />
        <Route path='produtos/novo' element={<FormularioProdutos />} />
        <Route path='produtos/:id' element={<FormularioProdutos />} />
        <Route path='usuarios' element={<AdministracaoUsuarios />} />
        <Route path='usuarios/novo' element={<FormularioUsuario />} />
      </Route>
    </Routes>
  );
}

export default App;
