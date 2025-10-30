import * as React from 'react';
import {Box, Typography} from '@mui/material';


export default function Section({title, subtitle, children}) {
    return (
        <Box className="section">
            <Typography variant="h4" gutterBottom>{title}</Typography>
            {subtitle && <Typography color="text.secondary" sx={{mb: 2}}>{subtitle}</Typography>}
            {children}
        </Box>
    );
}