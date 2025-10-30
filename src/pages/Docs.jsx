import * as React from 'react';
import {Button, Stack, Typography} from '@mui/material';
import Section from '../components/Section';
import {links} from '../data/links';


export default function Docs() {
    return (
        <Section title="Documentation" subtitle="Docs live in-repo under docs/ (Sphinx/ReST)">
            <Typography color="text.secondary">We provide: Security Guide, Porting Guide, Architecture notes, and CI
                how-tos. A rendered site can be published via GitHub Pages.</Typography>
            <Stack direction="row" spacing={2} sx={{mt: 2}}>
                <Button variant="outlined" href={links.repo} target="_blank">Repository</Button>
                <Button variant="outlined" href={links.issues} target="_blank">Open issues</Button>
                <Button variant="outlined" href={links.discussions} target="_blank">Discussions</Button>
            </Stack>
        </Section>
    );
}