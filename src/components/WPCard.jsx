import * as React from 'react';
import {Card, CardContent, Chip, Stack, Typography, List, ListItem, ListItemText} from '@mui/material';


export default function WPCard({title, hours, bullets}) {
    return (
        <Card>
            <CardContent>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                    <Typography variant="h6" fontWeight={700}>{title}</Typography>
                    <Chip label={`${hours} h`} color="default" variant="outlined"/>
                </Stack>
                <List dense>
                    {bullets.map((b, i) => (
                        <ListItem key={i} disableGutters>
                            <ListItemText primary={b}/>
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
}