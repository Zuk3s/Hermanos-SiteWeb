import { AppBar, Box, Button, Container, Link, Toolbar } from "@mui/material"
import { Outlet, Link as RouterLink } from "react-router-dom";


const NavBarAdmin = () => {
    return (
        <>
            <AppBar sx={{position: "static", backgroundColor: "#323232"}}>
                <Container maxWidth='xl'>
                    <Toolbar>
                        <Box>
                            <Link component={RouterLink} to={'/'}>
                                <Button sx={{ color: 'white' }}>Home</Button>
                            </Link>
                        </Box>
                        <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: "right" }} >
                            <Box>
                                <Link component={RouterLink} to={'/admin/produtos'}>
                                    <Button sx={{ m: 2, color: 'white' }}>Produtos</Button>
                                </Link>
                                <Link component={RouterLink} to={'/admin/produtos/novo'}>
                                    <Button sx={{ m: 2, color: 'white' }}>Novos Produtos</Button>
                                </Link>
                            </Box>
                            <Box>
                                <Link component={RouterLink} to={'/admin/usuarios'}>
                                    <Button sx={{ m: 2, color: 'white' }}>Usuarios</Button>
                                </Link>
                                <Link component={RouterLink} to={'/admin/usuarios/novo'}>
                                    <Button sx={{ m: 2, color: 'white' }}>Novos Usuarios</Button>
                                </Link>
                            </Box>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box>
                <Container maxWidth='lg' sx={{ mt: 1 }}>
                    <Outlet />
                </Container>
            </Box>
        </>
    )
}

export default NavBarAdmin;