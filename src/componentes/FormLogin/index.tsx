import "./login.css"
import LogoWhite from "../assets/logoWhite.png"
import { useState } from "react"
import http from "../../http"
import { Link } from "react-router-dom"

const FormularioLogin = () => {


    const [cpfUsuario, setCpfUsuario] = useState('')
    const [nomeUsuario, setNomeUsuario] = useState('')
    const [emailUsuario, setEmailUsuario] = useState('')
    const [senhaUsuario, setSenhaUsuario] = useState('')

    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        http.post("usuarios", {
            cpf: cpfUsuario,
            nome: nomeUsuario,
            email: emailUsuario,
            senha: senhaUsuario

        })
            .then(() => {
                setCpfUsuario('')
                setNomeUsuario('')
                setEmailUsuario('')
                setSenhaUsuario('')
                alert("Usuario cadastrado com sucesso!")
            })
    }

    return (
        <div className="modal-dialog modal-dialog-centered modal-fullscreen-lg-down">
            <div className="modal-content">
                <div className="d-xl-flex justify-content-center">
                    <div className="col-xl-5 text-light text-center rounded-start-4 bg-preto">
                        <div className="d-flex flex-column p-5 gap-5 m-auto col-xl-10">
                            <button type="button" className="btn-close position-absolute d-xl-none bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            <img className="rounded mx-auto" src={LogoWhite} alt="Image" />
                            <div className="my-5">
                                <h2 className="m-0"><strong>Seja bem-vindo!!</strong></h2>
                                <p>Acesse sua conta para comprar novos produtos!!</p>
                            </div>
                            <div className="my-4">
                                <Link to={""} className="btn btn-lg btn-outline-light rounded-4 mb-4"><h3 className="m-1 px-4">Entrar</h3></Link>
                                <p>
                                    <a href=""
                                        className="link-offset-2 link-offset-3-hover link-underline-opacity-0 link-underline-opacity-75-hover link-light link-underline-light">
                                        Esqueci minha senha.
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 text-dark text-center rounded-end-4 bg-branco-amarelado">
                        <div className="d-flex flex-column p-4 gap-5 m-auto col-md-10">
                            <button type="button" className="btn-close position-absolute end-0 d-none d-xl-block" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div className="my-3">
                                <h2 className="m-0"><strong>Crie sua conta</strong></h2>
                                <p>Preencha seus dados</p>
                            </div>
                            <form className="d-flex flex-column justify-content-center p-0" onSubmit={aoSubmeterForm}>
                                <div className="form-floating mb-3">
                                    <input type="name" id="CPF" className="form-control" value={cpfUsuario} onChange={evento => setCpfUsuario(evento.target.value)} placeholder="CPF" required />
                                    <label htmlFor="CPF">CPF</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="name" id="Nome" className="form-control" value={nomeUsuario} onChange={evento => setNomeUsuario(evento.target.value)} placeholder="Nome" required />
                                    <label htmlFor="Nome">Nome de Usuário</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="name" id="Email" className="form-control" value={emailUsuario} onChange={evento => setEmailUsuario(evento.target.value)} placeholder="name@example.com" required />
                                    <label htmlFor="Email">Email</label>
                                </div>
                                <div className="form-floating">
                                    <input type="password" id="Password" className="form-control" value={senhaUsuario} onChange={evento => setSenhaUsuario(evento.target.value)} placeholder="Password" required />
                                    <label htmlFor="Password">Senha</label>
                                </div>
                                <button type="submit" className="mt-4 btn btn-dark btn-lg rounded-4 col-md-4 py-2 m-auto">
                                    <h3>Cadastre-se</h3>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormularioLogin;