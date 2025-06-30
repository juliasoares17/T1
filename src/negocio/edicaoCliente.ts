import Cliente from "../modelo/cliente";
import Entrada from "../io/entrada";
import Edicao from "./edicao";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";

export default class EdicaoCliente extends Edicao {
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public editar(): void {
        console.log('\nInício da edição de cliente')
        let cpfBusca = this.entrada.receberTexto('Informe o CPF do cliente que deseja editar: ')
        const cliente = this.clientes.find(cliente => cliente.getCpf.getValor === cpfBusca)

        if (!cliente) {
            console.log(`\nCliente com CPF ${cpfBusca} não encontrado, cancelando edição de cliente :(\n`)
            return
        }

        console.log(`\nCliente encontrado: ${cliente.nomeSocial}`)

        let novoNome = this.entrada.receberTexto(`Novo nome do cliente (ou pressione ENTER para manter '${cliente.nome}'): `)
        let novoNomeSocial = this.entrada.receberTexto(`Novo nome social do cliente (ou pressione ENTER para manter: '${cliente.nomeSocial}'): `)
        
        let novaDataCpf: string
        while (true) {
            novaDataCpf = this.entrada.receberTexto(
                `Nova data de emissão do CPF (dd/mm/aaaa) (ou pressione ENTER para manter: ${cliente.getCpf.getDataEmissao.toLocaleDateString()}): `
            )
            if (novaDataCpf.trim() === "") break

            const formatoValido = /^\d{2}\/\d{2}\/\d{4}$/.test(novaDataCpf)
            if (!formatoValido) {
                console.log(`Formato inválido :( Por favor, use o padrão dd/mm/aaaa.`)
            } else {
                const partes = novaDataCpf.split('/')
                const novaData = new Date(
                    Number(partes[2]),
                    Number(partes[1]) - 1,
                    Number(partes[0])
                )
                cliente.getCpf.setDataEmissao(novaData)
                break
            }
        }

        if (novoNome.trim() !== "") {
            cliente.setNome(novoNome)
        }

        if (novoNomeSocial.trim() !== "") {
            cliente.setNomeSocial(novoNomeSocial)
        }

        let adicionarRg = this.entrada.receberTexto('\nDeseja adicionar um novo RG? (s/n): ')
        if (adicionarRg.toLowerCase() === 's') {
            let rgValor: string
            while (true) {
                rgValor = this.entrada.receberTexto('Informe o número do RG (7 a 9 dígitos numéricos): ')
                if (!/^\d{7,9}$/.test(rgValor)) {
                    console.log('Número de RG inválido :( Deve conter entre 7 e 9 dígitos numéricos.')
                } else {
                    break
                }
            }
            let rgData: string
            while (true) {
                rgData = this.entrada.receberTexto('Informe a data de emissão do RG (dd/mm/aaaa): ')
                const formatoValido = /^\d{2}\/\d{2}\/\d{4}$/.test(rgData)
                if (!formatoValido) {
                    console.log(`Formato inválido :( Por favor, use o padrão dd/mm/aaaa.`)
                } else {
                    const partesData = rgData.split('/')
                    const ano = Number(partesData[2])
                    const mes = Number(partesData[1]) - 1
                    const dia = Number(partesData[0])
                    const dataEmissao = new Date(ano, mes, dia)
                    cliente.getRgs.push(new RG(rgValor, dataEmissao))
                    console.log('RG adicionado com sucesso.')
                    break
                }
            }
        }

        let adicionarTel = this.entrada.receberTexto(`\nDeseja adicionar um novo telefone? (s/n): `)
        if (adicionarTel.toLowerCase() === 's') {
            let ddd: string
            while (true) {
                ddd = this.entrada.receberTexto('Informe o DDD do telefone (somente 2 dígitos): ')
                if (!/^\d{2}$/.test(ddd)) {
                    console.log('DDD inválido :( Deve conter exatamente 2 dígitos numéricos.')
                } else {
                    break
                }
            }

            let numero: string
            while (true) {
                numero = this.entrada.receberTexto('Informe o número do telefone (8 ou 9 dígitos): ')
                if (!/^\d{8,9}$/.test(numero)) {
                    console.log('Número inválido :( Deve conter 8 ou 9 dígitos numéricos.')
                } else {
                    break
                }
            }

            cliente.getTelefones.push(new Telefone(ddd, numero))
            console.log('Telefone adicionado com sucesso.')
        }


        console.log('\nEdição concluída :)\n')
    }
}
