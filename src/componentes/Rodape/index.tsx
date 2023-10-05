import Instagram from "../assets/instagram_.png"
import Twitter from "../assets/twitter_.png"
import Logo from "../assets/logoWhite.png"
import "./Rodape.css"

const NavBar = () => {
  return (
    <section className="color-footer bg-rodape limite">
      <section className="padding">
        <div className="d-flex justify-content-evenly">
          <img src={Logo} className="object-fit-scale logo" alt="logo"></img>

          <nav className="d-flex flex-column gap-2">
            <h6 className="nav-link fs-5">Suporte</h6>
            <div>
              <p className="nav-link m-0">
                <a href="/" className="link-decoration">Telefone</a>
              </p>
              <p className="nav-link m-0">
                <a href="/" className="link-decoration">Email</a>
              </p>
            </div>
          </nav>
          <nav className="d-flex flex-column gap-2">
            <h6 className="nav-link fs-5">Sobre</h6>
            <div>
              <p className="nav-link m-0">
                <a href="/" className="link-decoration">Informações da empresa</a>
              </p>
              <p className="nav-link m-0">
                <a href="/" className="link-decoration">Contato</a>
              </p>
            </div>
          </nav>
          <nav className="d-flex flex-column gap-2">
            <h6 className="nav-link fs-5">Redes Sociais</h6>
            <div className="d-inline-flex gap-3">
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