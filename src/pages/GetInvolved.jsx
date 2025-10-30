import * as React from 'react';
import {Typography, Button, Stack} from '@mui/material';
import Section from '../components/Section';
import {links} from '../data/links';


export default function GetInvolved() {
    return (
        <Section title="Get involved" subtitle="Issues, reviews, tests — vendors welcome for reference boards">
            <Typography color="text.secondary">Start with the roadmap, pick an issue, or propose an RFC. Vendors with
                RISC-V boards are invited to collaborate on reference support.</Typography>
            <Stack direction="row" spacing={2} sx={{mt: 2}}>
                <Button href={links.repo} target="_blank">Star the repo</Button>
                <Button variant="outlined" href="mailto:contact@example.org">Email</Button>
            </Stack>
        </Section>
    );
}