import Cadastro from "./cadastro"
import Pet from "../modelo/pet"
import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"

export default class CadastroPet extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do pet`);
        let cpfBusca = this.entrada.receberTexto(`Informe o CPF do cliente dono deste pet: `)
        let cliente = this.clientes.find(cliente => cliente.getCpf.getValor === cpfBusca)
        if (!cliente) {
            console.log(`\nCliente com CPF ${cpfBusca} não encontrado, cancelando cadastro de pet :(`)
            return
        }
        else {
        let nome = this.entrada.receberTexto(`Por favor, informe o nome do pet: `)
        let tipo = this.entrada.receberTexto(`Por favor, informe o tipo do pet: `)
        let raca = this.entrada.receberTexto(`Por favor, informe a raça do pet: `)
        let genero = this.entrada.receberTexto(`Por favor, informe o gênero do pet: `)
        let pet = new Pet(nome, raca, genero, tipo)
        cliente.adicionarPet(pet)
        console.log(`\nCadastro concluído :)\n`);
        }
    }
}