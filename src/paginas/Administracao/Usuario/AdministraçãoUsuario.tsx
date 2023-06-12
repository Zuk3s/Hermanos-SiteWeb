import { Paper, TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import http from "../../../http";
import IUsurarios from "../../../interfaces/IUsuarios";

const AdministracaoUsuarios = () => {

    const [usuarios, setUsuarios] = useState<IUsurarios[]>([])

    useEffect(() => {
        http.get<IUsurarios[]>("usuarios")
            .then(resposta => setUsuarios(resposta.data))
    }, [])

    const excluir = (usuarioAserExcluido: IUsurarios) => {
        http.delete(`usuarios/${usuarioAserExcluido.cpf}`)
            .then(() => {
                const listaUsuarios = usuarios.filter(usuario => usuario.cpf !== usuarioAserExcluido.cpf)
                setUsuarios([...listaUsuarios])
            })
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell><strong>CPF</strong></TableCell>
                        <TableCell>User</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell align="right">Editar</TableCell>
                        <TableCell align="right">Deletar</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {usuarios.map((usuario, index) => (
                        <TableRow key={index}>
                            <TableCell>{usuario.cpf}</TableCell>
                            <TableCell>{usuario.nome}</TableCell>
                            <TableCell>{usuario.email}</TableCell>
                            <TableCell align="right">
                                <Link to={`/admin/usuarios/${usuario.cpf}`}>
                                    <Button>Editar</Button>
                                </Link>
                            </TableCell>
                            <TableCell align="right">
                                <Button variant="outlined" color="error" onClick={() => excluir(usuario)}>
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AdministracaoUsuarios;