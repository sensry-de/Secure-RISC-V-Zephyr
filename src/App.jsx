import * as React from 'react';
import { useLocation, Link, Outlet } from "react-router-dom";

import {
    AppBar, Toolbar, Typography, Container, Button, Stack, IconButton, Menu, MenuItem, useMediaQuery, Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
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
            <AppBar position="sticky" color="inherit" elevation={1} sx={{backgroundColor: '#333f67', color: 'white'}}>
                <Toolbar>
                    <Box
                        component="img"
                        src="/project_logo.png"
                        alt="Project logo"
                        sx={{height: 40, width: 'auto', mr: 2}}
                    />
                    <Box sx={{flexGrow: 1}}>
                        <Typography variant="h6" sx={{fontWeight: 700}}>Secure RISC-V Zephyr</Typography>
                        <Stack direction="row" spacing={1} alignItems="center"
                               sx={{mt: 0.5, display: {xs: 'none', sm: 'flex'}}}>
                            <Typography variant="caption" sx={{color: 'rgba(255,255,255,0.8)'}}>
                                Contributing upstream to Zephyr
                            </Typography>
                            <Box component="img" src="/zephyr-logo.svg" alt="Zephyr logo" sx={{height: 16, width: 'auto'}}/>
                        </Stack>
                    </Box>
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
                        <Stack direction="row" spacing={0.5}>
                            {NAV.map((n) => {
                                const active = location.pathname === n.to;
                                return (
                                    <Button
                                        key={n.to}
                                        component={Link}
                                        to={n.to}
                                        variant="text"
                                        sx={{
                                            color: active ? '#ffffff' : 'rgba(255,255,255,0.75)',
                                            fontWeight: active ? 700 : 500,
                                            borderBottom: active ? '2px solid rgba(255,255,255,0.9)' : '2px solid transparent',
                                            borderRadius: 0,
                                            px: 1.5,
                                            '&:hover': {
                                                backgroundColor: 'rgba(255,255,255,0.12)',
                                                color: '#ffffff'
                                            }
                                        }}
                                    >
                                        {n.label}
                                    </Button>
                                );
                            })}
                            <Button
                                component={'a'}
                                href={links.repo}
                                target="_blank"
                                variant="text"
                                startIcon={<GitHubIcon/>}
                                sx={{
                                    color: 'rgba(255,255,255,0.75)',
                                    borderRadius: 0,
                                    px: 1.5,
                                    '&:hover': {
                                        backgroundColor: 'rgba(255,255,255,0.12)',
                                        color: '#ffffff'
                                    }
                                }}
                            >
                                Repo
                            </Button>
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
