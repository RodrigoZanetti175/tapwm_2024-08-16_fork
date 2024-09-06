import axios from 'axios';

export default function CadastroProduto({carregaProdutos}) {
    
    function cadastrarProduto(){
        const nome = document.getElementById('nome').value;
        const preco = document.getElementById('preco').value; 
        const foto = document.getElementById('foto').value;
        const categoria = document.getElementById('categoria').value;
        const descricao = document.getElementById('descricao').value;
        const produto = {nome, preco, foto, categoria, descricao};
        axios.post('https://app-api-tapwm.onrender.com/api/produtos', produto).then(()=>carregaProdutos());
    }
    
    return(
        <div>
            <h2 className="titulo">Cadastro de Produto</h2>
            <form>
                <label>Nome:</label>
                <input type="text" id="nome" name="nome"/>
                <label>Preço:</label>
                <input type="text" id="preco" name="preco"/>
                <label>Foto:</label>
                <input type="text" id="foto" name="foto"/>
                <label>Descrição:</label>
                <input type="text" id="descricao" name="descricao"/>
                <label>Categoria:</label>
                <input type="text" id="categoria" name="categoria"/>
                <button type="button" onClick={cadastrarProduto}>Cadastrar</button>
            </form>
        </div>
    ); 

       
}