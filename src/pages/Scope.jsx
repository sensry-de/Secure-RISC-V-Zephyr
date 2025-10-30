import * as React from 'react';
import {Grid, Card, CardContent, Typography, List, ListItem, ListItemText} from '@mui/material';
import Section from '../components/Section';


export default function Scope() {
    return (
        <Section title="Scope" subtitle="Features & deliverables">
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Security features</Typography>
                            <List dense>
                                <ListItem><ListItemText
                                    primary="M-mode monitor with trap delegation (MIDELEG/MEDELEG)"/></ListItem>
                                <ListItem><ListItemText primary="PMP/ePMP isolation per thread/partition"/></ListItem>
                                <ListItem><ListItemText primary="Userspace (U-mode) with strict syscalls"/></ListItem>
                                <ListItem><ListItemText primary="OpenSBI path for S-mode platforms"/></ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Deliverables</Typography>
                            <List dense>
                                <ListItem><ListItemText primary="Code in arch/riscv/ + tests and docs"/></ListItem>
                                <ListItem><ListItemText primary="Security/Porting guides (Sphinx/ReST)"/></ListItem>
                                <ListItem><ListItemText
                                    primary="CI (Twister) with negative tests on QEMU & HW"/></ListItem>
                                <ListItem><ListItemText primary="Reference boards and demo app"/></ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Section>
    );
}