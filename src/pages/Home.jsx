import * as React from 'react';
import {Box, Stack, Typography, Button, Grid, Link as MuiLink} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LayersIcon from '@mui/icons-material/Layers';
import {valueProps} from '../data/valueProps';
import StatCard from '../components/StatCard';
import {workPackages} from '../data/workPackages';
import {links} from '../data/links';


export default function Home() {
    const totalHours = workPackages.reduce((a, b) => a + b.hours, 0);
    return (
        <Box>
            <Typography variant="h3" fontWeight={800}>Zephyr RISC-V <span
                style={{color: '#475569'}}>Secure Kernel</span></Typography>
            <Typography color="text.secondary" sx={{mt: 1, mb: 3}}>
                Upstream-first hardening for RISC-V: privilege separation (M/S/U), PMP/ePMP memory isolation, secure
                traps, and reproducible tests — built in the open.
            </Typography>
            <Stack direction="row" spacing={2} sx={{mb: 4}}>
                <Button href={links.repo} target="_blank" startIcon={<GitHubIcon/>}>Repository</Button>
                <Button variant="outlined" href={links.zephyrPR} target="_blank" startIcon={<RocketLaunchIcon/>}>Related
                    PR</Button>
            </Stack>


            <Grid container spacing={2} sx={{mb: 4}}>
                <Grid item xs={12} sm={4}><StatCard label="Work packages" value={String(workPackages.length)}
                                                    icon={<LayersIcon/>}/></Grid>
                <Grid item xs={12} sm={4}><StatCard label="Planned hours" value={`${totalHours} h`}
                                                    icon={<RocketLaunchIcon/>}/></Grid>
                <Grid item xs={12} sm={4}><StatCard label="Focus" value={'Upstream-first'} icon={<GitHubIcon/>}/></Grid>
            </Grid>


            <Grid container spacing={2}>
                {valueProps.map((v, i) => (
                    <Grid item xs={12} md={4} key={i}>
                        <StatCard label={v.title} value={v.text} icon={v.icon}/>
                    </Grid>
                ))}
            </Grid>


            <Typography variant="body2" color="text.secondary" sx={{mt: 3}}>
                Funding window: 12 months • License: Apache-2.0 • CI: Twister/QEMU/renode + HW • Docs in <span
                className="code">docs/</span>
            </Typography>


            <Typography variant="body2" color="text.secondary" sx={{mt: 1}}>
                Discussions: <MuiLink href={links.discussions} target="_blank">GitHub Discussions</MuiLink>
            </Typography>
        </Box>
    );
}