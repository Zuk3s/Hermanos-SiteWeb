import Cart from "../assets/cart_.png"
import User from "../assets/User.png"
import Logo from "../assets/logoComSimbolo.png"
import { Link } from "react-router-dom"
import FormularioLogin from "../FormLogin"
import { useState } from "react"

const NavBar = () => {

  const [usuarioLogado, setUsuarioLogado] = useState(false)

  return (
    <nav className="bg-nav">
      <div className="d-flex flex-row justify-content-around align-items-center py-3 limite">
        <div className="nav fs-7" style={{width: 200}}>
          {!usuarioLogado && (
            <>
              <a type="button" className="nav-item text-dark Hammer" data-bs-toggle="modal" data-bs-target="#ModalLogin">Entrar</a>
              <div className="modal modal-xl fade" id="ModalLogin" tabIndex={-1} aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <FormularioLogin />
              </div>
            </>
          )}
          {usuarioLogado && (
            <>
              <div className="d-flex gap-2 align-items-center">
                <img className="rounded" width={48} src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" alt="Usuário" />
                <p className="font-monospace fs-6 m-0">Nome</p>
              </div>
            </>
          )}
        </div>

        <img src={Logo} alt="Logo" className="logo object-fit-scale"></img>

        <ul className="navbar-nav d-flex flex-row gap-4 Hammer fs-7 fw-bold">
          <li className="nav-item">
            <Link to={''} className="nav-link d-flex align-items-end gap-1"><img src={Cart} alt="Carrinho"></img>Carrinho</Link>
          </li>
          <li className="nav-item">
            <Link to={'/admin'} className="nav-link d-flex align-items-end gap-1"><img src={User} alt="User"></img>Admin</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar