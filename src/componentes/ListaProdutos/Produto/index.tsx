import IProdutos from '../../../interfaces/IProdutos';

interface ProtudoProps {
  produto: IProdutos
}

const Produto = ({ produto }: ProtudoProps) => {
  return (
    <div className="card rounded-0 d-flex flex-row" style={{ width: '35rem', height: '25.1rem'}}>
      <div style={{ position: 'relative', overflow: 'hidden', height: '400px' }}>
        <img
          src={produto.urlImagem}
          className="img-fluid"
          style={{ objectFit: 'cover', height: '100%' }}
          alt="Imagem"
        />
      </div>
      <div className="card-body ps-4 pb-3 bg-white-blue d-flex flex-column" style={{width: "25rem"}}>
        <h5 className="card-title fw-bolder fs-5">{produto.nome}</h5>
        <p className="card-text">{produto.descricao}</p>
        <p className="card-text fw-bold text-end mt-auto">R${produto.preco},00</p>
      </div>
    </div>
  )
}

export default Produto