import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Listagem from "./listagem";

export default class ListagemServicosProdutos extends Listagem {
    private servicos: Array<Servico> 
    private produtos: Array<Produto>
    constructor(servicos: Array<Servico>, produtos: Array<Produto>) {
        super()
        this.servicos = servicos
        this.produtos = produtos
    }
    public listar(): void {
        console.log(`\nLista de todos os serviços e produtos:`);
        if (this.produtos.length > 0){
            console.log('Produtos: ')
            this.produtos.forEach(produto => {
                console.log(`Nome: ${produto.nome}`);
                console.log(`Preço: R$ ${produto.preco}`);
                console.log(`Código: ${produto.getCodigo}`);
                console.log(`\n`);
            });
            console.log(`--------------------------------------`);
            console.log(`\n`);
        }
        if (this.servicos.length > 0) {
            console.log('Serviços: ')
            this.servicos.forEach(servico => {
                console.log(`Nome: ${servico.nome}`)
                console.log(`Preço: R$ ${servico.preco}`)
                console.log(`Duração: ${servico.duracao} minutos`)
                console.log(`Código: ${servico.getCodigo}`)
                console.log(`\n`);
            })
        }
    }
}