import Produto from "./produto"
import Servico from "./servico"

export default class Pet {
    private nome: string
    private tipo: string
    private raca: string
    private genero: string
    private produtosConsumidos: Array<Produto> = []
    private servicosConsumidos: Array<Servico> = []

    constructor(nome: string, raca: string, genero: string, tipo: string) {
        this.nome = nome
        this.raca = raca
        this.genero = genero
        this.tipo = tipo
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    }

    public get getNome(){return this.nome}
    public get getRaca(){return this.raca}
    public get getGenero(){return this.genero}
    public get getTipo(){return this.tipo}
    public get getProdutosConsumidos() {return this.produtosConsumidos}
    public get getServicosConsumidos() {return this.servicosConsumidos}

    public setNome(novoNome: string): void {
        this.nome = novoNome
    }

    public setRaca(novaRaca: string): void {
        this.raca = novaRaca
    }

    public setGenero(novoGenero: string): void {
        this.genero = novoGenero
    }

    public setTipo(novoTipo: string): void {
        this.tipo = novoTipo
    }

    public adicionarProduto(produto: Produto) {
        this.produtosConsumidos.push(produto)
    }

    public adicionarServico(servico: Servico) {
        this.servicosConsumidos.push(servico)
    }

}