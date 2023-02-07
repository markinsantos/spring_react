const Tabela = ({ vetor }) => {
    return (
        <div className="tb">
        <tale class="table table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Marca</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                {
                    vetor.map((obj, indice) => (
                        <tr key={indice}>
                            <td>{indice+1}</td>
                            <td>{obj.nome}</td>
                            <td>{obj.marca}</td>
                            <td><button className="btn btn-success">Selecionar</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </tale>
        </div>
    )
}

export default Tabela;