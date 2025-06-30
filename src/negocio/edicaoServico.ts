import Edicao from "./edicao";
import Entrada from "../io/entrada";
import Servico from "../modelo/servico";

export default class EdicaoServico extends Edicao {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public editar(): void {
        console.log('\nInício da edição de serviço')
        let codigoBusca = this.entrada.receberTexto('Informe o código do serviço que deseja editar: ')
        let servicoEditado = this.servicos.find(servico => servico.getCodigo === codigoBusca)
        if (!servicoEditado) {
            console.log(`\nServiço de código ${codigoBusca} não encontrado, cancelando edição de serviço :(`)
            return
        }

        let novoNome = this.entrada.receberTexto(`Novo nome do serviço (ou pressione ENTER para manter '${servicoEditado.nome}'): `)
        let novoPreco = this.entrada.receberTexto(`Novo preço do serviço (ou pressione ENTER para manter ${servicoEditado.preco}): `)
        let novaDuracao = this.entrada.receberTexto(`Nova duração do serviço (ou pressione ENTER para manter ${servicoEditado.duracao}): `)

        if (novoNome.trim() !== "") {
            servicoEditado.setNome(novoNome)
        }

        if (novoPreco.trim() !== "") {
            let novoPrecoNumero = Number(novoPreco)
            if (isNaN(novoPrecoNumero) || novoPrecoNumero < 0) {
                console.log('Preço inválido :( O valor antigo foi mantido.')
            } else {
                servicoEditado.setPreco(novoPrecoNumero)
            }
        }

        if (novaDuracao.trim() !== "") {
            let novaDuracaoNumero = Number(novaDuracao)
            if (isNaN(novaDuracaoNumero) || novaDuracaoNumero <= 0) {
                console.log('Duração inválida :( O valor antigo foi mantido.')
            } else {
                servicoEditado.setDuracao(novaDuracaoNumero)
            }
        }

        console.log('\nEdição concluída :)\n')
    }
}