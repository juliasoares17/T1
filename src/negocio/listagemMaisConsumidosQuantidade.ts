import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemMaisConsumidosQuantidade extends Listagem {
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    public listar(): void {
        console.log('\nLista dos 10 clientes que mais consumiram produtos ou serviços (em quantidade):')

        const consumoPorCliente = this.clientes.map(cliente => {
            const totalProdutos = cliente.getProdutosConsumidos.length
            const totalServicos = cliente.getServicosConsumidos.length
            const total = totalProdutos + totalServicos

            return { cliente, total }
        })

        const top10 = consumoPorCliente.sort((a, b) => b.total - a.total).slice(0, 10)

        if (top10.length === 0) {
            console.log('Nenhum consumo registrado ainda :(')
            return
        } else if (this.clientes.length < 10) {
            console.log('(Você ainda não possui pelo menos dez clientes cadastrados, então essa lista terá uma quantidade de clientes menor que dez)\n')
        } else {
            console.log('\n')
        }

        top10.forEach((registro, index) => {
            const cliente = registro.cliente
            console.log(`${index + 1}º - ${cliente.nome} (CPF: ${cliente.getCpf.getValor})`)
            console.log(`Total de itens consumidos: ${registro.total}`)

            const produtos = cliente.getProdutosConsumidos
            const servicos = cliente.getServicosConsumidos

            if (produtos.length > 0) {
                console.log(`Produtos consumidos:`)
                const contagemProdutos = new Map<string, { nome: string, quantidade: number }>()
                produtos.forEach(prod => {
                    const codigo = prod.getCodigo
                    if (contagemProdutos.has(codigo)) {
                        contagemProdutos.get(codigo)!.quantidade += 1
                    } else {
                        contagemProdutos.set(codigo, { nome: prod.nome, quantidade: 1 })
                    }
                })
                contagemProdutos.forEach(info => {
                    console.log(`- ${info.nome} (Quantidade: ${info.quantidade})`)
                })
            }
            
            if (servicos.length > 0) {
                console.log(`Serviços consumidos:`)
                const contagemServicos = new Map<string, { nome: string, quantidade: number }>()
                servicos.forEach(serv => {
                    const codigo = serv.getCodigo
                    if (contagemServicos.has(codigo)) {
                        contagemServicos.get(codigo)!.quantidade += 1
                    } else {
                        contagemServicos.set(codigo, { nome: serv.nome, quantidade: 1 })
                    }
                })
                contagemServicos.forEach(info => {
                    console.log(`- ${info.nome} (Quantidade: ${info.quantidade})`)
                })
            }
            console.log('\n')
        })

        if (top10.length === 0) {
            console.log("Nenhum consumo registrado ainda.")
        }
    }
}
