import IProdutos from '../../../interfaces/IProdutos';

interface ProtudoProps {
  produto: IProdutos
}

const Produto = ({ produto }: ProtudoProps) => {
  return (
    <div className="rounded-3 d-flex flex-column produto">
      <div className='imagem-produto rounded-top-3'>
        <img
          src={produto.urlImagem}
          className="img-fluid conf-imagem"
          alt="Imagem"
        />
      </div>
      <div className="Card-Titulo pt-2">
        <h5 className="fs-4 text-center">{produto.nome}</h5>
      </div>
      <div className='Card-Descrição rounded-3'>
        <div className='h-80 d-flex flex-column align-items-start justify-content-between mx-4'>
          <div>
            <h3 className='fs-2'>Descrição</h3>
            <p className='fs-8 Hammer text-break font-monospace'>{produto.descricao}</p>
          </div>
          <div className='d-flex justify-content-between Hammer w-100'>
            <p className="text-end align-self-end fs-5 ">R${produto.preco},00</p>
            <button className='btn btn-outline-light p-2 px-4' type='button'>
              Carrinho <span className='ms-1 span-text'>+</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Produto