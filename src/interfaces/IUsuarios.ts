import ICarrinhos from "./ICarrinhos"
import IPedidos from "./IPedidos"

export default interface IUsurarios {
    cpf: string
    nome: string
    email: string
    senha: string
    pedidos: IPedidos[]
    carrinho: ICarrinhos[]
}