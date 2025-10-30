import * as React from 'react';
import {Grid, Card, CardContent, Typography} from '@mui/material';
import Section from '../components/Section';
import {valueProps} from '../data/valueProps';


export default function Why() {
    return (
        <Section title="Why it matters" subtitle="Open, auditable security primitives for Zephyr on RISC-V.">
            <Grid container spacing={2}>
                {valueProps.map((v, i) => (
                    <Grid item xs={12} md={4} key={i}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" gutterBottom sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1
                                }}>{v.icon} {v.title}</Typography>
                                <Typography color="text.secondary">{v.text}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Section>
    );
}