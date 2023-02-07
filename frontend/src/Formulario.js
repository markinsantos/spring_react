function Formulario({botao,evento,cadastrar, obj, cancelar,remover, alterar}){
    return(
        
        <form>
            <input type="text" onChange={evento} value={obj.nome} name='nome' placeholder='Nome' className='form-control'/>
            <input type="text" onChange={evento} value={obj.marca} name='marca' placeholder='Marca' className='form-control'/>

            {
                botao
                ?
                <input type="button" onClick={cadastrar} value="cadastrar" className='btn btn-primary'/>
                :
                <div>
                    <input type="button" onClick={alterar} value="altera" className='btn btn-warning'/>
                    <input type="button" onClick={remover} value="remover" className='btn btn-danger'/>
                    <input type="button" onClick={cancelar} value="cancelar" className='btn btn-secondary'/>
                </div>
            }
            
            
        </form>
    )
}

export default Formulario;