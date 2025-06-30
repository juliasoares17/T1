export default class Servico {
    public nome: string
    public preco: number
    public duracao: number
    private codigo: string

    constructor(nome: string, preco: number, duracao: number, codigo: string) {
        this.nome = nome
        this.preco = preco
        this.duracao = duracao
        this.codigo = codigo
    }

    public get getCodigo(): string {
        return this.codigo
    }

    public setNome(novoNome: string): void {
        this.nome = novoNome
    }

    public setPreco(novoPreco: number): void {
        this.preco = novoPreco
    }

    public setDuracao(novaDuracao: number): void {
        this.duracao = novaDuracao
    }
}