import axios from "axios";
import {MdDelete} from 'react-icons/md';


const Produto = ({valor, carregaProdutos}) => {
    return (
        <div className="produto">
            <center>
                <h3>{valor.nome}</h3>
                <p>Preço: {valor.preco}</p>
                <img src={valor.foto} alt={valor.nome} />
                <p>{valor.descricao}</p>
                <MdDelete className='icone' onClick={()=>excluir(valor.id)}/>
            </center>
        </div>
        )
        function excluir(id){
            let api = "https://app-api-tapwm.onrender.com/api/produtos";
            axios.delete(`${api}/${id}`).then(()=>carregaProdutos());
        }
}

export default Produto;