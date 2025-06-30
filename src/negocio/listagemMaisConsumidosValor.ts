import Listagem from "./listagem";
import Cliente from "../modelo/cliente";

export default class ListagemMaisConsumidosValor extends Listagem {
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }

    public listar(): void {
        console.log('\nLista dos 5 clientes que mais consumiram produtos ou serviços (em valor):')

        const consumoPorValor: Array<{cliente: Cliente; valorTotal: number}> = []

        for (let cliente of this.clientes) {
            let valorProdutos = 0
            let valorServicos = 0

            for (let produto of cliente.getProdutosConsumidos) {
                valorProdutos += produto.preco
            }
            for (let servico of cliente.getServicosConsumidos) {
                valorServicos += servico.preco;
            }
            let valorTotal = valorProdutos + valorServicos
            consumoPorValor.push({cliente, valorTotal})
        }

        const top5 = consumoPorValor.sort((a, b) => b.valorTotal - a.valorTotal).slice(0, 5)

        if (top5.length === 0) {
            console.log('Nenhum consumo registrado ainda :(')
            return
        } else if (this.clientes.length < 5) {
            console.log('(Você ainda não possui pelo menos cinco clientes cadastrados, então essa lista terá uma quantidade de clientes menor que cinco)\n')
        } else {
            console.log('\n')
        }

        top5.forEach((registro, index) => {
            const cliente = registro.cliente
            console.log(`${index + 1}º - ${cliente.nome} (CPF: ${cliente.getCpf.getValor})`)
            console.log(`Valor total consumido: R$ ${registro.valorTotal.toFixed(2)}`)
            const produtos = cliente.getProdutosConsumidos
            const servicos = cliente.getServicosConsumidos

            if (produtos.length > 0) {
                console.log(`Produtos consumidos:`)
                const contagemProdutos = new Map<string, { nome: string, preco: number, quantidade: number }>()
                produtos.forEach(prod => {
                const codigo = prod.getCodigo
                if (contagemProdutos.has(codigo)) {
                    contagemProdutos.get(codigo)!.quantidade += 1
                } else {
                    contagemProdutos.set(codigo, { nome: prod.nome, preco: prod.preco, quantidade: 1 })
                }
            })

            contagemProdutos.forEach(info => {
                const repeticao = info.quantidade > 1 ? ` (${info.quantidade}X)` : ''
                console.log(`- ${info.nome} (R$ ${info.preco.toFixed(2)})${repeticao}`)
            })
        }

            if (servicos.length > 0) {
                console.log(`Serviços consumidos:`)
                const contagemServicos = new Map<string, { nome: string, preco: number, quantidade: number }>()

                servicos.forEach(serv => {
                    const codigo = serv.getCodigo
                    if (contagemServicos.has(codigo)) {
                        contagemServicos.get(codigo)!.quantidade += 1
                    } else {
                        contagemServicos.set(codigo, { nome: serv.nome, preco: serv.preco, quantidade: 1 })
                    }
                })

                contagemServicos.forEach(info => {
                    const repeticao = info.quantidade > 1 ? ` (${info.quantidade}X)` : ''
                    console.log(`- ${info.nome} (R$ ${info.preco.toFixed(2)})${repeticao}`)
                })
            }

            console.log('\n')
        });
    }
}