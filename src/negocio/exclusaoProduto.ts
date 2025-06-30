import Exclusao from "./exclusao";
import Produto from "../modelo/produto";
import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente"

export default class ExclusaoProduto extends Exclusao {
    private produtos: Array<Produto>
    private entrada: Entrada
    private clientes: Array<Cliente>

    constructor(produtos: Array<Produto>, clientes: Array<Cliente>){
        super()
        this.produtos = produtos
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public excluir(): void {
        console.log(`\nInício da exclusão de produto`);
        let codigoBusca = this.entrada.receberTexto(`Informe o código do produto que deseja excluir: `)
        const indice = this.produtos.findIndex(produto => produto.getCodigo === codigoBusca);

        if (indice !== -1) {
            const produtoRemovido = this.produtos.splice(indice, 1)[0];

            this.clientes.forEach(cliente => {
                cliente.getProdutosConsumidos.forEach(prod => {
                    if (prod.getCodigo === codigoBusca && !prod.nome.includes('(descontinuado)')) {
                        prod.nome += ' (descontinuado)'
                    }
                })
                cliente.getPets.forEach(pet => {
                    pet.getProdutosConsumidos.forEach(prod => {
                        if (prod.getCodigo === codigoBusca && !prod.nome.includes('(descontinuado)')) {
                            prod.nome += ' (descontinuado)'
                        }
                    })
                })
            })

            console.log(`\nProduto "${produtoRemovido.nome}" excluído com sucesso :)\n`);
        } else {
            console.log(`\nProduto com código ${codigoBusca} não encontrado, cancelando exclusão de produto :(\n`);
            return
        }

    }

}