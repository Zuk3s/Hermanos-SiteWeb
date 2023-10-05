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
    <div className="d-flex flex-column justify-content-center container-fluid lista-produtos limite py-3">
      <h1 className="display-6 fw-bold">Produtos</h1>
      <div className="d-flex">
        {produtos?.map((item, index) => (
          <div className='produto me-2' key={index}>
            <Produto produto={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListaProdutos