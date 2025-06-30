import Edicao from "./edicao";
import Entrada from "../io/entrada";
import Produto from "../modelo/produto";

export default class EdicaoProduto extends Edicao {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public editar(): void {
        console.log('\nInício da edição de produto')
        let codigoBusca = this.entrada.receberTexto('Informe o código do produto que deseja editar: ')
        let produtoEditado = this.produtos.find(produto => produto.getCodigo === codigoBusca)
        if (!produtoEditado) {
            console.log(`\nProduto de código ${codigoBusca} não encontrado, cancelando edição de produto :(`)
            return
        }

        let novoNome = this.entrada.receberTexto(`Novo nome do produto (ou pressione ENTER para manter '${produtoEditado.nome}'): `)
        let novoPreco = this.entrada.receberTexto(`Novo preço do produto (ou pressione ENTER para manter '${produtoEditado.preco}'): `)

        if (novoNome.trim() !== "") {
            produtoEditado.setNome(novoNome)
        }

        if (novoPreco.trim() !== "") {
            let novoPrecoNumero = Number(novoPreco)
            if (isNaN(novoPrecoNumero) || novoPrecoNumero < 0) {
                console.log('Preço inválido :( O valor antigo foi mantido.')
            } else {
                produtoEditado.setPreco(novoPrecoNumero)
            }
        }

        console.log('\nEdição concluída :)\n')
    }
}