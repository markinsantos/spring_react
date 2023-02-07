
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

          if(retorno_convertido.msg !== undefined){
            alert(retorno_convertido.msg);
          }else{
            setProdutos([...produtos, retorno_convertido])
            limparForm()
            alert('Produto cadastrado com sucesso')
          }
        })
    }

    //altera produto
    const alterar = () =>{
      fetch("http://localhost:8080/alterar",{
        method:'put',
        body:JSON.stringify(objProduto),
        headers:{
          'Content-type':'application/json',
          'Accept':'application/json'
        }
      }).then(retorno => retorno.json())
        .then(retorno_convertido =>{

          if(retorno_convertido.msg !== undefined){
            alert(retorno_convertido.msg);
          }else{
                        
            alert('Produto alterado com sucesso')

            let vetorTemp = [...produtos]

            let indice = vetorTemp.findIndex((p)=>{
               return p.id === objProduto.id
            })
            
            vetorTemp[indice] = objProduto
 
            setProdutos(vetorTemp);
          
            limparForm()
          }
        })
    }


      // remover
    const remover = () =>{
      fetch("http://localhost:8080/remover/"+objProduto.id,{
        method:'delete',
        headers:{
          'Content-type':'application/json',
          'Accept':'application/json'
        }
      }).then(retorno => retorno.json())
        .then(retorno_convertido =>{

            alert(retorno_convertido.msg) 

           let vetorTemp = [...produtos]
           let indice = vetorTemp.findIndex((p)=>{
              return p.id === objProduto.id
           })
           
           vetorTemp.splice(indice,1)

           setProdutos(vetorTemp);
           limparForm()

        })
    }

    //limpar oformulario
    const limparForm = ()=>{
      setObjProduto(produto)
      setBtnCadastrar(true)

    }

    //selecionar produto
    const selecionarProduto = (indice) =>{
      setObjProduto(produtos[indice])
      setBtnCadastrar(false)
    }


  return (
    <div className='app'>
     
       <Formulario botao={btnCadastrar} evento={dadosForm}
        cadastrar={cadastrar} obj={objProduto}
        cancelar={limparForm} remover={remover}
        alterar={alterar}/>
      <Tabela vetor={produtos} selecionar={selecionarProduto}/>
    </div>
  );
}

export default App;
