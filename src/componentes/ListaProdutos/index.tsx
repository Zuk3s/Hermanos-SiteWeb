import { useEffect, useState } from 'react';
import IProdutos from '../../interfaces/IProdutos';
import Produto from './Produto';
import http from '../../http';
import "../../index.css"

const ListaProdutos = () => {

  const [produtos, setProdutos] = useState<IProdutos[]>([])

  useEffect(() => {
    http.get(`produtos`)
      .then(resposta => {
        setProdutos(resposta.data)
      })
      .catch(erro => {
        console.log(erro)
      })
  }, [])

  return (
    <div className="m-5 d-flex flex-column">
      <h1 className="display-6 fw-bold">Produtos</h1>
      <div className="d-flex flex-row overflow-x-auto">
        {produtos?.map((item, index) => (
          <div className='produto mx-2' key={index}>
            <Produto produto={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListaProdutos