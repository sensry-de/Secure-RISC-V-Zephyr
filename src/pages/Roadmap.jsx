import * as React from 'react';
import {Grid} from '@mui/material';
import Section from '../components/Section';
import {workPackages} from '../data/workPackages';
import {milestones} from '../data/milestones';
import WPCard from '../components/WPCard';
import StatCard from '../components/StatCard';


export default function Roadmap() {
    const totalHours = workPackages.reduce((a, b) => a + b.hours, 0);
    return (
        <Section title="Roadmap" subtitle="Work packages & milestones">
            <Grid container spacing={2} sx={{mb: 2}}>
                <Grid item xs={12} md={8}>
                    <Grid container spacing={2}>
                        {workPackages.map((wp) => (
                            <Grid item xs={12} key={wp.id}><WPCard {...wp} /></Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Grid container spacing={2}>
                        {milestones.map((m, i) => (
                            <Grid item xs={12} key={i}>
                                <StatCard label={m.when} value={m.what}/>
                            </Grid>
                        ))}
                        <Grid item xs={12}>
                            <StatCard label="Total hours" value={`${totalHours} h`}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Section>
    );
}