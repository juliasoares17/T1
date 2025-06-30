export default class Produto {
    public nome: string
    public preco: number
    private codigo: string

    constructor(nome: string, preco: number, codigo: string) {
        this.nome = nome
        this.preco = preco
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
}