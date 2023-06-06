import { Paper, TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Button } from "@mui/material";
import { useEffect, useState } from "react";
import IProdutos from "../../../interfaces/IProdutos";
import { Link } from "react-router-dom";
import http from "../../../http";

const AdministracaoProdutos = () => {

    const [produtos, setProdutos] = useState<IProdutos[]>([])

    useEffect(() => {
        http.get<IProdutos[]>("produtos")
            .then(resposta => setProdutos(resposta.data))
    }, [])

    const excluir = (produtoAserExcluido: IProdutos) => {
        http.delete(`produtos/${produtoAserExcluido.id}`)
            .then(() => {
                const listaProdutos = produtos.filter(produtos => produtos.id !== produtoAserExcluido.id)
                setProdutos([...listaProdutos])
            })
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell><strong>id</strong></TableCell>
                        <TableCell>Produto</TableCell>
                        <TableCell>Qnt</TableCell>
                        <TableCell align="right">Editar</TableCell>
                        <TableCell align="right">Deletar</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {produtos.map(produto =>
                        <TableRow key={produto.id}>
                            <TableCell>{produto.id}</TableCell>
                            <TableCell>{produto.nome}</TableCell>
                            <TableCell>{produto.qtdDisponivel}</TableCell>
                            <TableCell align="right"><Link to={`/admin/restaurantes/${produto.id}`}><Button>Editar</Button></Link></TableCell>
                            <TableCell align="right">
                                <Button variant="outlined" color="error" onClick={() => excluir(produto)}>
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AdministracaoProdutos;