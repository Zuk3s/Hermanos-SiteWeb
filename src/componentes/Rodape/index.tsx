import Instagram from "../assets/instagram_.png"
import Twitter from "../assets/twitter_.png"
import Logo from "../assets/logoWhite.png"
import "./Rodape.css"

const NavBar = () => {
  return (
    <section className="color-footer bg-rodape sticky-bottom">
      <section className="m-5 p-4 m-lg-0">
        <div className="mt-3 mb-2 d-flex flex-wrap gap-5 justify-content-evenly align-items-top">
          <img src={Logo} className="mb-3 justify-content-center object-fit-scale" alt="logo" style={{maxWidth: 200}}></img>

          <nav className="d-flex flex-column gap-2">
            <h6 className="nav-link">Suporte</h6>
            <div>
              <a href="" className="nav-link link-decoration">
                <p className="fs-7">Telefone</p>
              </a>
              <a href="" className="nav-link link-decoration">
                <p className="fs-7">Email</p>
              </a>
            </div>
          </nav>
          <nav className="d-flex flex-column gap-2">
            <h6 className="nav-link fs-bold">Sobre</h6>
            <div>
              <a href="" className="nav-link link-decoration">
                <p className="fs-7">Informações da empresa</p>
              </a>
              <a href="" className="nav-link link-decoration">
                <p className="fs-7">Contato</p>
              </a>
            </div>
          </nav>
          <nav className="d-flex flex-column gap-2">
            <h6 className="nav-link">Redes Sociais</h6>
            <div className="d-flex flex-row gap-3">
              <a className="nav-link" href="/"><img src={Instagram} alt="Instagram"></img></a>
              <a className="nav-link" href="/"><img src={Twitter} alt="twitter"></img></a>
            </div>
          </nav>
        </div>
      </section>
    </section>
  )
}

export default NavBar