import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import './styles.css';
import App from './App';
import Home from './pages/Home';
import Why from './pages/Why';
import Scope from './pages/Scope';
import Roadmap from './pages/Roadmap';
import Community from './pages/Community';
import Docs from './pages/Docs';
import GetInvolved from './pages/GetInvolved';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: 'why', element: <Why /> },
            { path: 'scope', element: <Scope /> },
            { path: 'roadmap', element: <Roadmap /> },
            { path: 'community', element: <Community /> },
            { path: 'docs', element: <Docs /> },
            { path: 'get-involved', element: <GetInvolved /> },
        ],
    },
]);


createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
);