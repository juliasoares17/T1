import Cliente from "../modelo/cliente";
import Listagem from "./listagem";
import Pet from "../modelo/pet";
import { formatarData } from "./formatarData";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach((cliente, index) => {
            console.log(`Cliente ${index + 1}`)
            console.log(`Data de cadastro: ${formatarData(cliente.getDataCadastro)}`)
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            if (cliente.getRgs.length > 0){
                console.log('RGs:')
                cliente.getRgs.forEach(rg => {
                    console.log(`- ${rg.getValor}`)
                })
            }
            if (cliente.getTelefones.length > 0){
                console.log('Telefones:')
                cliente.getTelefones.forEach(telefone => {
                    console.log(`- ${telefone.getDdd} ${telefone.getNumero}`)
                })
            }
            if (cliente.getPets.length > 0) {
            console.log(`--------------------------------------`);
            console.log('Pets: ')
                cliente.getPets.forEach((pet, index) => {
                    console.log(`Pet ${index + 1}`)
                    console.log(`Nome: ${pet.getNome} | Tipo: ${pet.getTipo} | Raça: ${pet.getRaca} | Gênero: ${pet.getGenero}`)
                })
            }
            console.log(`\n`);
        });
    }
}