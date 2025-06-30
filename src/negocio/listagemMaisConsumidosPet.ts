import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Listagem from "./listagem";

export default class ListagemMaisConsumidosPet extends Listagem {
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }

    public listar(): void {
        const consumoProdutos: Map<string, Map<string, { produto: Produto, quantidade: number }>> = new Map()
        const consumoServicos: Map<string, Map<string, { servico: Servico, quantidade: number }>> = new Map()

        this.clientes.forEach(cliente => {
            cliente.getPets.forEach(pet => {
                const chave = `${pet.getTipo}-${pet.getRaca}`

                pet.getProdutosConsumidos?.forEach(produto => {
                    if (!consumoProdutos.has(chave)) {
                        consumoProdutos.set(chave, new Map())
                    }
                    const grupo = consumoProdutos.get(chave)!
                    const chaveProduto = produto.getCodigo
                    if (grupo.has(chaveProduto)) {
                    grupo.get(chaveProduto)!.quantidade += 1
                    } else {
                        grupo.set(chaveProduto, { produto: produto, quantidade: 1 })
                    }
                })
                pet.getServicosConsumidos?.forEach(servico => {
                    if (!consumoServicos.has(chave)) { 
                        consumoServicos.set(chave, new Map())
                    }
                    const grupo = consumoServicos.get(chave)!
                    const chaveServico = servico.getCodigo
                    if (grupo.has(chaveServico)) {
                        grupo.get(chaveServico)!.quantidade += 1
                    } else {
                        grupo.set(chaveServico, { servico: servico, quantidade: 1 })
                    }
                })
            })
        })

        console.log('\nLista dos produtos mais consumidos por tipo e raça de pets:')
        consumoProdutos.forEach((produtos, tipoRaca) => {
            console.log(`\n${tipoRaca}`)
            const produtosOrdenados = Array.from(produtos.values()).sort((a, b) => b.quantidade - a.quantidade)
            produtosOrdenados.forEach(reg => {
                console.log(`- Produto: ${reg.produto.nome} - Quantidade: ${reg.quantidade}`)
            })
        })

        console.log("\nServiços mais consumidos por tipo e raça de pets:")
        consumoServicos.forEach((servicos, tipoRaca) => {
            console.log(`\n${tipoRaca}`)
            const servicosOrdenados = Array.from(servicos.values()).sort((a, b) => b.quantidade - a.quantidade)
            servicosOrdenados.forEach(reg => {
                console.log(`- Serviço: ${reg.servico.nome} - Quantidade: ${reg.quantidade}`)
            })
        })
        console.log('\n')
    }
}