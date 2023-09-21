import Cart from "../assets/cart_.png"
import Search from "../assets/search_.png"
import Heart from "../assets/heart_.png"
import User from "../assets/User.png"
import Logo from "../assets/noNickLogo1.png"
import { Link } from "react-router-dom"
import FormularioLogin from "../FormLogin"
import { useState } from "react"

const NavBar = () => {

  const [usuarioLogado, setUsuarioLogado] = useState(false)

  return (
    <nav className="px-lg-4 navbar navbar-expand-lg justify-content-between align-items-center bg-white-blue">
      <div className="container-fluid py-2">
        <div className="col nav">
          {!usuarioLogado && (
            <>
              <a type="button" className="nav-link text-dark" data-bs-toggle="modal" data-bs-target="#ModalLogin">Entrar</a>
              <div className="modal modal-xl fade" id="ModalLogin" tabIndex={-1} aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <FormularioLogin />
              </div>
            </>
          )}
          {usuarioLogado && (
            <>
              <div className="d-flex gap-2 align-items-center">
                <img className="rounded" width={48} src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" alt="Usuário"/>
                <p className="font-monospace fs-6 m-0">Nome</p>
              </div>
            </>
          )}


        </div>

        <a href="#"><img src={Logo} alt="Logo" width={200} className="object-fit-scale" ></img></a>


        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="col offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link" ><img src={Search} alt="Search"></img></a>
              </li>
              <li className="nav-item">
                <Link to={''} className="nav-link active"><img src={Cart} alt="Carrinho"></img></Link>
              </li>
              <li className="nav-item">
                <a className="nav-link"><img src={Heart} alt="Heart"></img></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar