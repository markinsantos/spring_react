function Formulario({botao,evento,cadastrar}){
    return(
        
        <form>
            <input type="text" onChange={evento} name='nome' placeholder='Nome' className='form-control'/>
            <input type="text" onChange={evento} name='marca' placeholder='Marca' className='form-control'/>

            {
                botao
                ?
                <input type="button" onClick={cadastrar} value="cadastrar" className='btn btn-primary'/>
                :
                <div>
                    <input type="button" value="altera" className='btn btn-warning'/>
                    <input type="button" value="remover" className='btn btn-danger'/>
                    <input type="button" value="cancelar" className='btn btn-secondary'/>
                </div>
            }
            
            
        </form>
    )
}

export default Formulario;