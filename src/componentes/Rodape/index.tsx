import Instagram from "../assets/instagram_.png"
import Twitter from "../assets/twitter_.png"
import WhiteLogo from "../assets/logoWhite.png"
import "./Rodape.css"

const NavBar = () => {
  return (
    <section className="color-footer bg-rodape">
      <section className="m-5 m-lg-0 ">
        <div className="pt-5 row row-cols-5 row-cols-md-5 g-0">
          <img src={WhiteLogo} className="pb-5 mx-5 col-10 col-md justify-content-center" alt="logo"></img>

          <nav className="d-flex flex-column col-4 gap-2">
            <h6 className="nav-link">Suporte</h6>
            <div>
              <p className="nav-link link-decoration">Telefone</p>
              <p className="nav-link link-decoration">Email</p>
            </div>
          </nav>

          <nav className="d-flex flex-column col-5 gap-2">
            <h6 className="nav-link">Sobre a NoNick</h6>
            <div>
              <p className="nav-link link-decoration">Informações da empresa</p>
              <p className="nav-link link-decoration">Contato</p>
            </div>
          </nav>

          <nav className="d-flex flex-column col-3 gap-2">
            <h6 className="nav-link">Redes Sociais</h6>
            <div className="d-flex flex-row gap-3">
              <a className="nav-link" href="/"><img src={Instagram} alt="Instagram"></img></a>
              <a className="nav-link" href="/"><img src={Twitter} alt="twitter"></img></a>
            </div>
          </nav>
        </div>
      </section>
      <footer id="linha" className="d-flex flex-row align-items-center container-fluid">
        <h1 className="fs-5 pt-1 col-7 d-flex justify-content-end">
          &copy;2023 NoNick
        </h1>
        <nav className="col-sm d-flex flex-row gap-3 justify-content-end">
          <p className="nav-link fs-7">Política de privacidade</p>
          <p className="nav-link fs-7">Termos de uso</p>
        </nav>
      </footer>
    </section>
  )
}

export default NavBar