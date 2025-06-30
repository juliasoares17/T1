import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import Exclusao from "./exclusao"

export default class ExclusaoCliente extends Exclusao{
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public excluir(): void {
        console.log(`\nInício da exclusão de cliente`);
        let valor = this.entrada.receberTexto(`Informe o número do CPF do cliente a ser excluído: `);
        const indice = this.clientes.findIndex(cliente => cliente.getCpf.getValor === valor);

        if (indice !== -1) {
            const clienteRemovido = this.clientes.splice(indice, 1)[0];
            console.log(`\nCliente "${clienteRemovido.nome}" excluído com sucesso :)\n`);
        } else {
            console.log(`\nCliente com CPF ${valor} não encontrado, cancelando exclusão de cliente :(\n`);
            return
        }

    }
}