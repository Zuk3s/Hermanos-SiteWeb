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
                .then(resposta => {
                    if (resposta.data) {
                        setNomeProduto(resposta.data.nome || '');
                        setDescricaoProduto(resposta.data.descricao || '');
                        setPrecoProduto(String(resposta.data.preco) || '');
                        setQntProduto(String(resposta.data.qtdDisponivel) || '');
                        setImagemProduto(String(resposta.data.urlImagem) || '');
                    }
                });
        }
    }, [parametros])

    const [nomeProduto, setNomeProduto] = useState('')
    const [descricaoProduto, setDescricaoProduto] = useState('')
    const [precoProduto, setPrecoProduto] = useState('')
    const [qntProduto, setQntProduto] = useState('')
    const [urlImagemProduto, setImagemProduto] = useState('')

    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        if (parametros.id) {
            http.put(`produtos/${parametros.id}`, {
                nome: nomeProduto,
                descricao: descricaoProduto,
                preco: precoProduto,
                qtdDisponivel: qntProduto,
                urlImagem: urlImagemProduto
            })
                .then(() => {
                    alert("Produto atualizado com sucesso!")
                })
        } else {
            http.post("produtos", {
                nome: nomeProduto,
                descricao: descricaoProduto,
                preco: precoProduto,
                qtdDisponivel: qntProduto,
                urlImagem: urlImagemProduto
            })
                .then(() => {
                    setNomeProduto('')
                    setDescricaoProduto('')
                    setPrecoProduto('')
                    setNomeProduto('')
                    setImagemProduto('')
                    alert("Produto cadastrado com sucesso!")
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
                    sx={{ marginY: "5px" }}
                />
                <TextField
                    value={descricaoProduto}
                    onChange={evento => setDescricaoProduto(evento.target.value)}
                    label="Descrição Produto"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ marginY: "5px" }}
                />
                <TextField
                    value={precoProduto}
                    onChange={evento => setPrecoProduto(evento.target.value)}
                    label="Preço Produto"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ marginY: "5px" }}
                />
                <TextField
                    value={qntProduto}
                    onChange={evento => setQntProduto(evento.target.value)}
                    label="Quantidade"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ marginY: "5px" }}
                />
                <TextField
                    value={urlImagemProduto}
                    onChange={evento => setImagemProduto(evento.target.value)}
                    label="Url da imagem"
                    variant="outlined"
                    fullWidth
                    sx={{ marginY: "5px" }}
                />
                {/* 
                <Paper>
                    <div className="my-2 p-2">
                        <label htmlFor="formFile" className="form-label">Imagem do produto:</label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                </Paper>
                */}
                <Button sx={{ marginTop: 2 }} type="submit" variant="contained" fullWidth> Salvar </Button>
            </Box>
        </Box>
    )
}

export default FormularioProdutos;