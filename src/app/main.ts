import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastroCliente";
import EdicaoCliente from "../negocio/edicaoCliente";
import ExclusaoCliente from "../negocio/exclusaoCliente";
import ListagemClientes from "../negocio/listagemClientes";
import CadastroPet from "../negocio/cadastroPet";
import EdicaoPet from "../negocio/edicaoPet";
import ExclusaoPet from "../negocio/exclusaoPet";
import CadastroProduto from "../negocio/cadastroProduto";
import EdicaoProduto from "../negocio/edicaoProduto";
import ExclusaoProduto from "../negocio/exclusaoProduto";
import CadastroServico from "../negocio/cadastroServico";
import EdicaoServico from "../negocio/edicaoServico";
import ExclusaoServico from "../negocio/exclusaoServico";
import ListagemServicosProdutos from "../negocio/listagemServicosProdutos";
import RegistroConsumo from "../negocio/registroConsumo";
import ListagemConsumo from "../negocio/listagemConsumo";
import ListagemMaisConsumidos from "../negocio/listagemMaisConsumidos";
import ListagemMaisConsumidosPet from "../negocio/listagemMaisConsumidosPet";
import ListagemMaisConsumidosQuantidade from "../negocio/listagemMaisConsumidosQuantidade";
import ListagemMaisConsumidosValor from "../negocio/listagemMaisConsumidosValor";

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function main() {
    console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
    let empresa = new Empresa()
    let execucao = true

    while (execucao) {
        console.log(`Opções:`);
        console.log(`1 - Cadastrar cliente`); 
        console.log(`2 - Editar cliente`); 
        console.log(`3 - Excluir cliente`); 
        console.log(`4 - Listar todos os clientes`); 
        console.log(`5 - Cadastrar pet`); 
        console.log(`6 - Editar pet`); 
        console.log(`7 - Excluir pet`); 
        console.log(`8 - Cadastrar produto`); 
        console.log(`9 - Editar produto`); 
        console.log(`10 - Excluir produto`); 
        console.log(`11 - Cadastrar serviço`); 
        console.log(`12 - Editar serviço`); 
        console.log(`13 - Excluir serviço`); 
        console.log(`14 - Listar todos os serviços e produtos`); 
        console.log(`15 - Registrar consumo de produtos ou serviços por um cliente`); 
        console.log(`16 - Listar todos os registros de consumo dos clientes`); 
        console.log(`17 - Listar os serviços e produtos mais consumidos`); 
        console.log(`18 - Listar os serviços e produtos mais consumidos por tipo e raça de pets`);
        console.log(`19 - Listar os 10 clientes que mais consumiram em quantidade`); 
        console.log(`20 - Listar os 5 clientes que mais consumiram em valor`);
        console.log(`0 - Sair`);

        let entrada = new Entrada()
        let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

        switch (opcao) {
            case 1:
                let cadastroCliente = new CadastroCliente(empresa.getClientes)
                cadastroCliente.cadastrar()
                await sleep(2000)
                break
            case 2:
                let edicaoCliente = new EdicaoCliente(empresa.getClientes)
                edicaoCliente.editar()
                await sleep(2000)
                break
            case 3:
                let exclusaoCliente = new ExclusaoCliente(empresa.getClientes)
                exclusaoCliente.excluir()
                await sleep(2000)
                break
            case 4:
                let listagemClientes = new ListagemClientes(empresa.getClientes)
                listagemClientes.listar()
                await sleep(2000)
                break
            case 5:
                let cadastroPet = new CadastroPet(empresa.getClientes)
                cadastroPet.cadastrar()
                await sleep(2000)
                break
            case 6:
                let edicaoPet = new EdicaoPet(empresa.getClientes)
                edicaoPet.editar()
                await sleep(2000)
                break
            case 7:
                let exclusaoPet = new ExclusaoPet(empresa.getClientes)
                exclusaoPet.excluir()
                await sleep(2000)
                break
            case 8:
                let cadastroProduto = new CadastroProduto(empresa.getProdutos)
                cadastroProduto.cadastrar()
                await sleep(2000)
                break
            case 9:
                let edicaoProduto = new EdicaoProduto(empresa.getProdutos)
                edicaoProduto.editar()
                await sleep(2000)
                break
            case 10:
                let exclusaoProduto = new ExclusaoProduto(empresa.getProdutos, empresa.getClientes)
                exclusaoProduto.excluir()
                await sleep(2000)
                break
            case 11:
                let cadastroServico = new CadastroServico(empresa.getServicos)
                cadastroServico.cadastrar()
                await sleep(2000)
                break
            case 12:
                let edicaoServico = new EdicaoServico(empresa.getServicos)
                edicaoServico.editar()
                await sleep(2000)
                break
            case 13:
                let exclusaoServico = new ExclusaoServico(empresa.getServicos, empresa.getClientes)
                exclusaoServico.excluir()
                await sleep(2000)
                break
            case 14:
                let listagemServicosProdutos = new ListagemServicosProdutos(empresa.getServicos, empresa.getProdutos)
                listagemServicosProdutos.listar()
                await sleep(2000)
                break
            case 15:
                let registroConsumo = new RegistroConsumo(empresa.getClientes, empresa.getServicos, empresa.getProdutos)
                registroConsumo.registrar()
                await sleep(2000)
                break
            case 16:
                let listagemConsumo = new ListagemConsumo(empresa.getClientes)
                listagemConsumo.listar()
                await sleep(2000)
                break
            case 17:
                let listagemMaisConsumidos = new ListagemMaisConsumidos(empresa.getClientes)
                listagemMaisConsumidos.listar()
                await sleep(2000)
                break
            case 18:
                let listagemMaisConsumidosPet = new ListagemMaisConsumidosPet(empresa.getClientes)
                listagemMaisConsumidosPet.listar()
                await sleep(2000)
                break
            case 19:
                let listagemMaisConsumidosQuantidade = new ListagemMaisConsumidosQuantidade(empresa.getClientes)
                listagemMaisConsumidosQuantidade.listar()
                await sleep(2000)
                break
            case 20:
                let listagemMaisConsumidosValor = new ListagemMaisConsumidosValor(empresa.getClientes)
                listagemMaisConsumidosValor.listar()
                await sleep(2000)
                break
            case 0:
                execucao = false
                console.log(`Até mais :)`)
                break
            default:
                console.log(`Operação não entendida :(`)
        }
    }
}

main(); 