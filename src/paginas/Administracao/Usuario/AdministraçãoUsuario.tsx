import { Paper, TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Button } from "@mui/material";
import { useEffect, useState } from "react";
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
        <TableContainer component={Paper} sx={{ marginY: 7 }}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>User</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell align="right">Deletar</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {usuarios.map((usuario, index) => (
                        <TableRow key={index}>
                            <TableCell>{usuario.nome}</TableCell>
                            <TableCell>{usuario.email}</TableCell>
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