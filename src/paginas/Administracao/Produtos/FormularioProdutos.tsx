import { Box, Button, TextField, Typography } from "@mui/material"
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import IProdutos from "../../../interfaces/IProdutos"
import http from "../../../http"

const FormularioProdutos = () => {

    const parametros = useParams()

    useEffect(() => {
        if (parametros.id) {
            http.get<IProdutos>(`produtos/${parametros.id}`)
                .then(resposta => setNomeProduto(resposta.data.nome))
        }
    }, [parametros])

    const [nomeProduto, setNomeProduto] = useState('')
    const [descricaoProduto, setDescricaoProduto] = useState('')
    const [precoProduto, setPrecoProduto] = useState('')

    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        if (parametros.id) {
            http.put(`produtos/${parametros.id}`, {
                nome: nomeProduto,
                descricao: descricaoProduto,
                preco: precoProduto
            })
                .then(() => {
                    alert("Restaurante atualizado com sucesso!")
                })
        } else {
            http.post("produtos", {
                nome: nomeProduto,
                descricao: descricaoProduto,
                preco: precoProduto
            })
                .then(() => {
                    alert("Restaurante cadastrado com sucesso!")
                })
        }
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: "column", alignItems: "center" }}>
            <Typography variant="h3" gutterBottom>Formulário</Typography>
            <Box sx={{ justifyItems: "center" }} component={'form'} onSubmit={aoSubmeterForm}>
                <TextField
                    value={nomeProduto}
                    onChange={evento => setNomeProduto(evento.target.value)}
                    label="Nome Produto"
                    variant="outlined"
                    fullWidth
                    required
                />
                <TextField
                    value={descricaoProduto}
                    onChange={evento => setDescricaoProduto(evento.target.value)}
                    label="Descrição Produto"
                    variant="outlined"
                    fullWidth
                    required
                />
                <TextField
                    value={precoProduto}
                    onChange={evento => setPrecoProduto(evento.target.value)}
                    label="Preço Produto"
                    variant="outlined"
                    fullWidth
                    required
                />
                <Button sx={{ marginTop: 2 }} type="submit" variant="contained" fullWidth> Atualizar </Button>
            </Box>
        </Box>
    )
}

export default FormularioProdutos;