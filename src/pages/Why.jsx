import * as React from 'react';
import {Grid, Card, CardContent, Typography} from '@mui/material';
import Section from '../components/Section';
import {valueProps} from '../data/valueProps';
import Box from '@mui/material/Box';

export default function Why() {
    return (
        <Box>
            <Section title="Motivation" subtitle="Instead of rewriting firmware for every RISC-V SoC, we let Zephyr do the heavy lifting — its community and driver library become the foundation of the SBI world.">

                Without Zephyr-SBI:<br/>
                Hardware → OpenSBI Platform Code → Linux
                <br/>
                or
                <br/>
                Hardware → Zephyr Drivers → Zephyr Apps

                <p/>
                With Zephyr-SBI: <br/>
                Hardware → Zephyr-SBI Drivers → (Linux / Zephyr-S) → Apps

            </Section>

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


        </Box>
    );
}