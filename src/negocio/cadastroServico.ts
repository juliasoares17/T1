import Cadastro from "./cadastro"
import Servico from "../modelo/servico"
import Entrada from "../io/entrada"

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro de serviço`);
        let nome = this.entrada.receberTexto(`Informe o nome do serviço: `)
        let preco: number
        while (true) {
            preco = this.entrada.receberNumero(`Informe o preço do serviço (utilizando '.' como separador decimal): `)
            if (isNaN(preco) || preco < 0) {
                console.log('Preço inválido :( Digite um número válido e positivo.');
            }
            else {
                break
            }
        }
        let duracao: number
        while (true) {
            duracao = this.entrada.receberNumero(`Informe a duração do serviço (em minutos): `)
            if (isNaN(duracao) || duracao <= 0) {
                console.log('Duração inválida :( Digite um número válido e positivo.')
            } else {
                break
            }
        }
        let codigo: string
        while (true) {
            codigo = this.entrada.receberTexto(`Defina um código de seis dígitos para o serviço: `)

            const formatoValido = /^\d{6}$/.test(codigo)
            const jaExiste = this.servicos.some(servico => servico.getCodigo === codigo)

            if (!formatoValido) {
                console.log(`Código inválido :( Ele deve conter exatamente 6 dígitos numéricos.`)
            } else if (jaExiste) {
                console.log(`Já existe um serviço registrado com esse código, tente outro, por favor :(`)
            } else {
                break
            }
        }
        let servico = new Servico(nome, preco, duracao, codigo)
        this.servicos.push(servico)
        console.log(`\nCadastro concluído :)\n`)
    }
}