import Entrada from "../io/entrada";
import Listagem from "./listagem";
import Cliente from "../modelo/cliente";

export default class ListagemConsumo extends Listagem {
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public listar(): void {
        console.log(`\nLista de todos os registros de consumo dos clientes:`);
        this.clientes.forEach((cliente, index) => {
            console.log(`Cliente ${index + 1}`)
            console.log(`Nome: ${cliente.nome}`)
            console.log(`CPF: ${cliente.getCpf.getValor}`)
            if (cliente.getProdutosConsumidos.length > 0) {
                console.log('--------------------------------------')
                console.log('Produtos consumidos')
                cliente.getProdutosConsumidos.forEach(produto => {
                    console.log(`- Produto: ${produto.nome} | Preço: R$ ${produto.preco}`)
                })
            }
            if (cliente.getServicosConsumidos.length > 0){
                console.log('--------------------------------------')
                console.log('Serviços consumidos')
                cliente.getServicosConsumidos.forEach(servico => {
                    console.log(`- Serviço: ${servico.nome} | Preço: R$ ${servico.preco} | Duração: ${servico.duracao}`)
                })
            }
            console.log('\n')
        })
    }
}