import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";

export default class RegistroConsumo {
    private clientes: Array<Cliente>
    private servicos: Array<Servico>
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>, servicos: Array<Servico>, produtos: Array<Produto>){
        this.clientes = clientes
        this.servicos = servicos
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public registrar(): void {
        console.log('\nInício do registro de consumo')
        const cpfBusca = this.entrada.receberTexto('Informe o CPF do cliente: ')
        const cliente = this.clientes.find(cli => cli.getCpf.getValor === cpfBusca)

        if (!cliente){
            console.log(`Cliente com CPF ${cpfBusca} não encontrado, cancelando registro de consumo :(`);
            return;
        }

        const pets = cliente.getPets
        if (pets.length === 0) {
            console.log("Esse cliente não possui pets cadastrados, cancelando registro de consumo :(")
            return
        }

        let adicionarProduto = this.entrada.receberTexto('Deseja registrar consumo de produto? (s/n): ')
        while (adicionarProduto.toLowerCase() === 's'){
            const petBusca = this.entrada.receberTexto('Digite o nome do pet que consumiu o produto/serviço: ')
            const petConsumidor = pets.find(pet => pet.getNome === petBusca)

            if (!petConsumidor) {
                console.log("Pet não encontrado, cancelando registro :(")
                return
            }

            const codigo = this.entrada.receberTexto('Digite o código do produto consumido: ')
            const produto = this.produtos.find(prod => prod.getCodigo === codigo)
            if (produto) {
                cliente.adicionarProduto(produto)
                petConsumidor.adicionarProduto(produto)
                console.log("Produto adicionado ao consumo.")
            } else {
                console.log("Produto não encontrado.")
            }
            adicionarProduto = this.entrada.receberTexto("Deseja registrar outro produto? (s/n): ").toLowerCase()
        }

        let adicionarServico = this.entrada.receberTexto('Deseja registrar consumo de serviço? (s/n): ')
        while (adicionarServico.toLowerCase() === 's'){
            const petBusca = this.entrada.receberTexto('Digite o nome do pet que consumiu o produto/serviço: ')
            const petConsumidor = pets.find(pet => pet.getNome === petBusca)

            if (!petConsumidor) {
                console.log("Pet não encontrado, cancelando registro :(")
                return
            }

            const codigo = this.entrada.receberTexto('Digite o código do serviço consumido: ')
            const servico = this.servicos.find(ser => ser.getCodigo === codigo)
            if (servico){
                cliente.adicionarServico(servico)
                petConsumidor.adicionarServico(servico)
                console.log("Serviço adicionado ao consumo.")
            } else {
                console.log("Serviço não encontrado.")
            }
            adicionarServico = this.entrada.receberTexto("Deseja registrar outro serviço? (s/n): ").toLowerCase()
        }

        console.log("\nRegistro concluído :)\n")

    }
}