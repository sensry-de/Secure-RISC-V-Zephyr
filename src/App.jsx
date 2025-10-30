import * as React from 'react';
import { useLocation, Link, Outlet } from "react-router-dom";

import {
    AppBar, Toolbar, Typography, Container, Button, Stack, IconButton, Menu, MenuItem, useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import ShieldIcon from '@mui/icons-material/Shield';
import {links} from './data/links';


const NAV = [
    {to: '/', label: 'Home'},
    {to: '/why', label: 'Why'},
    {to: '/scope', label: 'Scope'},
    {to: '/roadmap', label: 'Roadmap'},
    {to: '/community', label: 'Community'},
    {to: '/docs', label: 'Docs'},
    {to: '/get-involved', label: 'Get involved'},
];


export default function App() {
    const isSmall = useMediaQuery('(max-width:900px)');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const location = useLocation();


    return (
        <>
            <AppBar position="sticky" color="inherit" elevation={1}>
                <Toolbar>
                    <ShieldIcon sx={{mr: 1}}/>
                    <Typography variant="h6" sx={{flexGrow: 1, fontWeight: 700}}>Secure RISC-V Zephyr</Typography>
                    {isSmall ? (
                        <>
                            <IconButton color="inherit" onClick={(e) => setAnchorEl(e.currentTarget)}>
                                <MenuIcon/>
                            </IconButton>
                            <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
                                {NAV.map((n) => (
                                    <MenuItem key={n.to} component={Link} to={n.to} onClick={() => setAnchorEl(null)}
                                              selected={location.pathname === n.to}>
                                        {n.label}
                                    </MenuItem>
                                ))}
                                <MenuItem component={'a'} href={links.repo} target="_blank" rel="noreferrer">
                                    <GitHubIcon fontSize="small" style={{marginRight: 8}}/> Repo
                                </MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <Stack direction="row" spacing={1}>
                            {NAV.map((n) => (
                                <Button key={n.to} component={Link} to={n.to}
                                        color={location.pathname === n.to ? 'primary' : 'inherit'}>{n.label}</Button>
                            ))}
                            <Button component={'a'} href={links.repo} target="_blank"
                                    startIcon={<GitHubIcon/>}>Repo</Button>
                        </Stack>
                    )}
                </Toolbar>
            </AppBar>


            <Container className="container" sx={{py: 4}}>
                <Outlet/>
            </Container>


            <Container sx={{py: 6}}>
                <Stack direction={{xs: 'column', sm: 'row'}} justifyContent="space-between"
                       alignItems={{xs: 'flex-start', sm: 'center'}} spacing={2}>
                    <Typography variant="body2">© {new Date().getFullYear()} Secure RISC-V Zephyr —
                        Apache-2.0</Typography>
                    <Stack direction="row" spacing={2}>
                        <Button size="small" component={Link} to="/why">Why</Button>
                        <Button size="small" component={Link} to="/roadmap">Roadmap</Button>
                        <Button size="small" href={links.repo} target="_blank" startIcon={<GitHubIcon/>}>GitHub</Button>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
}