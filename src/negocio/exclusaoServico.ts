import Exclusao from "./exclusao";
import Servico from "../modelo/servico";
import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";

export default class ExclusaoServico extends Exclusao {
    private servicos: Array<Servico>
    private entrada: Entrada
    private clientes: Array<Cliente>

    constructor(servicos: Array<Servico>, clientes: Array<Cliente>){
        super()
        this.servicos = servicos
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public excluir(): void {
        console.log(`\nInício da exclusão de servico`);
        let codigoBusca = this.entrada.receberTexto(`Informe o código do serviço que deseja excluir: `)
        const indice = this.servicos.findIndex(servico => servico.getCodigo === codigoBusca);

        if (indice !== -1) {
            const servicoRemovido = this.servicos.splice(indice, 1)[0];

            this.clientes.forEach(cliente => {
                cliente.getServicosConsumidos.forEach(serv => {
                    if (serv.getCodigo === codigoBusca && !serv.nome.includes('(descontinuado)')) {
                        serv.nome += ' (descontinuado)'
                    }
                })

                cliente.getPets.forEach(pet => {
                    pet.getServicosConsumidos.forEach(serv => {
                        if (serv.getCodigo === codigoBusca && !serv.nome.includes('(descontinuado)')) {
                            serv.nome += ' (descontinuado)'
                        }
                    })
                })
            })

            console.log(`\nServiço "${servicoRemovido.nome}" excluído com sucesso :)\n`);
            
        } else {
            console.log(`\nServiço com código ${codigoBusca} não encontrado, cancelando exclusão de serviço :(\n`);
            return
        }

        
    }

}