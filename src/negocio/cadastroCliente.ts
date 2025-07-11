import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import CPF from "../modelo/cpf"
import Cadastro from "./cadastro"

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`)
        let nome = this.entrada.receberTexto(`Por favor, informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor, informe o nome social do cliente: `)
        let valor = this.entrada.receberTexto(`Por favor, informe o número do CPF: `)

        let data: string
        while (true) {
            data = this.entrada.receberTexto(`Por favor, informe a data de emissão do CPF (no padrão dd/mm/aaaa): `)
            const formatoValido = /^\d{2}\/\d{2}\/\d{4}$/.test(data)
            if (!formatoValido) {
                console.log(`Formato inválido :( Por favor, use o padrão dd/mm/aaaa.`)
            } else {
                break
            }
        }

        const partesData = data.split('/')
        const dia = parseInt(partesData[0])
        const mes = parseInt(partesData[1]) - 1 
        const ano = parseInt(partesData[2])
        const dataEmissao = new Date(ano, mes, dia)

        const cpf = new CPF(valor, dataEmissao)
        const cliente = new Cliente(nome, nomeSocial, cpf)
        this.clientes.push(cliente)

        console.log(`\nCadastro concluído :)\n`)
    }
}
