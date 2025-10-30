import * as React from 'react';
import {Card, CardContent, Chip, Grid, Stack, Typography, Button} from '@mui/material';
import Section from '../components/Section';
import {community} from '../data/community';
import {links} from '../data/links';


export default function Community() {
    return (
        <Section title="Community & upstream" subtitle="We coordinate openly with Zephyr/RISC-V maintainers.">
            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Reviewers & contacts</Typography>
                            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                                {community.map((h) => (
                                    <Chip key={h} label={`@${h}`} component="a" href={`https://github.com/${h}`}
                                          clickable target="_blank"/>))}
                            </Stack>
                            <Button sx={{mt: 2}} variant="outlined" href={links.zephyrPR} target="_blank">Related Zephyr
                                PR</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Contribution model</Typography>
                            <ul>
                                <li>RFCs in repo; issues labelled <code>upstream</code> and <code>security</code></li>
                                <li>PRs split into reviewable steps with tests</li>
                                <li>Weekly public status note in Discussions</li>
                            </ul>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Section>
    );
}