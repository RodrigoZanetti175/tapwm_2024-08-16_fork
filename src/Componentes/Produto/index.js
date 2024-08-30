const Produto = ({valor}) => {
    return (
        <div className="produto">
            <center>
                <h3>{valor.nome}</h3>
                <p>Preço: {valor.preco}</p>
                <img src={valor.foto} alt={valor.nome} />
            </center>
        </div>
    )
}

export default Produto;