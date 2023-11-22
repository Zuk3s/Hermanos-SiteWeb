import "./../../index.css"
import "./Form.css"
import { useEffect, useState } from "react"
import http from "../../http"

const FormularioLogin = () => {


    const [cpfUsuario, setCpfUsuario] = useState('')
    const [nomeUsuario, setNomeUsuario] = useState('')
    const [emailUsuario, setEmailUsuario] = useState('')
    const [senhaUsuario, setSenhaUsuario] = useState('')
    const [token, setToken] = useState('')

    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        http.post("usuarios", {
            cpf: cpfUsuario,
            nome: nomeUsuario,
            email: emailUsuario,
            senha: senhaUsuario

        })
            .then((resposta) => {
                setToken(resposta.data.token)
                evento.currentTarget.reset()
                alert("Usuario cadastrado com sucesso!")
            })
            .catch( error => {
                console.error('Erro ao cadastrar usuário', error)
            })
    }

    const handleRegisterClick = () => {
        const container = document.getElementById('container');
        container?.classList.add('active');
    };

    const handleLoginClick = () => {
        const container = document.getElementById('container');
        container?.classList.remove('active');
    };

    useEffect(() => {
        const registerBtn = document.getElementById('register');
        const loginBtn = document.getElementById('login');

        registerBtn?.addEventListener('click', handleRegisterClick);
        loginBtn?.addEventListener('click', handleLoginClick);

        return () => {
            registerBtn?.removeEventListener('click', handleRegisterClick);
            loginBtn?.removeEventListener('click', handleLoginClick);
        };
    }, []);

    return (
        <div className="modal-dialog-centered">
            <div className="container" id="container">
                <div className="form-container sign-up">
                    <form onSubmit={aoSubmeterForm}>
                        <h1>Crie sua conta</h1>
                        <p>Preencha com seus dados</p>
                        <input type="text" id="CPF" placeholder="CPF" value={cpfUsuario} onChange={evento => setCpfUsuario(evento.target.value)} required/>
                        <input type="text" id="Nome" placeholder="Name" value={nomeUsuario} onChange={evento => setNomeUsuario(evento.target.value)} required/>
                        <input type="email" id="Email" placeholder="Email" value={emailUsuario} onChange={evento => setEmailUsuario(evento.target.value)} required/>
                        <input type="password" id="Password" placeholder="Password" value={senhaUsuario} onChange={evento => setSenhaUsuario(evento.target.value)} required/>
                        <button type="submit" className="btn btn-dark" onClick={handleRegisterClick}>Cadastrar</button>
                    </form>
                </div>
                <div className="form-container sign-in">
                    <form>
                        <h1>Login</h1>
                        <p>Preencha seus dados para entrar</p>
                        <input type="email" id="checkedEmail" placeholder="Email" value={emailUsuario} onChange={evento => setEmailUsuario(evento.target.value)} required/>
                        <input type="password" id="checkedPassword" placeholder="Password" value={senhaUsuario} onChange={evento => setSenhaUsuario(evento.target.value)} required/>
                        <button className="btn btn-dark" onClick={handleLoginClick}>Entrar</button>
                    </form>
                </div>
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Olá, Hermano!</h1>
                            <p>Acesse sua conta para ter acesso total à loja</p>
                            <button className="hidden btn btn-lg btn-outline-light" id="login" >Entrar</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1>Bem-Vindo, Hermano!</h1>
                            <p>Cadastre-se para obter total acesso ao site</p>
                            <button className="hidden btn btn-lg btn-outline-light" id="register">Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormularioLogin;