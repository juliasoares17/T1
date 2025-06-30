import Edicao from "./edicao";
import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";

export default class EdicaoPet extends Edicao {
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public editar(): void {
        console.log('\nInício da edição de pet')
        let cpfBusca = this.entrada.receberTexto('Informe o CPF do cliente dono do pet que deseja editar: ')
        let cliente = this.clientes.find(cliente => cliente.getCpf.getValor === cpfBusca)
        if (!cliente) {
            console.log(`\nCliente com CPF ${cpfBusca} não encontrado, cancelando edição de pet :(`)
            return
        }
        let nomePet = this.entrada.receberTexto('Informe o nome do pet que deseja editar: ')
        let petEditado = cliente.getPets.find(pet => pet.getNome === nomePet)
        if (!petEditado) {
            console.log(`\nPet de nome ${nomePet} não encontrado, cancelando edição de pet :(`)
            return
        }

        let novoNome = this.entrada.receberTexto(`Novo nome do pet (ou pressione ENTER para manter '${petEditado.getNome}'): `)
        let novoTipo = this.entrada.receberTexto(`Novo tipo do pet (ou pressione ENTER para manter '${petEditado.getTipo}'): `)
        let novaRaca = this.entrada.receberTexto(`Nova raça do pet (ou pressione ENTER para manter '${petEditado.getRaca}'): `)
        let novoGenero = this.entrada.receberTexto(`Novo gênero do pet (ou pressione ENTER para manter '${petEditado.getGenero}'): `)

        if (novoNome.trim() !== "") {
            petEditado.setNome(novoNome)
        }

        if (novoTipo.trim() !== "") {
            petEditado.setTipo(novoTipo)
        }

        if (novaRaca.trim() !== "") {
            petEditado.setRaca(novaRaca)
        }

        if (novoGenero.trim() !== "") {
            petEditado.setGenero(novoGenero)
        }

        console.log('\nEdição concluída :)\n')

    }
}