import Cadastro from "./cadastro"
import Produto from "../modelo/produto"
import Entrada from "../io/entrada"

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro de produto`);
        let nome = this.entrada.receberTexto(`Informe o nome do produto: `)
        let preco: number
        while (true) {
            preco = this.entrada.receberNumero(`Informe o preço do produto (utilizando '.' como separador decimal): `)
            if (isNaN(preco) || preco < 0) {
                console.log('Preço inválido :( Digite um número válido e positivo.');
            }
            else {
                break
            }
        }
        let codigo: string
        while (true) {
            codigo = this.entrada.receberTexto(`Informe o código do produto (6 dígitos numéricos): `)

            const formatoValido = /^\d{6}$/.test(codigo)
            const jaExiste = this.produtos.some(produto => produto.getCodigo === codigo)

            if (!formatoValido) {
                console.log(`Código inválido :( Ele deve conter exatamente 6 dígitos numéricos.`)
            } else if (jaExiste) {
                console.log(`Já existe um produto registrado com esse código, tente outro, por favor :(`)
            } else {
                break 
            }
        }
        let produto = new Produto(nome, preco, codigo)
        this.produtos.push(produto)
        console.log(`\nCadastro concluído :)\n`);
    }
}