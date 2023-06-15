import { Box, Button, Paper, TextField, Typography } from "@mui/material"
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import http from "../../../http"
import IUsurarios from "../../../interfaces/IUsuarios"

const FormularioUsuario = () => {

    const parametros = useParams()

    useEffect(() => {
        if (parametros.cpf) {
            http.get<IUsurarios>(`usuarios/${parametros.cpf}`)
                .then(resposta => setNomeUsuario(resposta.data.nome));
        }
    }, [parametros])

    const [cpfUsuario, setCpfUsuario] = useState('')
    const [nomeUsuario, setNomeUsuario] = useState('')
    const [emailUsuario, setEmailUsuario] = useState('')
    const [senhaUsuario, setSenhaUsuario] = useState('')

    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        if (parametros.cpf) {
            http.put(`usuarios/${parametros.cpf}`, {
                cpf: cpfUsuario,
                nome: nomeUsuario,
                email: emailUsuario,
                senha: senhaUsuario
            })
                .then(() => {
                    alert("Usuario atualizado com sucesso!")
                })
        } else {
            http.post("usuarios", {
                cpf: cpfUsuario,
                nome: nomeUsuario,
                email: emailUsuario,
                senha: senhaUsuario
            })
                .then(() => {
                    alert("Usuário cadastrado com sucesso!")
                })
        }
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: "column", alignItems: "center" }}>
            <Typography variant="h3" gutterBottom>Formulário</Typography>
            <Box sx={{ justifyItems: "center" }} component={'form'} onSubmit={aoSubmeterForm}>
                <TextField
                    value={cpfUsuario}
                    onChange={evento => setCpfUsuario(evento.target.value)}
                    label="CPF"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ marginY: "5px" }}
                />
                <TextField
                    value={nomeUsuario}
                    onChange={evento => setNomeUsuario(evento.target.value)}
                    label="Nome"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ marginY: "5px" }}
                />
                <TextField
                    value={emailUsuario}
                    onChange={evento => setEmailUsuario(evento.target.value)}
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ marginY: "5px" }}
                />
                <TextField
                    value={senhaUsuario}
                    onChange={evento => setSenhaUsuario(evento.target.value)}
                    label="Senha"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ marginY: "5px" }}
                />
                <Button sx={{ marginTop: 2 }} type="submit" variant="contained" fullWidth> Salvar </Button>
            </Box>
        </Box>
    )
}

export default FormularioUsuario;