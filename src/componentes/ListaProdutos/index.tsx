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
    <div className='lista-produtos limite my-5 d-flex flex-column gap-3'>
      <h1 className="display-6 fw-bold">Produtos</h1>
      <div className="conteiner-produtos d-flex flex-wrap gap-4">
        {produtos?.map((item, index) => (
          <Produto produto={item} key={index} />
        ))}
      </div>
    </div>
  )
}


export default ListaProdutos