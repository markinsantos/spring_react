
import {useState, useEffect} from 'react'
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';

function App() {

  // objeto produto

  const produto = {
    id : 0,
    nome:'',
    marca:''
  }

  //use state
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [produtos, setProdutos] = useState([]);
  const [objProduto, setObjProduto] = useState(produto)

  //use effect

  useEffect(()=>{
    fetch("http://localhost:8080/produtos")
    .then(retorno => retorno.json())
    .then(retorno_convertido =>setProdutos(retorno_convertido))
  },[])

  const dadosForm = (e) =>{
    setObjProduto({...objProduto, [e.target.name]:e.target.value});
    
  }

  //cadastrar produto
    const cadastrar = () =>{
      fetch("http://localhost:8080/cadastrar",{
        method:'post',
        body:JSON.stringify(objProduto),
        headers:{
          'Content-type':'application/json',
          'Accept':'application/json'
        }
      }).then(retorno => retorno.json())
        .then(retorno_convertido =>{
          console.log(retorno_convertido)
        })
    }


  return (
    <div className='app'>
     
       <Formulario botao={btnCadastrar} evento={dadosForm} cadastrar={cadastrar}/>
      <Tabela vetor={produtos}/>
    </div>
  );
}

export default App;
