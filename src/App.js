import logo from './logo.svg';
import './App.css';
import CadastroProduto from './Componentes/CadastroProduto';
import ListaProdutos from './Componentes/ListaProduto';
import axios from 'axios';
import { useEffect, useState } from 'react';




function App() {
  const [produtos, setProdutos] = useState([]);
  useEffect(()=>{
    carregaProdutos();
  },[]);

  function carregaProdutos(){
    axios.get('https://app-api-tapwm.onrender.com/api/produtos')
    .then(res=>{
      setProdutos(res.data);
      console.log(produtos);
  });
  }
  return (
    <div>
      <h1>Lista Produtos</h1>
      <ListaProdutos produtos={produtos} carregaProdutos={carregaProdutos}/>
      <CadastroProduto carregaProdutos={carregaProdutos}/>
    </div>
  );
}

export default App;
