import Exclusao from "./exclusao";
import Pet from "../modelo/pet";
import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";

export default class ExclusaoPet extends Exclusao {
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>){
    super()
    this.clientes = clientes
    this.entrada = new Entrada()
    }

    public excluir(): void {
        console.log(`\nInício da exclusão de pet`);
        let cpfBusca = this.entrada.receberTexto(`Informe o CPF do cliente dono do pet que deseja excluir: `)
        let cliente = this.clientes.find(cliente => cliente.getCpf.getValor === cpfBusca)
        if (!cliente) {
            console.log(`\nCliente com CPF ${cpfBusca} não encontrado, cancelando exclusão de pet :(`)
            return
        }
        else {
            let nomePet = this.entrada.receberTexto(`Informe o nome do pet que deseja excluir: `)
            const indice = cliente.getPets.findIndex(pet => pet.getNome == nomePet)
            if (indice !== -1) {
                const petRemovido = cliente.getPets.splice(indice, 1)[0];
                console.log(`Pet "${petRemovido.getNome}" excluído com sucesso :)\n`)
            } else {
                console.log(`Pet de nome ${nomePet} não encontrado, cancelando exclusão de pet :(\n`)
            }
        }
   }
}
