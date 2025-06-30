import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Produto from "../modelo/produto";
import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemMaisConsumidos extends Listagem{
    private clientes: Array<Cliente>

    constructor (clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }

    public listar(): void {
        console.log('\nLista dos serviços e produtos mais consumidos:')
        const produtosConsumidos = new Map<string, {produto: Produto, quantidade: number}>()
        const servicosConsumidos = new Map<string, {servico: Servico, quantidade: number}>()
    
        this.clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(produto => {
                const codigo = produto.getCodigo
                if (produtosConsumidos.has(codigo)){
                    produtosConsumidos.get(codigo)!.quantidade += 1
                } else {
                    produtosConsumidos.set(codigo, {produto: produto, quantidade: 1})
                }
            })
            cliente.getServicosConsumidos.forEach(servico => {
                const codigo = servico.getCodigo
                if (servicosConsumidos.has(codigo)) {
                    servicosConsumidos.get(codigo)!.quantidade += 1
                } else {
                    servicosConsumidos.set(codigo, {servico: servico, quantidade: 1})
                }
            })
        })

        const produtosOrdenados = Array.from(produtosConsumidos.values())
            .sort((a, b) => b.quantidade - a.quantidade);

        const servicosOrdenados = Array.from(servicosConsumidos.values())
            .sort((a, b) => b.quantidade - a.quantidade);

        if (produtosOrdenados.length > 0){
            console.log(`\nProdutos mais consumidos:`);
            produtosOrdenados.forEach(p => {
                console.log(`Produto: ${p.produto.nome} | Código: ${p.produto.getCodigo} | Total consumido: ${p.quantidade}`);
            });
        }

        if (produtosOrdenados.length > 0){
            console.log(`\nServiços mais consumidos:`);
            servicosOrdenados.forEach(s => {
                console.log(`Serviço: ${s.servico.nome} | Código: ${s.servico.getCodigo} | Total consumido: ${s.quantidade}`);
            });
        }
        console.log('\n')
    }
}